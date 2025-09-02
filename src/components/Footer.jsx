import React from "react";

function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          {/* About Section */}
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              About Us
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="/about" className="hover:underline">
                  Who We Are
                </a>
              </li>
              <li className="mb-4">
                <a href="/beliefs" className="hover:underline">
                  Our Beliefs
                </a>
              </li>
              <li className="mb-4">
                <a href="/leadership" className="hover:underline">
                  Leadership
                </a>
              </li>
              <li className="mb-4">
                <a href="/history" className="hover:underline">
                  Church History
                </a>
              </li>
            </ul>
          </div>

          {/* Ministries */}
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Ministries
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="/services" className="hover:underline">
                  Worship Services
                </a>
              </li>
              <li className="mb-4">
                <a href="/youth" className="hover:underline">
                  Youth Ministry
                </a>
              </li>
              <li className="mb-4">
                <a href="/outreach" className="hover:underline">
                  Community Outreach
                </a>
              </li>
              <li className="mb-4">
                <a href="/choir" className="hover:underline">
                  Music & Choir
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Resources
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="/sermons" className="hover:underline">
                  Latest Sermons
                </a>
              </li>
              <li className="mb-4">
                <a href="/events" className="hover:underline">
                  Events Calendar
                </a>
              </li>
              <li className="mb-4">
                <a href="/prayer" className="hover:underline">
                  Prayer Requests
                </a>
              </li>
              <li className="mb-4">
                <a href="/give" className="hover:underline">
                  Online Giving
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Contact
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">123 Faith Avenue, City, State</li>
              <li className="mb-4">
                <a href="tel:+1234567890" className="hover:underline">
                  (123) 456-7890
                </a>
              </li>
              <li className="mb-4">
                <a href="mailto:info@apostolicfaith.org" className="hover:underline">
                  info@apostolicfaith.org
                </a>
              </li>
              <li className="mb-4">
                <a href="/contact" className="hover:underline">
                  Contact Form
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
            © {new Date().getFullYear()} Apostolic Faith Church. All rights reserved.
          </span>
          <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            <a
              href="#"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <span className="sr-only">Facebook</span>
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <span className="sr-only">Twitter</span>
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <span className="sr-only">YouTube</span>
              <i className="fab fa-youtube"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <span className="sr-only">Instagram</span>
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
