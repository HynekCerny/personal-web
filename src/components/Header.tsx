import type React from "react";
import { User, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Smooth scrolling function
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    e.preventDefault();
    const id = targetId.replace("#", ""); // Remove # if present

    // const targetElement = id === "home" ? document.body : document.getElementById(id);

    // if (targetElement) {
    //   targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    // }

    if (id === "home") {
      // Scroll to 0 manually instead of using scrollIntoView
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const targetElement = document.getElementById(id);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }

    setIsOpen(false); // Close mobile menu after clicking
  };

  // Detect scrolling to add shadow to navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detect which section is active
  useEffect(() => {
    const sections = [
      { id: "about", name: "About Me" },
      { id: "skills", name: "Skills & Expertise" },
      { id: "experiences", name: "Work Experience" },
      { id: "contact", name: "Contact Me" },
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollPosition >= documentHeight - 10) {
        setActiveSection("contact");
        return;
      }

      sections.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (!element) return;

        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + window.scrollY;

        if (window.scrollY >= elementTop - 200 && window.scrollY < elementTop + rect.height - 200) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`border-gray-200 fixed w-full top-0 left-0 z-20 backdrop-blur-lg bg-gradient-to-t from-white transition-all duration-500 ease-in-out ${
        isScrolled ? "shadow-lg" : "shadow-none"
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" onClick={(e) => handleSmoothScroll(e, "home")} className="flex items-center space-x-2">
          <User className="w-6 h-6 font-bold stroke-[2.5]" />
          <span className="text-2xl font-semibold">Hynek Černý</span>
        </a>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <span className="sr-only">Open main menu</span>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        <div className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}>
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
            {[
              { id: "about", name: "About Me" },
              { id: "skills", name: "Skills & Expertise" },
              { id: "experiences", name: "Work Experience" },
              { id: "contact", name: "Contact Me" },
            ].map(({ id, name }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => handleSmoothScroll(e, id)}
                  className={`block py-2 px-3 rounded-sm md:p-0 ${
                    activeSection === id
                      ? "text-white bg-blue-700 md:bg-transparent md:text-blue-700"
                      : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
                  }`}
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
