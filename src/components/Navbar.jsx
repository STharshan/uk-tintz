import React, { useState, useRef, useEffect } from "react";
import { FiInstagram, FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesRef = useRef(null);

  const navLinks = [
    { name: "Home", href: "/#" },
    { name: "Our Project", href: "/#ourproject" },
    { name: "Services", href: "/services" }, // Dropdown handled separately
    { name: "Gallery", href: "/#gallery" },
    { name: "Contact", href: "/#contact" },
  ];

  const servicesLinks = [
    { name: "Window Tinting", href: "/windowtinting" },
    { name: "Stereo Fitting", href: "/stereofitting" },
    { name: "Reverse Camera", href: "/reversecamera" },
    { name: "Parking Sensors", href: "/parkingsensors" },
    { name: "Dashcams", href: "/dashcams" },
    { name: "Commercial Window", href: "/commercialwindow" },
    { name: "Residential Tinting", href: "/residentialtinting" },
  ];

  const socialLinks = [
    {
      icon: <FiInstagram />,
      href: "https://www.instagram.com/uktintz/",
    },
  ];

  // Close desktop dropdown if click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target)
      ) {
        setDesktopServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white text-red-500 px-6 md:px-12 lg:px-20 shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="UK Logo"
            className="w-36 h-12 object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((item) => {
            if (item.name === "Services") {
              return (
                <div
                  key={item.name}
                  ref={servicesRef}
                  className="relative"
                >
                  <button
                    onClick={() =>
                      setDesktopServicesOpen(!desktopServicesOpen)
                    }
                    className="flex items-center gap-1 font-semibold text-red-500 hover:text-red-500 transition-colors"
                  >
                    {item.name} <FiChevronDown />
                  </button>

                  {/* Dropdown */}
                  {desktopServicesOpen && (
                    <div className="absolute left-0 mt-2 w-48 bg-[#222] rounded-md shadow-lg z-50">
                      {servicesLinks.map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          className="block px-4 py-2 text-gray-200 hover:text-black transition-colors"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            } else {
              return (
                <HashLink
                  key={item.name}
                  smooth
                  to={item.href}
                  className="flex items-center gap-1 font-semibold text-red-500 hover:text-black transition-colors"
                >
                  {item.name}
                </HashLink>
              );
            }
          })}
        </div>

        {/* Desktop Social Icons */}
        <div className="hidden lg:flex items-center gap-3">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2c2c2c] p-2 rounded-full hover:text-pink-600 transition-colors"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Mobile Right Side */}
        <div className="flex items-center gap-2 lg:hidden">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2c2c2c] p-2 rounded-full hover:text-pink-500 transition-colors"
            >
              {item.icon}
            </a>
          ))}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="bg-[#2c2c2c] p-2 rounded-full text-xl"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden mt-4 bg-[#222] rounded-lg p-4 space-y-3">
          {navLinks.map((item) => {
            if (item.name === "Services") {
              return (
                <div key={item.name} className="space-y-2">
                  <button
                    onClick={() =>
                      setMobileServicesOpen(!mobileServicesOpen)
                    }
                    className="w-full flex justify-between items-center py-2 text-gray-200 hover:text-red-500 font-semibold border-b border-red-500/20 last:border-0 transition-colors"
                  >
                    {item.name} <FiChevronDown />
                  </button>
                  {mobileServicesOpen &&
                    servicesLinks.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        onClick={() => setMenuOpen(false)}
                        className="block pl-6 py-2 text-gray-200 hover:text-red-500 transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                </div>
              );
            } else {
              return (
                <HashLink
                  key={item.name}
                  smooth
                  to={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 text-gray-200 hover:text-red-500 border-b border-red-500/20 last:border-0 transition-colors"
                >
                  {item.name}
                </HashLink>
              );
            }
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
