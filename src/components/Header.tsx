import type React from "react";
import { User, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const sections = [
    { id: "about", name: "About Me" },
    { id: "skills", name: "Skills & Expertise" },
    { id: "experiences", name: "Work Experience" },
    { id: "contact", name: "Contact Me" },
  ];

  /* Smooth scrolling function */
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    e.preventDefault();
    setIsOpen(false); // Close mobile menu after clicking

    if (targetId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  /* Detect scrolling to add shadow to navbar */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Detect which section is active */
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollPosition >= documentHeight - 10) {
        setActiveSection("contact");
        return;
      }

      if (scrollPosition == window.innerHeight) {
        setActiveSection("");
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
      className={`dark:text-gray-200 border-gray-200 fixed w-full top-0 left-0 z-20 backdrop-blur-lg bg-gradient-to-t dark:from-gray-950 from-white transition-all duration-500 ease-in-out ${isScrolled || isOpen ? "shadow-lg dark:shadow-lg" : "shadow-none dark:shadow-none"
        }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" onClick={(e) => handleSmoothScroll(e, "home")} className="flex items-center space-x-2">
          <User className="w-6 h-6 font-bold stroke-[2.5]" />
          <span className="text-2xl font-medium">Hynek Černý</span>
        </a>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="cursor-pointer inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden relative"
        >
          <span className="sr-only">Toggle main menu</span>
          <Menu className={`w-6 h-6 absolute transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0 scale-0 rotate-90' : 'opacity-100 scale-100 rotate-0'
              }`}
          />
          <X
            className={`w-6 h-6 absolute transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 scale-100 rotate-90' : 'opacity-0 scale-0 rotate-0'
              }`}
          />
        </button>

        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            } md:opacity-100 md:max-h-none md:block md:w-auto w-full`}
        >
            <ul className="font-medium flex flex-col p-4 md:p-2 mt-4 border rounded-2xl md:flex-row md:space-x-8 md:mt-0 md:border-0 border-gray-500">
              {
              sections.map(({ id, name }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={(e) => handleSmoothScroll(e, id)}
                    className={`block py-2 px-3 rounded-sm md:p-0 ${activeSection === id
                      ? "text-white bg-blue-700 md:bg-transparent md:text-blue-700"
                      : "text-gray-900 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:md:hover:bg-transparent md:hover:bg-transparent md:hover:text-blue-700"
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
