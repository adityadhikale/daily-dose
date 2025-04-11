import { Search } from "lucide-react";
import logo from "../assets/images/logo.svg";

const categories = [
  "latest",
  "world",
  "business",
  "technology",
  "sports",
  "entertainment",
  "science",
  "health",
];


export default function Navbar({
  activeCategory,
  onCategoryChange,
  source,
  setSource,
  search,
  setSearch,
  onSearchSubmit
}) {

  const validCategoriesForNewsData = ["latest", "business", "technology", "sports", "health"];
  const displayedCategories = source === "newsdata" ? validCategoriesForNewsData : categories;

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="w-full px-4 sm:px-8 py-3 flex items-center justify-between gap-4">
        {/* Logo + Name */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Daily Dose Logo" className="w-8 h-8" />
          <h1 className="text-xl font-bold text-blue-700">Daily Dose</h1>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md hidden sm:flex items-center border border-gray-300 rounded-xl px-3 py-1.5 bg-white">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") onSearchSubmit();
            }}
            placeholder="Search news..."
            className="flex-1 outline-none bg-transparent text-sm text-gray-700"
          />
          <button onClick={onSearchSubmit} className="text-gray-500 hover:text-blue-600 transition">
            <Search className="w-5 h-5" />
          </button>

        </div>

        {/* Source Dropdown */}
        <div className="hidden sm:flex items-center gap-2">
          <label htmlFor="source-select" className="text-sm text-gray-600">
            Source:
          </label>
          <select
            id="source-select"
            value={source}
            onChange={(e) => setSource(e.target.value)}
            className="border px-2 py-1 rounded text-sm bg-white"
          >
            <option value="gnews">GNews</option>
            <option value="newsdata">NewsData</option>
          </select>
        </div>
      </div>

      {/* Category Navigation */}
      <nav className="w-full bg-gray-100 border-t border-b border-gray-200">
        <ul className="flex overflow-x-auto no-scrollbar text-sm sm:text-base px-4 sm:px-8 py-2 gap-4 whitespace-nowrap">
          {displayedCategories.map((cat) => (
            <li
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={`cursor-pointer px-3 py-1 rounded-full transition ${activeCategory === cat
                  ? "bg-blue-100 text-blue-700 font-semibold"
                  : "text-gray-700 hover:bg-gray-200"
                }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
