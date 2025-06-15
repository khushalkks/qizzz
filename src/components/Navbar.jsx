import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      className="bg-indigo-100 text-black shadow-md sticky top-0 z-50"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-wide text-indigo-800 hover:text-indigo-600 transition duration-300"
        >
          Alpha_Quizzz
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-4">
          <div className="space-x-3 md:space-x-6 text-sm md:text-base">
            <a href="#home" className="px-4 py-2 rounded-full hover:bg-indigo-200 hover:text-indigo-900">Home</a>
            <a href="#about" className="px-4 py-2 rounded-full hover:bg-indigo-200 hover:text-indigo-900">About</a>
            <a href="#feature" className="px-4 py-2 rounded-full hover:bg-indigo-200 hover:text-indigo-900">Feature</a>
            <a href="#testimonial" className="px-4 py-2 rounded-full hover:bg-indigo-200 hover:text-indigo-900">Testimonial</a>
          </div>

          {/* Sign Up Button */}
          <div className="space-x-2 ml-4">
            <Link
              to="/signup"
              className="px-4 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition duration-300"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
