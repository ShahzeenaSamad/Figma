'use client'

import React, { useState } from "react";
import Image from "next/image";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";

type ItemKey = 'tShirt' | 'checkeredShirt' | 'skinnyJeans';

const MyCart = () => {
  const [itemCounts, setItemCounts] = useState<{ tShirt: number; checkeredShirt: number; skinnyJeans: number }>({
    tShirt: 1,
    checkeredShirt: 1,
    skinnyJeans: 1,
  });

  const increment = (item: ItemKey) => {
    setItemCounts((prev) => ({ ...prev, [item]: prev[item] + 1 }));
  };

  const decrement = (item: ItemKey) => {
    setItemCounts((prev) => ({
      ...prev,
      [item]: prev[item] > 0 ? prev[item] - 1 : 0,
    }));
  };

  const removeItem = (item: ItemKey) => {
    setItemCounts((prev) => ({ ...prev, [item]: 0 }));
  };

  return (
    <div className="flex flex-col w-[1440px] h-[800px]">
      <div className="absolute w-[315px] h-[48px] left-[100px] top-[204px]">
        <p className="font-extrabold text-5xl">YOUR CART</p>
      </div>
      <div className="absolute w-[715px] h-[508px] left-[100px] top-[276px] border rounded-2xl">
        {/* First Item */}
        <div className="absolute w-[667px] h-[124px] left-[24px] top-[20px]">
          <div className="absolute w-[124px] h-[124px] left-[0px] top-[0px]">
            <Image
              src="/images/Frame 33.png"
              alt="T-shirt"
              width={124}
              height={124}
            />
          </div>
          <div className="absolute w-[227px] h-[118px] left-[164px] top-[0px]">
            <p className="font-bold text-1xl">Gradient Graphic T-shirt</p>
            <p className="text-sm pt-2">Size: Large</p>
            <p className="text-sm pt-2"> Color: White </p>
            <p className="font-bold text-2xl pt-2">$145</p>
          </div>
          <div className="absolute w-[150px] left-[442px] top-[0px]">
            <RiDeleteBin6Fill
              className="text-red-500 text-2xl ml-48 cursor-pointer"
              onClick={() => removeItem("tShirt")} // Trigger removeItem for T-shirt
            />
            <div className="flex items-center justify-center bg-gray-100 rounded-full h-8 mt-16 mx-6 ml-44">
              <button
                className="flex items-center space-x-2 text-sm font-medium text-gray-700"
                onClick={() => decrement("tShirt")}
              >
                <FiMinus className="cursor-pointer text-lg" />
              </button>
              <span className="mx-4">{itemCounts.tShirt}</span>
              <button
                className="flex items-center space-x-2 text-sm font-medium text-gray-700"
                onClick={() => increment("tShirt")}
              >
                <FaPlus className="cursor-pointer text-lg" />
              </button>
            </div>
          </div>
        </div>

        {/* Second Item */}
        <div className="absolute w-[667px] h-[124px] left-[24px] top-[192px]">
          <div className="absolute w-[124px] h-[124px] left-[0px] top-[0px]">
            <Image
              src="/images/Frame 72.png"
              alt="Checkered Shirt"
              width={124}
              height={124}
            />
          </div>
          <div className="absolute w-[151px] h-[118px] left-[164px] top-[0px]">
            <p className="font-bold text-1xl">Checkered Shirt</p>
            <p className="text-sm pt-2">Size: Medium</p>
            <p className="text-sm pt-2"> Color: Red </p>
            <p className="font-bold text-2xl pt-2">$180</p>
          </div>
          <div className="absolute w-[150px] left-[442px] top-[0px]">
            <RiDeleteBin6Fill
              className="text-red-500 text-2xl ml-48 cursor-pointer"
              onClick={() => removeItem("checkeredShirt")} // Trigger removeItem for Checkered Shirt
            />
            <div className="flex items-center justify-center bg-gray-100 rounded-full h-8 mt-16 mx-6 ml-44">
              <button
                className="flex items-center space-x-2 text-sm font-medium text-gray-700"
                onClick={() => decrement("checkeredShirt")}
              >
                <FiMinus className="cursor-pointer text-lg" />
              </button>
              <span className="mx-4">{itemCounts.checkeredShirt}</span>
              <button
                className="flex items-center space-x-2 text-sm font-medium text-gray-700"
                onClick={() => increment("checkeredShirt")}
              >
                <FaPlus className="cursor-pointer text-lg" />
              </button>
            </div>
          </div>
        </div>

        {/* Third Item */}
        <div className="absolute w-[667px] h-[124px] left-[24px] top-[364px]">
          <div className="absolute w-[124px] h-[124px] left-[0px] top-[0px]">
            <Image
              src="/images/Frame 71.png"
              alt="Skinny Jeans"
              width={124}
              height={124}
            />
          </div>
          <div className="absolute w-[150px] h-[118px] left-[164px] top-[0px]">
            <p className="font-bold text-1xl">Skinny Fit Jeans</p>
            <p className="text-sm pt-2">Size: Large</p>
            <p className="text-sm pt-2"> Color: Blue </p>
            <p className="font-bold text-2xl pt-2">$240</p>
          </div>
          <div className="absolute w-[150px] left-[442px] top-[0px]">
            <RiDeleteBin6Fill
              className="text-red-500 text-2xl ml-48 cursor-pointer"
              onClick={() => removeItem("skinnyJeans")} // Trigger removeItem for Skinny Jeans
            />
            <div className="flex items-center justify-center bg-gray-200 rounded-full h-8 mt-16 mx-6 ml-44">
              <button
                className="flex items-center space-x-2 text-sm font-medium text-gray-700"
                onClick={() => decrement("skinnyJeans")}
              >
                <FiMinus className="cursor-pointer text-lg" />
              </button>
              <span className="mx-4">{itemCounts.skinnyJeans}</span>
              <button
                className="flex items-center space-x-2 text-sm font-medium text-gray-700"
                onClick={() => increment("skinnyJeans")}
              >
                <FaPlus className="cursor-pointer text-lg" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side Div */}
      <div className="absolute w-[505px] h-[458px] left-[835px] top-[276px] border rounded-2xl">
        <div className="absolute w-[179px] h-[32px] left-[24px] top-[20px]">
          <p className="text-xl font-bold">Order Summary</p>
        </div>
        <div className="absolute w-[457px] h-[193px] left-[24px] top-[76px]">
          <Image
            src="/images/Frame 102.png"
            alt="Order Summary"
            width={457}
            height={193}
          />
        </div>
        <div className="absolute w-[457px] h-[48px] left-[24px] top-[293px]">
          <Image
            src="/images/Frame 101.png"
            alt="Order Details"
            width={457}
            height={48}
          />
        </div>
        <div className="absolute w-[457px] h-[60px] left-[24px] top-[365px] bg-black rounded-full flex justify-center items-center">
          <button className="text-white flex justify-center items-center text-2xl">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
