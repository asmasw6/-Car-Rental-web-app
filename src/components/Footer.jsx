import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-60 text-sm text-gray-500">
      <div className="flex flex-wrap justify-between items-start gap-12 pb-6 border-borderColor border-b">
        <div>
          <img src={assets.logo} alt="logo" className="mb-2 h-8 md:h-9" />
          <p className="max-w-80 mt-4">
            Premium car rental service with a wide selection of luxury and
            everyday vehicles for all your deiving needs.
          </p>

          <div className="flex items-center gap-3 mt-6">
            {/* Instagram */}
            <a href="">
              <img src={assets.instagram_logo} alt="" className="w-5 h-5" />
            </a>
            {/* Facebook */}
            <a href="">
              {" "}
              <img src={assets.facebook_logo} alt="" className="w-5 h-5" />
            </a>
            {/* Twitter */}
            <a href="">
              {" "}
              <img src={assets.twitter_logo} alt="" className="w-5 h-5" />
            </a>
            {/* LinkedIn */}
            <a href="">
              {" "}
              <img src={assets.gmail_logo} alt="" className="w-5 h-5" />
            </a>{" "}
          </div>
        </div>

        <div>
          <h2 className="text-base font-medium text-gray-800 uppercase">
            Quick Links
          </h2>
          <ul className="mt-3 flex flex-col gap-1.5 ">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Browse Cars</a>
            </li>
            <li>
              <a href="#">List Your Cars</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-base font-medium text-gray-800 uppercase">
            Resources
          </h2>
          <ul className="mt-3 flex flex-col gap-1.5 ">
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Terms of Services</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Insurance</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-base font-medium text-gray-800 uppercase">
            Contact
          </h2>
          <ul className="mt-3 flex flex-col gap-1.5 ">
            <li>1234 Luxury Drive</li>
            <li>Saudi Arabia, Jeddah</li>
            <li>+966-555-555-5555</li>
            <li>info@example.com</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-2 items-center justify-between py-5">
        <p>
          © {new Date().getFullYear()}{" "}
          <a href="https://prebuiltui.com">Car Rental</a>. All rights reserved.
        </p>
        <ul className="flex items-center gap-4">
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>|</li>
          <li>
            <a href="#">Terms</a>
          </li>
          <li>|</li>
          <li>
            <a href="#">Sitemap</a>
          </li>
          <li>|</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;


// https://prebuiltui.com/components/footer