import { josefinSans } from "@/lib/fonts";
import clsx from "clsx";

export default function Logo() {
  return (
    <div className={clsx(josefinSans.className, "h-[40px] flex text-midnight-blue font-bold text-[34px] cursor-pointer")}>
      Furnixure
    </div>
  );
}
