import Image from "next/image";
import { josefinSans } from "@/lib/fonts";
import clsx from "clsx";
import React from "react";

export const ChairBackgroundSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="481" height="450" viewBox="0 0 481 450" fill="none">
      <path d="M481 232C481 362.339 412.339 450 282 450C151.661 450 0 376.339 0 246C0 115.661 142 -23.9999 251.5 4.00004C361 32 481 101.661 481 232Z" fill="#F5E1FC"/>
    </svg>
)

export default function BottomPromotionalBanner() {
  return (
    <div className="h-[576px] mt-[80px] bg-lavender-mist flex items-center justify-center">
      <div className="relative">
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
          <ChairBackgroundSVG />
        </div>
        <Image
          src="/premium-sofachair.svg"
          alt="Slide"
          className="w-[509px] h-[550px] relative z-10"
          width={509}
          height={550}
        />
      </div>
      <div className="w-[509px]">
        <span className={clsx(josefinSans.className, "text-deep-blue text-[35px] font-bold")}>Unique Features Of leatest & Trending Poducts</span>
        <ul className="list-disc text-cool-lilac font-[500]">
          <li>All frames constructed with hardwood solids and laminates</li>
          <li>Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails</li>
          <li>Arms, backs and seats are structurally reinforced</li>
        </ul>
      </div>
    </div>
  );
}
