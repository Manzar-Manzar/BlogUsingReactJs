import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-gray-600 border border-t-2 border-t-black text">
      <div className="relative z-10 mx-auto max-w-7xl px-4 flex justify-between items-center">
        {/* Left Side - Logo and Copyright */}
        <div className="w-full p-6 md:w-1/2 lg:w-5/12">
          <div className="flex h-full flex-col justify-between">
            <div className="mb-4 inline-flex items-center">
              <Logo width="100px" />
            </div>
            <div>
              <p className="text-sm text-black">
                &copy; Copyright 2024. All Rights Reserved by MK.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Follow Us Links */}
        <div className="w-full p-6 md:w-1/2 lg:w-7/12 flex justify-end">
          <div className="h-full text-right">
            <h3 className="tracking-px mb-4 text-xs font-semibold uppercase text-black-500">
              Follow Us
            </h3>
            <ul className="flex space-x-6">
              <li>
                <a
                  className="text-black hover:text-gray-700"
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  className="text-black-900 hover:text-gray-700"
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  className="text-black-900 hover:text-gray-700"
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  className="text-black-900 hover:text-gray-700"
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  className="text-black-900 hover:text-gray-700"
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
