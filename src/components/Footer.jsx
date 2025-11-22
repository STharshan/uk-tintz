import React from "react";
import { FaFacebookF, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl font-bold bg-linear-to-r from-red-500 to-[#0072ff] bg-clip-text text-transparent">
                UK<span className="text-gray-400">Tintz</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4 mt-3 leading-relaxed">
             A trusted name in tinting for decades — delivering excellence across the Midlands and beyond.
            </p>
            <div className="flex space-x-4">
              <a
                 href="https://www.instagram.com/uktintz/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FiInstagram
                  className="text-gray-400 hover:text-blue-600 cursor-pointer transition-colors duration-300"
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
              {[
                "Window Tinting",
                "Stereo fitting",
                "Reverse camera fitting",
                "Parking sensors",
                "Dashcams",
                "Commercial window tinting",
                "Residential tinting"
              ].map((service, index) => (
                <li key={index}>
                  <a href="#services" className="hover:text-white transition-colors duration-300">
                    {service}
                  </a>
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
                  className="hover:text-white transition-colors duration-300"
                >
                  Unit 6. Broxtowe Park Business Centre Calverton Drive Nottingham NG8 6QP
                </a>
              </li>

              <li className="flex items-center space-x-3">
                <FaPhoneAlt className="text-red-500" size={18} />
                <a
                  href="tel: 07506 717 961"
                  className="hover:text-white transition-colors duration-300"
                >
                  07506 717 961
                </a>
              </li>

              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-red-500" size={18} />
                <a
                  href="mailto:Peterattaway1987@gmail.com"
                  className="hover:text-white transition-colors duration-300 break-all"
                >
                  Peterattaway1987@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 UK Tintz. All rights reserved.</p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-2 flex flex-col sm:flex-row justify-center items-center gap-3 text-center font-semibold text-gray-400">
          {/* Left: Terms & Privacy */}
          <div className="flex gap-4 text-sm">
            <Link
              to="/terms"
              className="text-gray-400 hover:text-red-500 transition duration-300"
            >
              Terms & Conditions
            </Link>
            <span className="text-gray-500">|</span>
            <Link
              to="/privacy"
              className="text-gray-400 hover:text-red-500 transition duration-300"
            >
              Privacy Policy
            </Link>
          </div>

          {/* Center: Powered by Ansely (unchanged) */}
          <p className="text-center font-semibold text-gray-400">
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
