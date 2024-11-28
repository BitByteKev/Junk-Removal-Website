import { useState, useEffect } from "react";

function NavBar() {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`min-w-screen sticky top-0 z-10 transition duration-300 ${
        isAtTop ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/assets/logo.png" alt="Logo" width="150px" />
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <a
                href="#home"
                className="text-black hover:text-blue-700 font-semibold hover:overline"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-black hover:text-blue-700 font-semibold hover:overline"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-black hover:text-blue-700 font-semibold hover:overline"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </nav>
  );
}

export default NavBar;
