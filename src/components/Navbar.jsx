import { useState, useRef, useEffect } from "react";
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
    { name: "Services", isDropdown: true },
    { name: "Gallery", href: "/#gallery" },
    { name: "Contact", href: "/#contact" },
  ];

  // UPDATED: All hrefs now match kebab-case routes in App.js
  const servicesLinks = [
    { name: "Window Tinting", href: "/window-tinting" },
    { name: "Stereo Fitting", href: "/stereo-fitting" },
    { name: "Reverse Camera", href: "/reverse-camera" },
    { name: "Parking Sensors", href: "/parking-sensors" },
    { name: "Dashcams", href: "/dashcams" },
    { name: "Commercial Window", href: "/commercial-window" },
    { name: "Residential Tinting", href: "/residential-tinting" },
    { name: "Car Vinyl Wrapping", href: "/car-vinyl-wrapping" },
    { name: "Interior Vinyl Wrapping", href: "/interior-vinyl-wrapping" },
    { name: "Headlight & Taillight Tinting", href: "/headlight-taillight-tinting" },
    { name: "Sun Visors", href: "/sun-visors" },
  ];

  const socialLinks = [
    { icon: <FiInstagram />, href: "https://www.instagram.com/uktintz/", color: "hover:text-pink-500" },
    { icon: <FaFacebookF />, href: "https://www.facebook.com/uktintz.nottingham/", color: "hover:text-blue-500" },
    { icon: <FaTiktok />, href: "https://www.tiktok.com/@uktintz", color: "hover:text-white" },
  ];

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
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6 md:px-12 lg:px-20">
        {/* Logo */}
        <Link to="/">
          <img src="/logo.png" alt="Logo" className="w-24 h-20 object-contain" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((item) => (
            item.isDropdown ? (
              <div key={item.name} ref={servicesRef} className="relative">
                <button
                  onClick={() => setDesktopServicesOpen(!desktopServicesOpen)}
                  className="flex items-center gap-1 font-semibold text-white hover:text-red-500 transition-colors uppercase text-sm tracking-wider"
                >
                  {item.name} <FiChevronDown className={`transition-transform ${desktopServicesOpen ? 'rotate-180' : ''}`} />
                </button>

                {desktopServicesOpen && (
                  <div className={`absolute left-0 mt-4 w-64 z-50 p-2 overflow-hidden ${carbonFiberStyle} animate-in fade-in slide-in-from-top-2 duration-200`}>
                    <div className="grid grid-cols-1">
                      {servicesLinks.map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          onClick={() => setDesktopServicesOpen(false)}
                          className="block px-4 py-2 font-medium text-gray-300 hover:text-white hover:bg-red-600/20 rounded-md transition-all"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <HashLink
                key={item.name}
                smooth
                to={item.href}
                className="font-semibold text-white hover:text-red-500 transition-colors uppercase text-sm tracking-wider"
              >
                {item.name}
              </HashLink>
            )
          ))}
        </div>

        {/* Desktop Socials */}
        <div className="hidden lg:flex items-center gap-3">
          {socialLinks.map((item, index) => (
            <a key={index} href={item.href} target="_blank" rel="noopener noreferrer" className={`bg-[#2c2c2c] p-2 rounded-full text-gray-400 ${item.color} transition-all`}>
              {item.icon}
            </a>
          ))}
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="bg-red-600 p-2 rounded-lg text-white text-2xl shadow-lg shadow-red-600/20"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={`lg:hidden mx-4 mb-4 p-4 space-y-2 ${carbonFiberStyle} border-t-0 rounded-t-none animate-in slide-in-from-top-5 duration-300`}>
          {navLinks.map((item) => (
            item.isDropdown ? (
              <div key={item.name} className="border-b border-white/5 pb-2">
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full flex justify-between items-center py-3 text-white font-bold uppercase text-sm tracking-widest"
                >
                  {item.name} <FiChevronDown className={mobileServicesOpen ? 'rotate-180' : ''} />
                </button>
                {mobileServicesOpen && (
                  <div className="pl-4 space-y-1 mt-1 bg-black/20 rounded-lg py-2">
                    {servicesLinks.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        onClick={() => setMenuOpen(false)}
                        className="block py-2 text-sm text-gray-400 hover:text-red-500 transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <HashLink
                key={item.name}
                smooth
                to={item.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-white font-bold uppercase text-sm tracking-widest border-b border-white/5 last:border-0 hover:text-red-500 transition-colors"
              >
                {item.name}
              </HashLink>
            )
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;