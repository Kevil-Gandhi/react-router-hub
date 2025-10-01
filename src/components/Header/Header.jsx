import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="shadow-lg sticky z-50 top-0 backdrop-blur-md bg-white/90 border-b border-gray-200">
      <nav className="px-4 lg:px-6 py-3">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center group">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-xl mr-3 group-hover:scale-105 transition-transform duration-200">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L3 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-1.254.145a1 1 0 11-.992-1.736L14.984 6l-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.723V12a1 1 0 11-2 0v-1.277l-1.246-.855a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.277l1.246.855a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.277V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              ReactRouter
            </span>
          </Link>
          
          <div className="flex items-center lg:order-2 space-x-3">
            <Link
              to="#"
              className="text-gray-700 hover:text-orange-600 font-medium rounded-lg text-sm px-4 py-2 transition-colors duration-200"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="text-white bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 font-medium rounded-lg text-sm px-6 py-2.5 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Get started
            </Link>
          </div>
          
          <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded-lg transition-all duration-200 ${
                      isActive 
                        ? "text-white bg-gradient-to-r from-orange-500 to-red-500 shadow-lg" 
                        : "text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded-lg transition-all duration-200 ${
                      isActive 
                        ? "text-white bg-gradient-to-r from-orange-500 to-red-500 shadow-lg" 
                        : "text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                    }`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded-lg transition-all duration-200 ${
                      isActive 
                        ? "text-white bg-gradient-to-r from-orange-500 to-red-500 shadow-lg" 
                        : "text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                    }`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/github"
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded-lg transition-all duration-200 ${
                      isActive 
                        ? "text-white bg-gradient-to-r from-orange-500 to-red-500 shadow-lg" 
                        : "text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                    }`
                  }
                >
                  Github
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}