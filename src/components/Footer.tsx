import { FaLinkedin, FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bottom-0 left-0 z-20 w-full p-4 border-t-2 bg-white border-gray-200 md:p-6">
      <div className="w-full mx-auto max-w-screen-xl flex flex-col md:flex-row md:items-center md:justify-between">
        {/* Copyright (Left) */}
        <span className="text-md text-center">
          © {new Date().getFullYear()}{" "}
          <a href="https://hynekcerny.cz/" className="hover:underline hover:text-blue-700">
            Hynek Černý
          </a> | Build with ❤️ using React
        </span>

        {/* Social Icons (Right) */}
        <div className="flex space-x-4 mt-4 md:mt-0 justify-center">
          <a href="https://linkedin.com/in/hynekcerny" aria-label="Link to LinkedIn profile" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700">
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a href="https://github.com/HynekCerny" aria-label="Link to GitHub profile" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700">
            <FaGithub className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;