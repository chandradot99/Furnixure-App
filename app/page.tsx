import { CashbackIcon, FreeDeliveryIcon, HoursSupportIcon, PremiumQualityIcon } from "@/components/icons";
import BlogCard from "@/components/product-cards/blog-card";
import FeaturedCard from "@/components/product-cards/featured-card";
import RecentCard from "@/components/product-cards/recent-card";
import { TrendingCard, TrendingMiniCard } from "@/components/product-cards/trending-card";
import BottomPromotionalBanner from "@/components/promotional-banner/bottom-banner";
import PromotionalBanner from "@/components/promotional-banner/top-banner";
import { josefinSans } from "@/lib/fonts";
import { BlogItem } from "@/lib/types/blog-item";
import { ProductItem } from "@/lib/types/product-item";
import Button from "@mui/material/Button";
import clsx from "clsx";
import Image from "next/image";

const products: ProductItem[] = [
  {
    id: "1",
    code: "Y523201",
    name: "Cantilever chair",
    imageUrl: "https://i.ibb.co/DbK1TSx/chair1.png",
    price: 42
  },
  {
    id: "2",
    code: "Y523202",
    name: "Vel elit euismod",
    imageUrl: "https://i.ibb.co/qxNTBDd/chair2.png",
    price: 50
  },
  {
    id: "3",
    code: "Y523203",
    name: "Ultricies condimentum",
    imageUrl: "https://i.ibb.co/bBBqzpY/chair3.png",
    price: 46
  },
  {
    id: "4",
    code: "Y523204",
    name: "Vitae suspendisse",
    imageUrl: "https://i.ibb.co/rGQyyyv/chair4.png",
    price: 39
  },
  {
    id: "5",
    code: "Y523205",
    name: "Sed at fermentum",
    imageUrl: "https://i.ibb.co/vYV81Gg/7877d7223d13169b98bd9540d24d5673.png",
    price: 42
  },
  {
    id: "6",
    code: "Y523206",
    name: "Vestibulum magna",
    imageUrl: "https://i.ibb.co/jwfsKZs/40fb6d72006bc9fe7a747b3dfca0a5de.png",
    price: 50
  },
  {
    id: "7",
    code: "Y523207",
    name: "Sollicitudin amet",
    imageUrl: "https://i.ibb.co/J7v9fYw/6002c578779f313538a8a68e1a6f8050.png",
    price: 46
  },
  {
    id: "8",
    code: "Y523208",
    name: "Ultrices mauris sit",
    imageUrl: "https://i.ibb.co/zrJY8SC/03270716b886324ea4b54a2320807d8b.png",
    price: 39
  }
]

const latestProducts: ProductItem[] = [
  {
    id: "1",
    code: "Y523201",
    name: "Comfort Handy Craft",
    imageUrl: "https://i.ibb.co/ScfKbzY/product-6.png",
    price: 42
  },
  {
    id: "2",
    code: "Y523202",
    name: "Comfort Handy Craft",
    imageUrl: "https://i.ibb.co/vYV81Gg/7877d7223d13169b98bd9540d24d5673.png",
    price: 50
  },
  {
    id: "3",
    code: "Y523203",
    name: "Comfort Handy Craft",
    imageUrl: "https://i.ibb.co/DbK1TSx/chair1.png",
    price: 46
  },
  {
    id: "4",
    code: "Y523204",
    name: "Comfort Handy Craft",
    imageUrl: "https://i.ibb.co/rGQyyyv/chair4.png",
    price: 39
  },
  {
    id: "4",
    code: "Y523204",
    name: "Comfort Handy Craft",
    imageUrl: "https://i.ibb.co/DbzyxTz/product-3.png",
    price: 39
  },
  {
    id: "4",
    code: "Y523204",
    name: "Comfort Handy Craft",
    imageUrl: "https://i.ibb.co/G3Gct9P/product-2.png",
    price: 39
  }
]

