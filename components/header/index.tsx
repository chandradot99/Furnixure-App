import Logo from "./logo";
import NavBar from "./navbar";
import Search from "./search";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

export default function Header() {
  return (
    <main className="h-[78px] flex items-center justify-center">
      <div className="h-10 w-[1200px] flex items-center">
        <Logo />
        <NavBar />
        {/* <Search /> */}
        {/* <div className="flex flex-col items-center justify-center ml-8">
          <ShoppingBagOutlinedIcon/>
          <span className="text-[14px]">Bag</span>
        </div> */}
      </div>
    </main>
  );
}
