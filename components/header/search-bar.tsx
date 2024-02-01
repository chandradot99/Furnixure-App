import { josefinSans } from "@/lib/fonts";
import clsx from "clsx";

export default function SearchBar() {
  return (
    <div className={clsx(josefinSans.className, "flex text-midnight-blue font-bold text-[34px]")}>
      Hekto
    </div>
  );
}
