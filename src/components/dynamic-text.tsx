"use client";

import { useState, useEffect } from "react";

const roles = ["Product Designer", "UX Leader", "Design System Architect"];

export default function DynamicText() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % roles.length);
        setFade(true);
      }, 500); // match transition duration
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className={`transition-opacity duration-500 ease-in-out ${
        fade ? "opacity-100" : "opacity-0"
      }`}
    >
      {roles[index]}
    </span>
  );
}
