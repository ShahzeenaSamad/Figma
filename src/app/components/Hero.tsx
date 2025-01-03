


import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-[1440px] h-[850px]"> 
      {/* Gray Section */}
      <div className="absolute w-[1440px] h-[663px] top-[134px] left-[0px] bg-[#F2F0F1]">
        {/* Inner div 1 */}
        <div className="absolute w-[577px] h-[173px] top-[103px] left-[100px] font-extrabold text-6xl">
          <p>FIND CLOTHES THAT MATCH YOUR STYLE</p>
        </div>

        {/* Inner div 2 */}
        <div className="absolute w-[210px] h-[52px] top-[373px] left-[100px] bg-black rounded-full flex items-center justify-center text-white hover:bg-slate-700 hover:text-xl ">
          <button><Link href="/Casual"> Shop Now </Link></button>
        </div>

        {/* New Inner div */}
        <div className="absolute w-[545px] h-[33px] top-[308px] left-[100px] flex items-center justify-center">
          <p className="text-gray-800 font-medium text-sm">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
        </div>

        {/* Additional Div 1 */}
        <div className="absolute w-[56px] h-[56px] top-[297px] left-[750px] rounded-full flex items-center justify-center  animate-spinCircle">
          <Image
            src="/images/Vector (2).png"
            alt="Vector"
            width={56}
            height={56}
          />
        </div>

        {/* Additional Div 2 */}
        <div className="absolute w-[104px] h-[104px] top-[86px] left-[1255px] rounded-full flex items-center justify-center animate-spinCircle">
          <Image
            src="/images/Vector (1).png"
            alt="Vector"
            width={104}
            height={104}
          />
        </div>

        {/* Background Image */}
        <Image src="/images/pic.png" alt="Vector" width={1440} height={663} />
      </div>

      {/* New Black Div */}
      <div className="absolute w-[1440px] h-[122px] top-[797px] left-[0px] bg-black flex items-center justify-center gap-20">
        <Image
          src="/images/Vector (3).png"
          alt="Vector"
          width={166.48}
          height={33.16}
        />
        <Image
          src="/images/Vector (4).png"
          alt="Vector"
          width={91}
          height={37.18}
        />
        <Image
          src="/images/Vector (5).png"
          alt="Vector"
          width={156}
          height={32.29}
        />
        <Image
          src="/images/group.png"
          alt="Vector"
          width={194}
          height={31.2}
        />
        <Image
          src="/images/Vector (6).png"
          alt="Vector"
          width={206.79}
          height={33.35}
        />
      </div>
    </div>
    
  );
};

export default Hero;