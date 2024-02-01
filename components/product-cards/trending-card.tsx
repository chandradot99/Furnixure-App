import Image from "next/image";
import { josefinSans } from "@/lib/fonts";
import clsx from "clsx";
import React from "react";
import { ProductItem } from "@/lib/types/product-item";

export function TrendingCard({ item }: {
  item: ProductItem
}) {
  return (
    <div className="group p-2 w-[250px] shadow-secondary bg-white cursor-pointer transition-transform transform hover:scale-105">
      <div className="w-full h-[240px] bg-cloud-white flex items-center justify-center">
        <Image
          src={item.imageUrl}
          alt="Product Image"
          className="w-[200px] h-[200px] object-contain object-center"
          width={500}
          height={500}
        />
      </div>
      <div className="flex flex-col items-center p-2 gap-1 bg-white">
        <span className={clsx(josefinSans.className, "text-deep-blue")}>{item.name}</span>
        <span className={clsx(josefinSans.className, "text-deep-blue")}>${item.price}</span>
      </div>
    </div>
  );
}

export function TrendingMiniCard({ item }: {
  item: ProductItem
}) {
  return (
    <div className="group w-[350px] h-[74px] bg-white cursor-pointer flex">
      <div className="w-[107px] h-full bg-cloud-white flex items-center justify-center">
        <Image
          src={item.imageUrl}
          alt="Product Image"
          className="w-[64px] h-[71px] object-contain object-center"
          width={64}
          height={71}
        />
      </div>
      <div className="flex flex-col p-2 gap-1 bg-white">
        <span className={clsx(josefinSans.className, "text-deep-blue")}>{item.name}</span>
        <span className={clsx(josefinSans.className, "text-deep-blue text-xs")}>${item.price}</span>
      </div>
    </div>
  );
}
