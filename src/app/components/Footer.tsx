

import Image from "next/image";
import { BsEnvelope } from "react-icons/bs";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";

const Footer = () => {
  return (
    <div className="w-[1441px] h-[591px]">
    <div className="w-[1441px] h-[589px] m-auto relative mt-[80px]  ">
      {/* white div */}

      <div className="w-[1441px] h-[499px] mt-[90px] absolute bg-[#F0F0F0]">
              <div className="absolute left-[-1px] top-[30px] ">
           <div className="w-[1240px] h-[177px] absolute left-[100px] top-[140px]">
             <div className="w-[248px] h-[177px] absolute left-[0px] top-[0px]">
              <div className="w-[248px] h-[114px] absolute left-[0px] top-[0px]">                
                 <p className="font-extrabold text-lg">SHOP.CO</p>
                <p className="text-sm py-2">
                 We have clothes that suits your style and which you are proud to wear. From women to men.
               </p>
               <div className=" mt-9 flex gap-4">
  <div className="w-8 h-8 border-2 border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300">
    <TiSocialTwitter className="text-black hover:text-white" />
  </div>
  <div className="w-8 h-8 border-2 border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300">
    <TiSocialFacebook className="text-black hover:text-white" />
  </div>
  <div className="w-8 h-8 border-2 border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300">
    <IoLogoInstagram className="text-black hover:text-white" />
  </div>
  <div className="w-8 h-8 border-2 border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300">
    <IoLogoGithub className="text-black hover:text-white" />
  </div>
</div>


              </div>
            </div>
            <div className="w-[104px] h-[177px] absolute left-[361.5px] top-[0px]">
              <ul className="space-y-4">
                <li className="font-semibold">COMPANY</li>
                <li className="text-sm">about</li>
                <li className="text-sm">Features</li>
                <li className="text-sm">Works</li>
                <li className="text-sm">Career</li>
              </ul>
            </div>
            <div className="w-[136px] h-[177px] absolute left-[579px] top-[0px]">
              <ul className="space-y-4">
                <li className="font-semibold">HELP</li>
                <li className="text-sm">Customer Support</li>
                <li className="text-sm">Delivery Details</li>
                <li className="text-sm">Terms & Conditions</li>
                <li className="text-sm">Privacy Policy</li>
              </ul>
            </div>
            <div className="w-[149px] h-[177px] absolute left-[828.5px] top-[0px]">
              <ul className="space-y-4">
                <li className="font-semibold">FAQ</li>
                <li className="text-sm">Account</li>
                <li className="text-sm">manage Deliveries</li>
                <li className="text-sm">Orders</li>
                <li className="text-sm">Payment</li>
              </ul>
            </div>
            <div className="w-[149px] h-[177px] absolute left-[1091px] top-[0px]">
              <ul className="space-y-4">
                <li className="font-semibold">Resources</li>
                <li className="text-sm">Free eBooks</li>
                <li className="text-sm">Development Tutorial</li>
                <li className="text-sm">How to-Blog</li>
                <li className="text-sm">Youtube Playlist</li>
              </ul>
              </div>
        </div>
        <div className="w-[1240px] h-[0px] absolute left-[100px] top-[350px] border-t border-gray-300">
        <div className="w-[269px] h-[19px] absolute left-[0] top-[25px]">
          <p className="text-xs">Shop.co © 2000-2023, All Rights Reserved</p>
        </div>
        </div>
        <div className="w-[281px] h-[30px] absolute left-[1060px] top-[375px]">
        <Image
                  src="/images/Frame 53.png"
                  alt="Vector"
                  width={407}
                  height={289}
                />
        </div>
      </div>
    </div>
      {/* black-box  */}
      <div className="w-[1240px] h-[180px] ml-[101px] m-auto absolute    rounded-3xl bg-black">
        <div className="absolute w-[530px] h-[94px] left-[64px] top-[43px]">
          <p className="text-white font-extrabold text-4xl">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </p>
        </div>
        <div className="absolute w-[349px] h-[48px] left-[827px] top-[36px] bg-white rounded-3xl">
          {" "}
          <div className="flex items-center justify-center px-20 pt-3 space-x-3">
          <BsEnvelope />
            <input
              type="text"
              className="w-full h-full border-none outline-none text-md -ml-4"
              placeholder="Enter your email address"
            />
          </div>
        </div>
        {/* Second white div */}
        <div className="absolute w-[349px] h-[48px] left-[827px] top-[98px] bg-white rounded-3xl">
          <p className="flex items-center justify-center pt-3">
            Subscribe to Newsletter
          </p>
        </div>
      </div>

    </div>
    </div>
  );
};
export default Footer;