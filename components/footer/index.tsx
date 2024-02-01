import { josefinSans } from '@/lib/fonts';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import clsx from 'clsx';

export default function Footer() {
  return (
    <main className="h-[479px] mt-[80px] bg-custom-lighter flex justify-center gap-[90px] pt-[120px]">
      <div className='flex flex-col'>
        <span className={clsx(josefinSans.className, "text-[38px] font-bold mb-6")}>Furnixure</span>
        <TextField
          variant="outlined"
          size="medium"
          fullWidth
          className="w-[377px] mb-8 border-0"
          placeholder="Enter Email Address"
          InputProps={{
            classes: {
              root: "pr-0 h-[44px] bg-white rounded-none outline-none focus-visible:outline-none",
              notchedOutline: "border-none"
            },
            endAdornment: (
              <InputAdornment position="end" className='flex items-center justify-center z-10 w-[135px] h-[39px] max-h-[39px] ml-0 text-custom-pink'>
                <Button variant="contained" className="w-[135px] h-[39px] mr-1 bg-custom-pink shadow-none">Sign Up</Button>
              </InputAdornment>
            ),
          }}
        />
        <span className="text-custom-gray">Contact Info</span>
        <span className="text-custom-gray">17 Princess Road, London, Greater London NW1 8JR, UK</span>
      </div>
      <div>
        <span className={clsx(josefinSans.className, "block text-[22px] font-semibold mb-10")}>Categories</span>
        <ul className="text-custom-gray flex flex-col gap-3 font-normal">
          <li>Laptops & Computers</li>
          <li>Cameras & Photography</li>
          <li>Smart Phones & Tablets</li>
          <li>Video Games & Consoles</li>
          <li>Waterproof Headphones</li>
        </ul>
      </div>
      <div>
        <span className={clsx(josefinSans.className, "block text-[22px] font-semibold mb-10")}>Customer Care</span>
        <ul className="text-custom-gray flex flex-col gap-3">
          <li>My Account</li>
          <li>Discount</li>
          <li>Returns</li>
          <li>Order History</li>
          <li>Order Tracking</li>
        </ul>
      </div>
      <div>
        <span className={clsx(josefinSans.className, "block text-[22px] font-semibold mb-10")}>Pages</span>
        <ul className="text-custom-gray flex flex-col gap-3">
          <li>Blog</li>
          <li>Browser the Shop</li>
          <li>Category</li>
          <li>Pre-Built Pages</li>
          <li>WooCommerce Pages</li>
        </ul>
      </div>
    </main>
  );
}
