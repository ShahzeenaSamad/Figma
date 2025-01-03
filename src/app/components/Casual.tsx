'use client'

import Image from 'next/image';
import { RiArrowDropUpLine } from "react-icons/ri";
import React, { useState } from 'react';



const Casual = () => {
  return (

    <div className=" w-[1440px] h-[1597px]">
        {/* --------RIGHT SIDE--------------- */}
         <div
        className="absolute w-[101px] h-[43px] left-[414px] top-[204px]">
            <p className='font-bold text-3xl pt-2'>Casual</p>
      </div>
  
      <div
        className="absolute w-[396px] h-[16px] left-[944px] top-[222px]">
        <p className='text-sm px-6'>Showing 1-10 of 100 Products
        Sort by: Most Popular</p>
      </div>

      {/* Div 1 */}
      <div className="absolute w-[295px] h-[298px] left-[415px] top-[263px] border-2 hover:border-blue-500 transition-all duration-300">
      <Image
            src="/images/Frame 33.png"
            alt="logo"
            width={295}
            height={298}
          />
          <p className='mt-2'>Gradient Graphic T-shirt</p>
          <Image
            src="/images/Frame 39.png"
            alt="logo"
            width={150}
            height={19}
            className='mt-2'
          />
          <p className='font-bold text-2xl mt-2'>$145</p>
          
      </div>
      {/* Div 2 */}
      <div className="absolute w-[295px] h-[298px] left-[730px] top-[263px] border-2 hover:border-blue-500 transition-all duration-300">
      <Image
            src="/images/Frame 34.png"
            alt="logo"
            width={295}
            height={298}
          />
          <p className='mt-2'>Polo with Tipping Details</p>
          <Image
            src="/images/Frame 40 (1).png"
            alt="logo"
            width={150}
            height={19}
            className='mt-2'
          />
          <p className='font-bold text-2xl mt-2'>$180</p>
      </div>
      {/* Div 3 */}
      <div className="absolute w-[295px] h-[298px] left-[1045px] top-[263px] border-2 hover:border-blue-500 transition-all duration-300">
      <Image
            src="/images/Frame 38.png"
            alt="logo"
            width={295}
            height={298}
          />
          <p className='mt-2'>Black Striped T-shirt</p>
          <Image
            src="/images/Frame 41.png"
            alt="logo"
            width={150}
            height={19}
            className='mt-2'
          />
           <Image
            src="/images/Frame 44.png"
            alt="logo"
            width={188}
            height={32}
            className='mt-2'
          />
      </div>
      {/* Div 4 */}
      <div className="absolute w-[295px] h-[298px] left-[415px] top-[707px] border-2 hover:border-blue-500 transition-all duration-300">
      <Image
            src="/images/Frame 71.png"
            alt="logo"
            width={295}
            height={298}
          />
          <p className='mt-2'>SKINNY FIT JEANS</p>
          <Image
            src="/images/Frame 39.png"
            alt="logo"
            width={150}
            height={19}
            className='mt-2'
          />
          <Image
            src="/images/Frame 59 (2).png"
            alt="logo"
            width={188}
            height={32}
            className='mt-2'
          />
      </div>
      {/* Div 5 */}
      <div className="absolute w-[295px] h-[298px] left-[730px] top-[707px] border-2 hover:border-blue-500 transition-all duration-300">
      <Image
            src="/images/Frame 72.png"
            alt="logo"
            width={295}
            height={298}
          />
          <p className='mt-2'>CHECKERED SHIRT</p>
          <Image
            src="/images/Frame 40 (1).png"
            alt="logo"
            width={150}
            height={19}
            className='mt-2'
          />
          <p className='font-bold text-2xl mt-2'>$180</p>
      </div>
      {/* Div 6 */}
      <div className="absolute w-[295px] h-[298px] left-[1045px] top-[707px] border-2 hover:border-blue-500 transition-all duration-300">
      <Image
            src="/images/Frame 73.png"
            alt="logo"
            width={295}
            height={298}
          />
          <p className='mt-2'>SLEEVE STRIPED T-SHIRT</p>
          <Image
            src="/images/Frame 40 (1).png"
            alt="logo"
            width={150}
            height={19}
            className='mt-2'
          />
          <Image
            src="/images/Frame 74.png"
            alt="logo"
            width={188}
            height={32}
            className='mt-2'
          />
      </div>
      {/* Div 7 */}
      <div className="absolute w-[295px] h-[298px] left-[415px] top-[1151px] border-2 hover:border-blue-500 transition-all duration-300">
      <Image
            src="/images/image 7 (1).png"
            alt="logo"
            width={295}
            height={298}
             className="rounded-2xl"
          />
          <p className='mt-2'>VERTICAL STRIPED SHIRT</p>
          <Image
            src="/images/Frame 41.png"
            alt="logo"
            width={150}
            height={19}
            className='mt-2'
          />
          <Image
            src="/images/Frame 74.png"
            alt="logo"
            width={188}
            height={32}
            className='mt-2'
          />
      </div>
      {/* Div 8 */}
      <div className="absolute w-[295px] h-[298px] left-[730px] top-[1151px] border-2 hover:border-blue-500 transition-all duration-300">
      <Image
            src="/images/image 8 (1).png"
            alt="logo"
            width={295}
            height={298}
             className="rounded-2xl"
          />
          <p className='mt-2'>COURAGE GRAPHIC T-SHIRT</p>
          <Image
            src="/images/Frame 40 (1).png"
            alt="logo"
            width={150}
            height={19}
            className='mt-2'
          />
          <p className='font-bold text-2xl mt'>$145</p>
      </div>
      {/* Div 9 */}
      <div className="absolute w-[295px] h-[298px] left-[1045px] top-[1151px] border-2 hover:border-blue-500 transition-all duration-300">
      <Image
            src="/images/image 9 (1).png"
            alt="logo"
            width={295}
            height={298}
            className="rounded-2xl"
          />
          <p className='mt-2'>LOOSE FIT BERMUDA SHORTS</p>
          <Image
            src="/images/Frame 39.png"
            alt="logo"
            width={150}
            height={19}
            className="mt-2"
          />
          <p className='font-bold text-2xl mt-2'>$80</p>
      </div>
      <div className="absolute w-[925px] h-[0px] left-[415px] top-[1591px] border bg-gray-200"></div>
      <div className="absolute w-[920px] h-[40px] left-[415px] top-[1611px]">
      <Image
            src="/images/Frame 88.png"
            alt="logo"
            width={920}
            height={40}
            className="mt-2"
          />
          </div>

          {/*  --------------LEFT SIDE------------- */}
          <div className="relative">
          <div className="absolute w-[123px] h-[22px] left-[100px] top-[158px]">
            <p>Home 
            Casual</p>
            </div>    
  {/* Main container div */}
  <div className="absolute w-[295px] h-[1220px] left-[100px] top-[204px] border rounded-2xl">
    {/* Child elements */}
    <div className="absolute w-[247px] h-[27px] left-6 top-4">
      <Image
        src="/images/Frame 65.png"
        alt="logo"
        width={247}
        height={27}
      />
    </div>

    {/* First divider */}
    <div className="absolute w-[247px] h-[0px] left-[24px] top-[71px] border"></div>

    {/* First section */}
    <div className="absolute w-[247px] h-[160px] left-[24px] top-[95px] ">
    <Image
        src="/images/Frame 73 (1).png"
        alt="logo"
        width={247}
        height={160}
      />
    </div>

    {/* Second divider */}
    <div className="absolute w-[247px] h-[0px] left-[24px] top-[279px] border"></div>

    {/* Second section */}
    <div className="absolute w-[247px] h-[90px] left-[24px] top-[303px] ">
    <Image
        src="/images/Frame 75.png"
        alt="logo"
        width={247}
        height={90}
      />
    </div>

    {/* Third divider */}
    <div className="absolute w-[247px] h-[0px] left-[24px] top-[417px] border"></div>

    {/* Third section */}
    <div className="absolute w-[247px] h-[137px] left-[24px] top-[441px] ">
      <div className='flex'>
      <p className='font-bold text-xl'>Colors </p>
      <RiArrowDropUpLine className='text-4xl ml-36'/>
      </div>
      <div className='flex gap-4'>
      <button className='w-9 h-9 bg-green-500 border-gray-500 border rounded-full flex items-center justify-center'></button>
      <button className='w-9 h-9 bg-red-600  border border-gray-500 rounded-full flex items-center justify-center'></button>
      <button className='w-9 h-9 bg-yellow-400 border border-gray-500 rounded-full flex items-center justify-center'></button>
      <button className='w-9 h9 bg-orange-500 border border-gray-500 rounded-full flex items-center justify-center'></button>
      <button className='w-9 h-9 bg-cyan-400 border border-gray-500 rounded-full flex items-center justify-center'></button>
      </div>
      <div className='flex gap-4 mt-2'>
      
      <button className='w-9 h-9 bg-blue-500 border border-gray-500 rounded-full flex items-center justify-center'></button>
      <button className='w-9 h-9 bg-purple-500 border border-gray-500 rounded-full flex items-center justify-center'></button>
      <button className='w-9 h-9 bg-fuchsia-500 border border-gray-500 rounded-full flex items-center justify-center'></button>
      <button className='w-9 h-9 bg-white border border-gray-500 rounded-full flex items-center justify-center'></button>
      <button className='w-9 h-9 bg-black border border-gray-500 rounded-full flex items-center justify-center'></button>
      </div>
    
    </div>

    {/* Fourth divider */}
    <div className="absolute w-[247px] h-[0px] left-[24px] top-[602px] border"></div>

    {/* Fourth section */}
    <div className="absolute w-[247px] h-[274px] left-[24px] top-[626px] ">
    <div className='flex'>
      <p className='font-bold text-xl'>Size </p>
      <RiArrowDropUpLine className='text-4xl ml-36'/>
      </div>
      <div className='space-y-2 space-x-2'>
        <button className='bg-gray-100 w-24 h-10 text-sm text-gray-500 rounded-full hover:bg-black hover:text-white'> Large</button>
        <button className='bg-gray-100 w-24 h-10 text-sm text-gray-500 rounded-full hover:bg-black hover:text-white'> X-Large</button>
        <button className='bg-gray-100 w-24 h-10 text-sm text-gray-500 rounded-full hover:bg-black hover:text-white'> XX-Large</button>
        <button className='bg-gray-100 w-24 h-10 text-sm text-gray-500 rounded-full hover:bg-black hover:text-white'> 3X-Largel</button>
        <button className='bg-gray-100 w-24 h-10 text-sm text-gray-500 rounded-full hover:bg-black hover:text-white'> 4X-Large</button>
      </div>
    
    </div>

    {/* Fifth divider */}
    <div className="absolute w-[247px] h-[0px]  left-[24px] top-[924px] border"></div>

    {/* Fifth section */}
    <div className="absolute w-[247px] h-[171px] left-[24px] top-[948px]">
    <Image
        src="/images/Frame 87.png"
        alt="logo"
        width={247}
        height={171}
      />
    </div>

    {/* Footer section */}
    <div className="absolute w-[247px] h-[48px] left-[24px] top-[1143px] flex items-center justify-center bg-black rounded-3xl">
        <button className='text-white flex items-center justify-center'>Apply Filter</button>
    </div>
  </div>
</div>

    </div>
  );
};

export default Casual
