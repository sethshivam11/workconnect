import {
  Copyright,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="flex flex-col items-center sm:py-10 py-5 gap-4 bg-black text-white">
      <div className="flex max-sm:flex-col max-sm:text-center justify-between w-5/6">
        <div className="flex flex-col justify-between">
          <Link to="/" className="text-2xl font-extrabold tracking-tighter">
            <span className="text-sky-400 font-galindo sm:mr-1 mr-0.5">
              Work
            </span>
            Connect
          </Link>
          <div className="flex gap-2 max-sm:justify-center max-sm:my-6">
            <Link
              to="https://www.facebook.com"
              target="_blank"
              className="bg-white rounded-full p-2 text-black hover:opacity-90"
            >
              <Facebook />
            </Link>
            <Link
              to="https://www.facebook.com"
              target="_blank"
              className="bg-white rounded-full p-2 text-black hover:opacity-90"
            >
              <Linkedin />
            </Link>
            <Link
              to="https://www.facebook.com"
              target="_blank"
              className="bg-white rounded-full p-2 text-black hover:opacity-90"
            >
              <Instagram />
            </Link>
            <Link
              to="https://www.facebook.com"
              target="_blank"
              className="bg-white rounded-full p-2 text-black hover:opacity-90"
            >
              <Twitter />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-2 justify-center">
          <Link to="#" className="hover:underline underline-offset-2">
            About Us
          </Link>
          <Link to="#" className="hover:underline underline-offset-2">
            Contact Us
          </Link>
          <Link to="#" className="hover:underline underline-offset-2">
            Privacy Policy
          </Link>
          <Link to="#" className="hover:underline underline-offset-2">
            Terms & Conditions
          </Link>
        </div>
      </div>
      <hr className="w-5/6 rounded-sm mt-4" />
      <p className="w-5/6 text-left max-sm:text-center">
        All Rights Reserved. <Copyright className="inline" size="20" />{" "}
        {new Date().getFullYear()}
      </p>
    </footer>
  );
}

export default Footer;
