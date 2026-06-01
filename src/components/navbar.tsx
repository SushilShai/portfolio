"use client";

import { useEffect, useState } from "react";
import Typed from "typed.js";

export default function Navbar() {
  const [accentColor, setAccentColor] = useState("text-yellow-400");

  useEffect(() => {
    // Typed.js animation
    const typed = new Typed(".animated-role", {
      strings: ["FREELANCE", "FULLSTACK DEV", "FREE TO WORK", "DEVOPS"],
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1000,
      loop: true,
    });

    // Random color assignment after hydration
    const colors = [
      "text-red-400",
      "text-yellow-400",
      "text-green-400",
      "text-blue-400",
      "text-pink-400",
      "text-purple-400",
    ];
    setAccentColor(colors[Math.floor(Math.random() * colors.length)]);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <nav className="bg-gray-900 text-white px-8 py-4 flex justify-between items-center shadow-md">
      {/* Left side */}
      <div className="flex flex-col leading-tight">
        <span className="text-lg font-semibold tracking-wide">
          CREATIVE DEVELOPER
        </span>
        <span className="text-sm">
          AVAILABLE IN{" "}
          <span className="animated-role text-yellow-400 font-medium"></span>
        </span>
      </div>

      {/* Middle (stacked name) */}
      <div className="flex flex-col items-center text-3xl tracking-wide flex-1 text-center">
        <span>
          <span className={`font-bricolage ${accentColor}`}>S</span>USHIL
        </span>
        <span>
          SH<span className={`font-bricolage ${accentColor}`}>AI</span>
        </span>
      </div>

      {/* Right side */}
      <div className="cursor-pointer hover:text-yellow-400 transition text-lg font-medium">
        Menu
      </div>
    </nav>
  );
}
