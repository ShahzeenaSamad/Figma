
'use client'

import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import correct icons
import { useRef } from "react";

const Reviews = () => {
  // Explicitly typing the useRef hook to target a div element
  const reviewsContainerRef = useRef<HTMLDivElement | null>(null);

  // Function to scroll left
  const scrollLeft = () => {
    if (reviewsContainerRef.current) {
      reviewsContainerRef.current.scrollLeft -= 400; // Scroll left by 400px
    }
  };

  // Function to scroll right
  const scrollRight = () => {
    if (reviewsContainerRef.current) {
      reviewsContainerRef.current.scrollLeft += 400; // Scroll right by 400px
    }
  };

  return (
    <div className="w-[1440px] h-[498px]">
      {/* Header Section */}
      <div className="absolute flex items-center justify-between w-[1240px] h-[58px] left-[100px] top-[3363px] px-4">
        {/* Heading */}
        <div>
          <p className="font-extrabold text-5xl">OUR HAPPY CUSTOMERS</p>
        </div>

        {/* Arrows */}
        <div className="flex gap-4 ml-8">
          <FaArrowLeft className="cursor-pointer" onClick={scrollLeft} />
          <FaArrowRight className="cursor-pointer" onClick={scrollRight} />
        </div>
      </div>

      {/* Reviews Box Container */}
      <div
        ref={reviewsContainerRef}
        className="absolute flex gap-4 ml-8 overflow-x-hidden scrollbar-hide w-[1240px] top-[3461px]"
      >
        {/* Box 1 */}
        <div className="w-[400px] h-[240px] border-2 rounded-2xl">
          <div className="w-[336px] h-[183px] p-4">
            <Image
              src="/images/Frame 10.png"
              alt="Stars"
              width={138}
              height={22}
              className="rounded-2xl"
            />
            <div className="flex">
              <p className="mt-4 font-bold text-xl">Sarah M.</p>
              <FaCheckCircle className="text-green-600 mt-5 mx-2 text-xl" />
            </div>
            <p className="text-slate-600 mt-6 text-sm">
              I am blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I have bought has exceeded my expectations.
            </p>
          </div>
        </div>

        {/* Box 2 */}
        <div className="w-[400px] h-[240px] border-2 rounded-2xl">
          <div className="w-[336px] h-[183px] p-4">
            <Image
              src="/images/Frame 10.png"
              alt="Stars"
              width={138}
              height={22}
              className="rounded-2xl"
            />
            <div className="flex">
              <p className="mt-4 font-bold text-xl">Alex K.</p>
              <FaCheckCircle className="text-green-600 mt-5 mx-2 text-xl" />
            </div>
            <p className="text-slate-600 mt-6 text-sm">
             Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.
            </p>
          </div>
        </div>

        {/* Box 3 */}
        <div className="w-[400px] h-[240px] border-2 rounded-2xl">
          <div className="w-[336px] h-[183px] p-4">
            <Image
              src="/images/Frame 10.png"
              alt="Stars"
              width={138}
              height={22}
              className="rounded-2xl"
            />
            <div className="flex">
              <p className="mt-4 font-bold text-xl">James L.</p>
              <FaCheckCircle className="text-green-600 mt-5 mx-2 text-xl" />
            </div>
            <p className="text-slate-600 mt-6 text-sm">
              As someone who is always on the lookout for unique fashion pieces, I am thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.
            </p>
          </div>
        </div>

        {/* Box 4 */}
        <div className="w-[400px] h-[240px] border-2 rounded-2xl">
          <div className="w-[336px] h-[183px] p-4">
            <Image
              src="/images/Frame 10.png"
              alt="Stars"
              width={138}
              height={22}
              className="rounded-2xl"
            />
            <div className="flex">
              <p className="mt-4 font-bold text-xl">Emily R.</p>
              <FaCheckCircle className="text-green-600 mt-5 mx-2 text-xl" />
            </div>
            <p className="text-slate-600 mt-6 text-sm">
              I have been shopping at Shop.co for months now, and I am always amazed by the variety. Whether I need casual wear or something for a special event, they have got it all.
            </p>
          </div>
        </div>

        {/* Box 5 */}
        <div className="w-[400px] h-[240px] border-2 rounded-2xl">
          <div className="w-[336px] h-[183px] p-4">
            <Image
              src="/images/Frame 10.png"
              alt="Stars"
              width={138}
              height={22}
              className="rounded-2xl"
            />
            <div className="flex">
              <p className="mt-4 font-bold text-xl">Michael B.</p>
              <FaCheckCircle className="text-green-600 mt-5 mx-2 text-xl" />
            </div>
            <p className="text-slate-600 mt-6 text-sm">
              Shop.co has completely transformed the way I shop for clothes. The styles are fresh and always aligned with current fashion trends. Highly recommend!
            </p>
          </div>
        </div>

        {/* Box 6 */}
        <div className="w-[400px] h-[240px] border-2 rounded-2xl">
          <div className="w-[336px] h-[183px] p-4">
            <Image
              src="/images/Frame 10.png"
              alt="Stars"
              width={138}
              height={22}
              className="rounded-2xl"
            />
            <div className="flex">
              <p className="mt-4 font-bold text-xl">Olivia T.</p>
              <FaCheckCircle className="text-green-600 mt-5 mx-2 text-xl" />
            </div>
            <p className="text-slate-600 mt-6 text-sm">
              The quality and design of the clothes from Shop.co are outstanding! I’ve been able to find everything from workwear to weekend outfits, all in one place.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
