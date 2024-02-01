import { josefinSans } from "@/lib/fonts";
import clsx from "clsx";
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

export default function NavBar() {
  return (
    <nav className={clsx("text-midnight-blue h-5 ml-[88px]")}>
      <ul className="flex gap-8">
        <li className="cursor-pointer text-custom-pink hover:text-custom-pink">
          Home
          {/* <ExpandMoreOutlinedIcon /> */}
        </li>
        <li className="cursor-pointer hover:text-custom-pink">Products</li>
        <li className="cursor-pointer hover:text-custom-pink">Blog</li>
        <li className="cursor-pointer hover:text-custom-pink">Shop</li>
        <li className="cursor-pointer hover:text-custom-pink">Contact</li>
      </ul>
    </nav>
  );
}
