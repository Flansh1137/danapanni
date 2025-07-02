import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/Button";

import logo from "../assets/Logo.png";


const HeaderSection = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}

          <Link to="/" className="text-xl font-bold flex text-green-600">
          <img src={logo} alt="Logo" className="h-[2.2rem] w-auto" />
            Danapaani
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-green-600 hover:text-green-700 font-medium border-b-2 border-green-600"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-green-600 font-medium"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-green-600 font-medium"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-gray-900 hover:bg-gray-800 text-white px-6">
              Join/Giving
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav with animation */}
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden md:hidden ${
            isMobileMenuOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pt-4 pb-6 space-y-3">
            <Link
              to="/"
              className="block text-green-600 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block text-gray-700 hover:text-green-600 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block text-gray-700 hover:text-green-600 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white">
              Join/Giving
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
