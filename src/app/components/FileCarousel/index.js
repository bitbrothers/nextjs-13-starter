"use client"; // this is a client component 👈🏽

import React, { useState } from "react";
import Image from "next/image";

import "./style.css";

function FileCarousel({ logos }) {
    const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="slider">
      <div className="slide-track-1">
        {logos.map((logo, index) => {
          const logoIndex = `logo-${logo}-${index}`;
          return (
            <div key={logoIndex} className="slide">
              <Image
                src={`/logo/${logo}`}
                alt="Logo"
                width="300" 
                height="240"
                loading="lazy"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FileCarousel;
