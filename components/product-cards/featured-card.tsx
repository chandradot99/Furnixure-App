import Image from "next/image";
import { josefinSans } from "@/lib/fonts";
import clsx from "clsx";
import React from "react";
import { ProductItem } from "@/lib/types/product-item";
import Button from "@mui/material/Button";
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';

export default function FeaturedCard({ item }: {
  item: ProductItem
}) {
  return (
    <div className="group w-[250px] bg-white shadow-secondary cursor-pointer">
      <div className="w-full h-[200px] bg-custom-light group-hover:bg-light-gray flex items-center justify-center relative">
        <Image
          src={item.imageUrl}
          alt="Product Image"
          className="w-[178px] h-[178px] p-2 transition-transform transform group-hover:scale-75"
          width={500}
          height={500}
        />
        {/* <Button variant="contained" className={clsx(josefinSans.className, "hidden group-hover:block absolute bottom-2 w-[120px] h-[30px] bg-fresh-green hover:bg-fresh-green shadow-none text-xs capitalize p-2")}>View Details</Button> */}
        {/* <FavoriteBorderSharpIcon className="hidden group-hover:block absolute top-2 left-2 text-deep-blue" /> */}
      </div>
      <div className="flex flex-col items-center p-1 gap-1 bg-white">
        <span className="text-custom-pink font-bold text-[16px]">{item.name}</span>
        <span className={clsx(josefinSans.className, "text-deep-blue text-[14px]")}>Code - {item.code}</span>
        <span className="text-deep-blue text-[14px]">${item.price}</span>
      </div>
    </div>
  );
}
