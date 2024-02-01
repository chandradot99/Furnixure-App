import Image from "next/image";
import { josefinSans } from "@/lib/fonts";
import clsx from "clsx";
import React from "react";
import { ProductItem } from "@/lib/types/product-item";

export default function RecentCard({ item }: {
  item: ProductItem
}) {
  return (
    <div className="group w-[350px] bg-white cursor-pointer transition-transform transform hover:scale-105">
      <div className="w-full h-[270px] bg-light-gray group-hover:bg-white flex items-center justify-center">
        <Image
          src={item.imageUrl}
          alt="Product Image"
          className="w-[200px] h-[200px] object-contain object-center"
          width={500}
          height={500}
        />
      </div>
      <div className="flex items-center p-2 gap-1 bg-white">
        <span className={clsx(josefinSans.className, "text-deep-blue border-b-2 border-solid border-custom-lighter")}>{item.name}</span>
        <span className={clsx(josefinSans.className, "text-deep-blue ml-auto")}>${item.price}</span>
      </div>
    </div>
  );
}
