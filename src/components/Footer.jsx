import logo from "../assets/images/logo.svg";
import { Newspaper, Home, Briefcase, Laptop, Clapperboard, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#343a40] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Name vertically stacked */}
        <div className="flex flex-col items-center text-center">
          <img src={logo} alt="Daily Dose Logo" className="w-10 h-10 mb-2" />
          <div className="flex items-center gap-2 mb-1">
            <h1 className="text-2xl font-bold">Daily Dose</h1>
          </div>
          <p className="text-sm">Your daily scoop of trusted news.</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 flex flex-col items-center">
            <li className="flex items-center gap-2">
              <Home className="w-4 h-4 text-gray-300" />
              <a href="#" className="hover:text-gray-300 transition">Home</a>
            </li>
            <li className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-gray-300" />
              <a href="#business" className="hover:text-gray-300 transition">Business</a>
            </li>
            <li className="flex items-center gap-2">
              <Laptop className="w-4 h-4 text-gray-300" />
              <a href="#technology" className="hover:text-gray-300 transition">Technology</a>
            </li>
            <li className="flex items-center gap-2">
              <Clapperboard className="w-4 h-4 text-gray-300" />
              <a href="#entertainment" className="hover:text-gray-300 transition">Entertainment</a>
            </li>
          </ul>
        </div>

        {/* Extra Info */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-xl font-semibold mb-4">Connect</h2>
          <div className="flex items-center gap-2 mb-2">
            <Mail className="w-4 h-4 text-gray-300" />
            <p className="text-sm">Stay updated with us!</p>
          </div>
          <p className="text-sm">&copy; {new Date().getFullYear()} Daily Dose. All rights reserved.</p>
        </div>
      </div>

      {/* Made with ❤️ */}
      <div className="text-center mt-8 text-sm text-gray-300">
        Made with <span className="text-red-500">❤️</span> by <strong>Aditya</strong>
      </div>
    </footer>
  );
};

export default Footer;
