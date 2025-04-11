import NewsList from "./components/NewsList";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [category, setCategory] = useState("latest");
  const [source, setSource] = useState("gnews");  // or 'newsdata'
  const [search, setSearch] = useState("");
  const [submittedSearch, setSubmittedSearch] = useState("");

  const handleSearchSubmit = () => {
    setCategory("latest");
    setSubmittedSearch(search.trim());
  };

  return (
    <>
      <Navbar
        activeCategory={category}
        onCategoryChange={setCategory}
        source={source}
        setSource={setSource}
        search={search}
        setSearch={setSearch}
        onSearchSubmit={handleSearchSubmit}
      />
      <NewsList category={category} source={source} search={submittedSearch} />
      <Footer />
    </>
  );
}

export default App;
