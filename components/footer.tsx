import React from "react";
import { FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2024 Baranidharan. All rights reserved.
      </small>
      <div className="flex items-center justify-center">
        <p className="font-semibold text-xs">Built with</p>
        <FaHeart className=" text-purple-400 mx-1"></FaHeart>
      </div>
    </footer>
  );
}
