


import Image from "next/image";
import Link from "next/link";
import { RxCross2 } from "react-icons/rx";
import { FaRegCircleUser } from "react-icons/fa6";
import { CgShoppingCart } from "react-icons/cg";

const Navbar = () => {
  return (
    
    <div className="relative  bg-white">
    
      {/* Black Navbar */}
      <div className="w-[1440px] h-[38px] bg-black relative">
        <p className="absolute left-[544px] top-[7px] text-white text-[14px] leading-[24px]">
          Sign up and get 20% off to your first order.
          <span className="underline ml-2 cursor-pointer">Sign Up Now</span>
        </p>

        <div className="absolute left-[1320px] top-[9px] w-[20px] h-[20px] flex items-center justify-center text-white font-bold">
        <RxCross2 />
        </div>
      </div>

        <div className="absolute w-[1240px] h-[41px]  left-[100px] top-[62px]">
          {/* Inner Div */}
          <div className="absolute w-[62px] h-[24px]  left-[1178px] top-[8.5px]">
            {/* Inner Div 1 (24px x 24px) */}
            <div className="absolute w-[24px] h-[24px]  left-[0px] top-[0px] ">
             <Link href="/MyCart"> < CgShoppingCart className="text-2xl " /></Link>
            </div>

            {/* Inner Div 2 (24px x 24px) */}
            <div className="absolute w-[24px] h-[24px] left-[38px] top-[0px]">
            <FaRegCircleUser className="text-2xl "/>
            </div>
          </div>

          {/* Inner  Div */}
          <div className="absolute w-[577px] h-[48px]  left-[561px] top-[-3.5px] flex items-center bg-[#F2F0F1] placeholder:bg-gray-300  placeholder:text-gray-600 rounded-full">
            {/* Inner Div 1 (151px x 22px) */}
            <div className="absolute w-[151px] h-[22px]  left-[52px] top-[12px] flex items-center">
              <input
                type="text"
                className="w-full h-full bg-transparent border-none outline-none text-center"
                placeholder="Search for products..."
              />
            </div>

            {/* Inner Div 2 (24px x 24px) */}
            <div className="absolute w-[24px] h-[24px]  left-[16px] top-[12px] flex justify-center items-center">
              <Image
                src="/images/search.png"
                alt="Search Icon"
                width={22.13}
                height={20.25}
              />
            </div>
          </div>

          {/* Inner Div 1 (321px x 22px) */}
          <div className="absolute w-[321px] h-[22px]  left-[200px] top-[9.5px]">
            {/* Inner Div 1 (57px x 22px) */}
            <div className="absolute w-[57px] h-[22px] left-[0px] top-[0px] flex">
              <p className="text-sm hover:font-semibold"> Shop</p>
              <Image
                src="/images/dropdown.png"
                alt="Vector"
                width={12.5}
                height={6.5}
              />
            </div>

            {/* Inner Div 2 (56px x 22px) */}
            <div className="absolute w-[56px] h-[22px] left-[81px] top-[0px] flex justify-center items-center font-[12px]">
              <p className="m-0 text-sm hover:font-semibold"><Link href="/OnSale"> On Sale</Link></p>
            </div>

            {/* Inner Div 3 (87px x 22px) */}
            <div className="absolute w-[87px] h-[22px]  left-[161px] top-[0px] font-[12px] flex">
              <p className="text-sm hover:font-semibold"><Link href="/NewArrival">New Arrivals </Link></p>
            </div>

            {/* Inner Div 4 (49px x 22px) */}
            <div className="absolute w-[49px] h-[22px]  left-[272px] font-[12px] top-[0px]">
              <p className="text-sm hover:font-semibold">Brands</p>
            </div>
          </div>

          {/* Inner Div 2 (160px x 22px) */}
          <div className="absolute w-[160px] h-[22px] left-[0px] top-[9.5px] flex items-center justify-center font-extrabold text-3xl">
            <p className="text-center hover:font-semibold"><Link href="/">SHOP.CO</Link></p>
          </div>
      </div>
    </div>
  );
};

export default Navbar;