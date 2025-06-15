import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-gradient-to-tr from-blue-100 via-indigo-100 to-rose-100 text-blue-900 py-10 px-6 border-t border-x border-blue-300 shadow-inner"
    >
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-3 items-center">
        {/* Left: Branding */}
        <div>
          <h2 className="text-2xl font-bold text-blue-800">Alpha_Quizzz</h2>
          <p className="text-sm text-blue-700 mt-2">
            © {new Date().getFullYear()} CodTech Internship. All rights reserved.
          </p>
        </div>

        {/* Center: Newsletter */}
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
          <form className="flex justify-center items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-full bg-white text-blue-900 text-sm focus:outline-none border border-blue-300 shadow-sm"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Right: Social Icons */}
        <div className="flex justify-center md:justify-end gap-5 text-2xl">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 transition">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 transition">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 transition">
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Developer Credit */}
      <div className="text-center mt-8 text-sm text-blue-800">
        Built with ❤️ by  <span className="font-semibold">Khushal</span>
      </div>
    </motion.footer>
  );
};

export default Footer;