const trendingProducts: ProductItem[] = [
  {
    id: "3",
    code: "Y523203",
    name: "Ultricies condimentum",
    imageUrl: "https://i.ibb.co/bBBqzpY/chair3.png",
    price: 46
  },
  {
    id: "4",
    code: "Y523204",
    name: "Vitae suspendisse",
    imageUrl: "https://i.ibb.co/rGQyyyv/chair4.png",
    price: 39
  },
  {
    id: "5",
    code: "Y523205",
    name: "Sed at fermentum",
    imageUrl: "https://i.ibb.co/vYV81Gg/7877d7223d13169b98bd9540d24d5673.png",
    price: 42
  },
  {
    id: "6",
    code: "Y523206",
    name: "Vestibulum magna",
    imageUrl: "https://i.ibb.co/jwfsKZs/40fb6d72006bc9fe7a747b3dfca0a5de.png",
    price: 50
  }
]

const trendingMiniProducts: ProductItem[] = [
  {
    id: "3",
    code: "Y523203",
    name: "Ultricies condimentum",
    imageUrl: "https://i.ibb.co/bBBqzpY/chair3.png",
    price: 46
  },
  {
    id: "4",
    code: "Y523204",
    name: "Vitae suspendisse",
    imageUrl: "https://i.ibb.co/rGQyyyv/chair4.png",
    price: 39
  },
  {
    id: "6",
    code: "Y523206",
    name: "Vestibulum magna",
    imageUrl: "https://i.ibb.co/jwfsKZs/40fb6d72006bc9fe7a747b3dfca0a5de.png",
    price: 50
  }
]

const blogs: BlogItem[] = [{
  id: 1,
  name: "Top esssential Trends in 2021",
  description: "More off this less hello samlande lied much over tightly circa horse taped mightly",
  author: "SaberAli",
  date: "21 December,2023",
  image: "/blog1.jpeg"
},
{
  id: 1,
  name: "Top esssential Trends in 2021",
  description: "More off this less hello samlande lied much over tightly circa horse taped mightly",
  author: "Surfauxion",
  date: "21 January,2024",
  image: "/blog2.jpeg"
},
{
  id: 1,
  name: "Top esssential Trends in 2021",
  description: "More off this less hello samlande lied much over tightly circa horse taped mightly",
  author: "Chandra",
  date: "31 January,2024",
  image: "/blog3.jpeg"
}];

