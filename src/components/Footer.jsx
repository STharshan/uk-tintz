import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaFacebookF, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  const servicesLinks = [
    { name: "Window Tinting", path: "/windowtinting" },
    { name: "Stereo Fitting", path: "/stereofitting" },
    { name: "Reverse Camera Fitting", path: "/reversecamera" },
    { name: "Parking Sensors", path: "/parkingsensors" },
    { name: "Dashcams", path: "/dashcams" },
    { name: "Commercial Window Tinting", path: "/commercialwindow" },
    { name: "Residential Tinting", path: "/residentialtinting" },
    { name: "Car Vinyl Wrapping", path: "/CarVinylWrapping" },
  { name: "Interior Vinyl Wrapping", path: "/interiorVinylWrapping" },
  { name: "Headlight & Taillight Tinting", path: "/headlightTaillightTinting" },
  { name: "Sun Visor Service", path: "/sunVisors" },
  ];

  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid md:grid-cols-3 gap-8">

          {/* Company Info */}
          <div>
            {/* LOGO */}
            <img
              src="/UK_TINTz_Logo_Design-removebg-preview.png"
              alt="UK Tintz Logo"
              className="h-18 w-auto mb-4"
            />

            <p className="text-gray-400 mb-4 leading-relaxed">
              A trusted name in tinting for decades — delivering excellence
              across Nottingham and beyond.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-3">
              <a
                href="https://www.instagram.com/uktintz/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FiInstagram
                  className="text-gray-400 hover:text-pink-600 transition duration-300"
                  size={20}
                />
              </a>

              <a
                href="https://www.facebook.com/uktintz.nottingham/?locale=en_GB"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF
                  className="text-gray-400 hover:text-blue-500 transition duration-300"
                  size={20}
                />
              </a>

              <a
                href="https://www.tiktok.com/@uktintz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <FaTiktok
                  className="text-gray-400 hover:text-white transition duration-300"
                  size={20}
                />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4 bg-linear-to-r from-red-500 to-[#0072ff] bg-clip-text text-transparent">
              Services
            </h3>
            <ul className="space-y-2 text-gray-400">
              {servicesLinks.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.path}
                    className="hover:text-white transition duration-300"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold mb-4 bg-linear-to-r from-red-500 to-[#0072ff] bg-clip-text text-transparent">
              Contact Info
            </h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-red-500 mt-1" size={18} />
                <a
                  href="https://maps.app.goo.gl/BiNemYxQ5iCJgi5w5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition duration-300"
                >
                  Unit 6, Broxtowe Park Business Centre  
                  Calverton Drive, Nottingham NG8 6QP
                </a>
              </li>

              <li className="flex items-center space-x-3">
                <FaPhoneAlt className="text-red-500" size={18} />
                <a
                  href="tel:07506717961"
                  className="hover:text-white transition duration-300"
                >
                  07506 717 961
                </a>
              </li>

              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-red-500" size={18} />
                <a
                  href="mailto:Peterattaway1987@gmail.com"
                  className="hover:text-white transition duration-300 break-all"
                >
                  Peterattaway1987@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 UK Tintz. All rights reserved.</p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-2 flex flex-col sm:flex-row justify-center items-center gap-3 text-sm text-gray-400">
          <div className="flex gap-4">
            <Link to="/terms" className="hover:text-red-500 transition">
              Terms & Conditions
            </Link>
            <span>|</span>
            <Link to="/privacy" className="hover:text-red-500 transition">
              Privacy Policy
            </Link>
          </div>

          <p>
            Powered by{" "}
            <a
              href="https://www.ansely.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:underline"
            >
              Ansely
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
