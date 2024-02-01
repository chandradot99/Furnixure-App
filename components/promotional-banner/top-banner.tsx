'use client'

import Image from "next/image";
import React from "react";

const images = ["Slide1.webp", "Slide2.webp", "Slide3.webp", "slide4.webp"];

export default function PromotionalBanner() {
  const [index, setIndex] = React.useState<number>(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => {
        if (prevIndex === 3) {
          return 0;
        } else {
          return prevIndex + 1;
        }
      })
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);


  return (
    <div className="h-[576px] relative">
      <Image
        src={`/${images[index]}`}
        alt="Slide"
        className="h-full object-cover object-center"
        width={1920}
        height={768}
        priority
      />
    </div>
  );
}