export default function Home() {
  return (
    <main>
      <PromotionalBanner />
      <div  className="w-[1100px] m-auto mt-[80px]">
        <div className={clsx(josefinSans.className, "text-center text-[36px] font-bold")}>Featured Products</div>
        <div className="mt-6 grid grid-cols-4 gap-8 justify-center">
          {
            products.map((product) => {
              return <FeaturedCard key={product.id} item={product}/>
            })
          }
        </div>
      </div>
      <div  className="w-[1100px] m-auto mt-[80px]">
        <div className={clsx(josefinSans.className, "text-center text-[36px] font-bold")}>Latest Products</div>
        <div className="mt-6 grid grid-cols-3 gap-8 justify-center">
          {
            latestProducts.map((product) => {
              return <RecentCard key={product.id} item={product}/>
            })
          }
        </div>
      </div>
      <div  className="w-[1100px] m-auto mt-[80px]">
        <div className={clsx(josefinSans.className, "text-center text-[36px] font-bold")}>What Furnixure Offer</div>
        <div className="mt-6 grid grid-cols-4 gap-8 justify-center">
          <div className="w-[250px] h-[300px] p-6 bg-white shadow-secondary flex flex-col gap-4 items-center justify-center">
            <FreeDeliveryIcon />
            <span className={clsx(josefinSans.className, "text-[22px] font-semibold text-deep-blue")}>Free Delivery</span>
            <span  className="text-muted-indigo font-bold">
              Enjoy hassle-free shopping with our complimentary delivery service.
            </span>
          </div>
          <div className="w-[250px] h-[300px] p-6 bg-white shadow-secondary flex flex-col gap-4 items-center justify-center">
            <CashbackIcon />
            <span className={clsx(josefinSans.className, "text-[22px] font-semibold text-deep-blue")}>Easy Returns</span>
            <span  className="text-muted-indigo font-bold">
              Shop with confidence knowing that we offer easy returns and refunds.
            </span>
          </div>
          <div className="w-[250px] h-[300px] p-6 bg-white shadow-secondary flex flex-col gap-4 items-center justify-center">
            <PremiumQualityIcon />
            <span className={clsx(josefinSans.className, "text-[22px] font-semibold text-deep-blue")}>Premium Quality</span>
            <span  className="text-muted-indigo font-bold">
              Indulge in premium quality products crafted with care and attention to detail.
            </span>
          </div>
          <div className="w-[250px] h-[300px] p-6 bg-white shadow-secondary flex flex-col gap-4 items-center justify-center">
            <HoursSupportIcon />
            <span className={clsx(josefinSans.className, "text-[22px] font-semibold text-deep-blue")}>24/7 Support</span>
            <span  className="text-muted-indigo font-bold">
              Rest easy knowing our dedicated support team is available 24/7 to assist you.
            </span>
          </div>
        </div>
      </div>
      <BottomPromotionalBanner />
      <div  className="w-[1100px] m-auto mt-[80px]">
        <div className={clsx(josefinSans.className, "text-center text-[36px] font-bold")}>Trending Products</div>
        <div className="mt-6 grid grid-cols-4 gap-8 justify-center">
          {
            trendingProducts.map((product) => {
              return <TrendingCard key={product.id} item={product}/>
            })
          }
        </div>
        <div className="flex mt-10 justify-between">
          <div className="w-[400px] h-[240px] bg-custom-lighter shadow-secondary p-8 relative">
            <span className={clsx(josefinSans.className, "text-deep-blue text-[24px] font-semibold block")}>23% off in all products</span>
            <span className="text-custom-pink underline block z-10 cursor-pointer relative">Shop Now</span>
            <Image
              src="/clock.png"
              alt="Product Image"
              className="w-[213] h-[207] absolute bottom-[-10px] right-[-10px]"
              width={213}
              height={207}
            />
          </div>
          <div className="w-[400px] h-[240px] bg-custom-lighter shadow-secondary p-8 relative">
            <span className={clsx(josefinSans.className, "text-deep-blue text-[24px] font-semibold block")}>23% off in all products</span>
            <span className="text-custom-pink underline z-10 cursor-pointer block relative">View Collection</span>
            <Image
              src="/tv-unit.png"
              alt="Product Image"
              className="w-[312px] absolute bottom-[-40px] right-[-24px]"
              width={312}
              height={173}
            />
          </div>
          <div className="w-[270px] h-[240px] flex flex-col justify-between">
            {
              trendingMiniProducts.map((product) => {
                return <TrendingMiniCard key={product.id} item={product}/>
              })
            }
          </div>
        </div>
      </div>
      <div className="mt-[80px] w-full h-[462px] relative">
        <Image
          src="/newslater-bg.jpeg"
          alt="Newslater background"
          className="w-full h-full object-cover"
          width={2560}
          height={3840}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center">
          <span className={clsx(josefinSans.className, "text-center text-deep-blue text-[35px] font-semibold block")}>Get Leatest Update By Subscribe <br /> 0ur Newsletter</span>
          <Button variant="contained" className="mt-7 w-[173px] h-[49px] bg-custom-pink hover:bg-custom-pink shadow-none capitalize">Shop Now</Button>
        </div>
      </div>
      <div  className="w-[1100px] m-auto mt-[80px]">
        <div className={clsx(josefinSans.className, "text-center text-[36px] font-bold")}>Latest Blog</div>
        <div className="mt-6 grid grid-cols-3 gap-8">
          {
            blogs.map((blog) => {
              return <BlogCard key={blog.id} item={blog} />
            })
          }
        </div>
      </div>
    </main>
  );
}
