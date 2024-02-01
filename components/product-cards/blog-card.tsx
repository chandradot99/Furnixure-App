import Image from "next/image";
import { josefinSans } from "@/lib/fonts";
import clsx from "clsx";
import React from "react";
import { BlogItem } from "@/lib/types/blog-item";
import { PenIcon } from "../icons/pen-icon";
import { CalendarIcon } from "../icons/calendar-icon";

export default function BlogCard({ item }: {
  item: BlogItem
}) {
  return (
    <div className="group w-[340px] h-[493] rounded-md bg-white shadow-secondary cursor-pointer">
      <div className="w-full h-[255px] rounded-tl-md rounded-tr-md">
        <Image
          src={item.image}
          alt="Blog Image"
          className="w-full h-full rounded-tl-md rounded-tr-md"
          width={500}
          height={500}
        />
      </div>
      <div className=" items-center p-4 bg-white">
        <div className="flex gap-5 text-deep-blue">
          <div className="flex gap-2 items-center">
            <PenIcon />
            <span className={clsx(josefinSans.className, "font-sm")}>{item.author}</span>
          </div>
          <div className="flex gap-2 items-center">
            <CalendarIcon />
            <span className={clsx(josefinSans.className, "font-sm")}>{item.date}</span>
          </div>
        </div>
        <span className={clsx(josefinSans.className, "text-deep-blue text-[18px] block pt-6")}>{item.name}</span>
        <span className={clsx("text-[#72718F] block pt-2")}>{item.description}</span>
        <span className="text-deep-blue underline block pt-4">Read More</span>
      </div>
    </div>
  );
}
