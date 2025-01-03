
'use client'
import { useState } from "react";
import Image from "next/image";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div className="w-[1440px] h-[2343px]">
      {/* Right side */}
      <div className="absolute  left-[750px] top-[250px] w-[600px] h-[48px]">
        <p className="font-extrabold text-4xl">One Life Graphic T-shirt</p>
        <Image
            src="/images/Frame 11.png"
            alt="stars"
            width={193}
            height={24}
            className="pt-3"
          />
          <div className="flex items-center space-x-2">
          <Image
            src="/images/Frame 12.png"
            alt="Price"
            width={176}
            height={43}
            className="pt-3"
          />
           <Image
            src="/images/Frame 3.png"
            alt="discount"
            width={72}
            height={20}
            className="pt-3"
          />
          </div>
      </div>
       {/* New div below images */}
    <div className="absolute left-[750px] top-[380px] w-[580px] h-[33px] mt-8">
      <p className="text-sm">This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
    </div>

    <div className="absolute left-[750px] top-[470px] w-[590px] h-[0px] bg-gray-200 border"></div>

    <p className="absolute left-[750px] top-[461px] w-[93px] h-[11px] text-sm pt-6">Select Colors</p>
    <div  className=" absolute flex gap-4 left-[750px] top-[490px] pt-6">
   
      <button className='w-9 h-9 bg-[#4F4631] border-gray-500 border rounded-full flex items-center justify-center'></button>
      <button className='w-9 h-9 bg-[#314F4A]  border border-gray-500 rounded-full flex items-center justify-center'></button>
      <button className='w-9 h-9 bg-[#31344F] border border-gray-500 rounded-full flex items-center justify-center'></button>
     <div/>
      </div>

      <div className="absolute left-[750px] top-[549px] w-[590px] h-[0px] bg-gray-200 border mt-6"></div>
      <p className="absolute left-[750px] top-[573px] w-[87px] h-[11px] text-sm pt-6">Choose Size</p>
      <div className="absolute left-[750px] top-[600px] w-[420px] h-[46px] mt-8 space-x-3">
      <button className='bg-gray-100 w-24 h-12 text-md text-gray-500 rounded-full hover:bg-black hover:text-white'> Small</button>
        <button className='bg-gray-100 w-24 h-12 text-md text-gray-500 rounded-full hover:bg-black hover:text-white'> Medium</button>
        <button className='bg-gray-100 w-24 h-12 text-md text-gray-500 rounded-full hover:bg-black hover:text-white'>Large</button>
        <button className='bg-gray-100 w-24 h-12 text-md text-gray-500 rounded-full hover:bg-black hover:text-white'> x-Large</button>
          
        </div>
        <div className="absolute left-[750px] top-[700px] w-[150px] h-[50px] mt-10 flex items-center justify-center rounded-full gap-4 bg-gray-200">
  <button onClick={handleDecrement} className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
    <FiMinus />
  </button>
  <span className="text-lg font-medium">{quantity}</span>
  <button onClick={handleIncrement} className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
    <FaPlus />
  </button>
