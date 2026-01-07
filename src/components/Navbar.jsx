import React, { useState, useRef, useEffect } from "react";
import { FiInstagram, FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { FaFacebookF, FaTiktok } from "react-icons/fa";
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
    { name: "Services", href: "/services" },
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
    { name: "Car Vinyl Wrapping", href: "/CarVinylWrapping" },
    { name: "Interior Vinyl Wrapping", href: "/interiorVinylWrapping" },
    { name: "Headlight & Taillight Tinting", href: "/headlightTaillightTinting" },
    { name: "Sun Visors", href: "/sunVisors" },
  ];

  const socialLinks = [
    {
      icon: <FiInstagram className="text-gray-400 hover:text-pink-500 transition duration-300" />,
      href: "https://www.instagram.com/uktintz/",
    },
    {
      icon: <FaFacebookF className="text-gray-400 hover:text-blue-500 transition duration-300" />,
      href: "https://www.facebook.com/uktintz.nottingham/?locale=en_GB",
    },
    {
      icon: <FaTiktok className="text-gray-400 hover:text-white transition duration-300" />,
      href: "https://www.tiktok.com/@uktintz",
    },
  ];

  // Close desktop dropdown if click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setDesktopServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const carbonFiberStyle =
    "bg-[repeating-linear-gradient(45deg,#1a1a1a,#1a1a1a_4px,#111_4px,#111_8px)] border border-white/10 rounded-lg shadow-md";

  return (
    <nav className={`fixed w-full z-50 ${carbonFiberStyle}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between h-18 px-6 md:px-12 lg:px-20 py-3">
        {/* Logo */}
        <img
          src="/logo.png"
          alt="UK Logo"
          className="w-25 h-20 object-contain"
        />

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((item) => {
            if (item.name === "Services") {
              return (
                <div key={item.name} ref={servicesRef} className="relative">
                  <button
                    onClick={() => setDesktopServicesOpen(!desktopServicesOpen)}
                    className="flex items-center gap-1 font-semibold text-white hover:text-red-500 transition-colors"
                  >
                    {item.name} <FiChevronDown />
                  </button>

                  {desktopServicesOpen && (
                    <div
                      className={`absolute left-0 mt-2 w-48 z-50 p-2 ${carbonFiberStyle}`}
                    >
                      {servicesLinks.map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          className="block px-4 py-2 text-gray-200 hover:text-red-500 rounded-md"
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
                  className="flex items-center gap-1 font-semibold text-white hover:text-red-500 transition-colors"
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
              className="bg-[#2c2c2c] p-2 rounded-full"
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
              className="bg-[#2c2c2c] p-2 rounded-full"
            >
              {item.icon}
            </a>
          ))}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="bg-red-500 p-2 rounded-full text-xl"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={`lg:hidden mt-2 p-4 space-y-3 ${carbonFiberStyle}`}>
          {navLinks.map((item) => {
            if (item.name === "Services") {
              return (
                <div key={item.name} className="space-y-2">
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
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
