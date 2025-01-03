import Image from "next/image";
import Link from "next/link";
import React from "react";

const items = [
  {
    image: "/images/image 7 (1).png",
    title: "VERTICAL STRIPED SHIRT",
    stars: "/images/stars.png",
    price: "$100",
  },
  {
    image: "/images/image 8 (1).png",
    title: "COURAGE GRAPHIC T-SHIRT",
    stars: "/images/stars.png",
    price: "$120",
  },
  {
    image: "/images/image 9 (1).png",
    title: "LOOSE FIT BERMUDA SHORTS",
    stars: "/images/stars.png",
    price: "$130",
  },
  {
    image: "/images/image 10 (1).png",
    title: "FADED SKINNY JEANS",
    stars: "/images/stars.png",
    price: "$140",
  },
];

const TopSelling = () => {
  return (
    <div className="max-w-screen-lg mx-auto py-20">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="font-extrabold text-5xl">TOP SELLING</p>
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {items.map((item, index) => (
          <div
            key={index}
          >
            {/* Product Image */}
            <div className="relative w-full aspect-w-3 aspect-h-4 overflow-hidden rounded-2xl group">
  <Image
    src={item.image}
    alt={item.title}
    width={296}
    height={350}
    className="rounded-2xl transform transition-transform duration-300 group-hover:scale-105"
  />
  <div className="absolute inset-0 border-2 border-transparent rounded-2xl group-hover:border-blue-500 transition-all duration-300"></div>
</div>



            {/* Product Title */}
            <div className=" py-2">
              <p className="text-[16px] font-bold">{item.title}</p>
            </div>

            {/* Product Stars */}
            <div className="flex py-1">
              <Image src={item.stars} alt="Stars" width={150} height={19} />
            </div>

            {/* Product Price */}
            <div className="flex py-2">
              <p className="text-2xl font-bold text-gray-800">{item.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-12">
        <Link
          href="/ProductDetail"
          className="w-[218px] h-[52px] border border-gray-400 rounded-full flex justify-center items-center hover:border-blue-500 hover:border-2 overflow-hidden"
        >
          <p className="font-semibold text-lg hover:text-2xl">View All</p>
        </Link>
      </div>
    </div>
  );
};

export default TopSelling;