</div>
<div className="absolute w-[400px] left-[940px] top-[694px] mt-12 h-[52px] rounded-full text-white flex items-center justify-center bg-black">
  <button > Add To Cart </button>
  </div>

     
      {/* ------------ Left Side --------- */}
      <div className="relative">
        {/* Logo */}
        <div className="absolute left-[100px] top-[158px] w-[259px] h-[22px]">
          <Image
            src="/images/Frame 9.png"
            alt="logo"
            width={444}
            height={530}
          />
        </div>

        {/* Main Image */}
        <div className="absolute left-[266px] top-[216px] w-[444px] h-[530px]">
          <Image
            src="/images/image 1.png"
            alt="T-shirt"
            width={444}
            height={530}
          />
        </div>

        {/* Thumbnail Images */}
        <div className="relative">
          {/* First Thumbnail */}
          <div className="absolute left-[100px] top-[216px] w-[152px] h-[167px] rounded-3xl">
            <Image
              src="/images/image 2.png"
              alt="Thumbnail 1"
              width={152}
              height={160}
            />
          </div>

          {/* Second Thumbnail */}
          <div className="absolute left-[100px] top-[397px] w-[152px] h-[167px]">
            <Image
              src="/images/image 5.png"
              alt="Thumbnail 2"
              width={152}
              height={167}
            />
          </div>

          {/* Third Thumbnail */}
          <div className="absolute left-[100px] top-[579px] w-[152px] h-[167px]">
            <Image
              src="/images/image 6.png"
              alt="Thumbnail 3"
              width={152}
              height={167}
            />
          </div>
        </div>
      </div>


      {/* -------- Product Details -------- */}
      <div className="relative">
        {/* Product Details */}
        <div className="absolute left-[240px] top-[800px] group flex flex-col items-center">
          <p className="text-gray-500 text-lg hover:text-black cursor-pointer text-center">
            Product Details
          </p>
          
        </div>

        {/* Rating & Reviews */}
        <div className="absolute left-[642px] top-[800px] group flex flex-col items-center">
          <p className="text-gray-500 text-lg hover:text-black cursor-pointer text-center">
            Rating & Reviews
          </p>
        
        </div>

        {/* FAQs */}
        <div className="absolute left-[1110px] top-[800px] group flex flex-col items-center">
          <p className="text-gray-500 text-lg hover:text-black cursor-pointer text-center">
            FAQs
          </p>
          
        </div>
      </div>

      {/* REVIEWS SECTION */}
      <div>
        {/* left side */}
        <div className="absolute w-[160px] h-[32px] left-[100px] top-[896px] flex">
          <p className="text-xl font-bold">All Reviews</p>
          <p className="text-gray-500 pt-1 px-2">(45)</p>
        </div>

        {/* Right side */}
        <div className="absolute w-[354px] h-[48px] left-[986px] top-[888px]">
          <Image
            src="/images/Frame 21.png"
            alt="Stars"
            width={354}
            height={48}
          />
        </div>

        {/* Reviews area */}
        <div>
          <div className="relative">
            {/* Div 1 */}
            <div className="absolute w-[610px] h-[241.5px] left-[730px] top-[960px] hover:border-2 hover:border-blue-500 rounded-none border-gray-200 border-2">
              <Image
                src="/images/Frame 23.png"
                alt="Stars"
                width={610}
                height={248}
              />
            </div>

            {/* Div 2 */}
            <div className="absolute w-[610px] h-[241.5px] left-[100px] top-[1222px] hover:border-2 hover:border-blue-500 rounded-none border-gray-200 border-2">
              <Image
                src="/images/Frame 24.png"
                alt="Stars"
                width={610}
                height={248}
              />
            </div>

            {/* Div 3 */}
            <div className="absolute w-[610px] h-[241.5px] left-[730px] top-[1222px] hover:border-2 hover:border-blue-500 rounded-none border-gray-200 border-2">
              <Image
                src="/images/Frame 25.png"
                alt="Stars"
                width={610}
                height={248}
              />
            </div>

            {/* Div 4 */}
            <div className="absolute w-[610px] h-[241.5px] left-[100px] top-[1484px] hover:border-2 hover:border-blue-500 rounded-none border-gray-200 border-2">
              
              <Image
                src="/images/Frame 26.png"
                alt="Stars"
                width={610}
                height={248}
              />
            </div>

            {/* Div 5 */}
            <div className="absolute w-[610px] h-[241.5px] left-[730px] top-[1484px] hover:border-2 hover:border-blue-500 rounded-none border-gray-200 border-2">
              <Image
                src="/images/Frame 27.png"
                alt="Stars"
                width={610}
                height={248}
              />
            </div>
          </div>
          <div className="absolute w-[230px] h-[52px] left-[605px] top-[1780px] border-gray-200 border-2 rounded-full">
            <button className="flex justify-center items-center pt-3">
              Load More Reviews
            </button>
          </div>
        </div>
      </div>\

      {/* YOU MIGHT ALSO LIKE SECTION */}
      <div>
        {/* Main Heading */}
        <div className="absolute w-[630px] h-[58px] left-[431px] top-[1878px] ">
          <p className="font-extrabold text-6xl">You might also like</p>
        </div>

        {/* Div 1 */}
        <div className="absolute w-[295px] h-[298px] left-[100px] top-[1991px] bg-[#F0EEED] rounded-3xl hover:border-2 hover:rounded-none hover:border-blue-400">
          <Image
            src="/images/Frame 32.png"
            alt="Stars"
            width={295}
            height={298}
            className="rounded-2xl"
          />
          <p className="w-[228px] h-[27px] font-bold pt-3 text-lg">
            Polo with Contrast Trims
          </p>
          <Image
            src="/images/Frame 35 (1).png"
            alt="Stars"
            width={138}
            height={19}
            className="pt-3"
          />
          <div className="flex gap-2">
            <p className="text-2xl font-bold pt-2">$212</p>
            <p className="text-2xl font-bold pt-2 text-gray-400">$242</p>
            <Image
              src="/images/Frame 42.png"
              alt="Stars"
              width={58}
              height={20}
              className="pt-2"
            />
          </div>
        </div>

        {/* Div 2 */}
        <div className="absolute w-[295px] h-[298px] left-[415px] top-[1991px] bg-[#F0EEED] rounded-3xl hover:border-2 hover:rounded-none hover:border-blue-400">
          <Image
            src="/images/Frame 33.png"
            alt="Stars"
            width={295}
            height={298}
            className="rounded-2xl"
          />
          <p className="w-[228px] h-[27px] font-bold pt-3 text-lg">
            Gradient Graphic T-shirt
          </p>
          <Image
            src="/images/Frame 39.png"
            alt="Stars"
            width={138}
            height={19}
            className="pt-3"
          />
          <p className="text-2xl font-bold pt-2">$145</p>
        </div>

        {/* Div 3 */}
        <div className="absolute w-[295px] h-[298px] left-[730px] top-[1991px] bg-[#F0EEED] rounded-3xl hover:border-2 hover:rounded-none hover:border-blue-400">
          <Image
            src="/images/Frame 34.png"
            alt="Stars"
            width={295}
            height={298}
            className="rounded-2xl"
          />
          <p className="w-[228px] h-[27px] font-bold pt-3 text-lg">
            Polo with Tipping Details
          </p>
          <Image
            src="/images/Frame 40 (1).png"
            alt="Stars"
            width={138}
            height={19}
            className="pt-3"
          />
          <p className="text-2xl font-bold pt-2">$180</p>
        </div>

        {/* Div 4 */}
        <div className="absolute w-[295px] h-[298px] left-[1045px] top-[1991px] bg-[#F0EEED] rounded-3xl hover:border-2 hover:rounded-none hover:border-blue-400">
          <Image
            src="/images/Frame 38.png"
            alt="Stars"
            width={295}
            height={298}
            className="rounded-2xl"
          />
          <p className="w-[228px] h-[27px] font-bold pt-3 text-lg">
            Black Striped T-shirt
          </p>
          <Image
            src="/images/Frame 41.png"
            alt="Stars"
            width={138}
            height={19}
            className="pt-3"
          />
          <Image
            src="/images/Frame 44 (3).png"
            alt="Stars"
            width={188}
            height={32}
            className="pt-3"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
