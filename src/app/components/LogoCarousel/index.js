"use client"; // this is a client component 👈🏽

import React, { useState } from "react";
import Image from "next/image";

import "./style.css";

function LogoCarousel({ logos }) {
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);

  const handleNextLogo = () => {
    setCurrentLogoIndex((currentLogoIndex + 1) % logos.length);
  };

  const handlePrevLogo = () => {
    setCurrentLogoIndex((currentLogoIndex - 1 + logos.length) % logos.length);
  };

  return (
    <div className="LogoCarousel">
      <button onClick={handlePrevLogo}>Prev</button>
      <Image
        src={`/logo/${logos[currentLogoIndex]}`}
        alt="Logo"
        width={100}
        height={100}
        priority
      />
      <button onClick={handleNextLogo}>Next</button>
    </div>
  );
}

export default LogoCarousel;
