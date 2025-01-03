

import Image from 'next/image'
import React from 'react'


const DressStyle = () => {
  return (
    <div className="w-[1440px] h-[870px]">
  <div className="absolute w-[1239px] h-[866px] top-[2417px] left-[100px] bg-[#F0F0F0] rounded-lg">
    <div className="absolute w-[710px] h-[58px] top-[70px] left-[276px] text-5xl flex items-center justify-center font-extrabold text-black">
      <p>BROWSE BY DRESS STYLE</p>
    </div>

    {/* First Inner Div */}
    <div className="absolute w-[407px] h-[289px] top-[192px] left-[64px] bg-gray-300 rounded-md">
    <Image
            src="/images/Frame 61.png"
            alt="Vector"
            width={407}
            height={289}
          />
    </div>
    
    {/* Second Inner Div */}
    <div className="absolute w-[684px] h-[289px] top-[192px] left-[491px] bg-gray-300 rounded-md">
    <Image
            src="/images/Frame 62.png"
            alt="Vector"
            width={684}
            height={289}
          />
    </div>
    
    {/* Third Inner Div */}
    <div className="absolute w-[684px] h-[289px] top-[501px] left-[64px] bg-gray-300 rounded-md">
    <Image
            src="/images/Frame 64.png"
            alt="Vector"
            width={684}
            height={289}
          />
    </div>
    
    {/* Fourth Inner Div */}
    <div className="absolute w-[407px] h-[289px] top-[501px] left-[768px] bg-gray-300 rounded-md">
    <Image
            src="/images/Frame 63.png"
            alt="Vector"
            width={407}
            height={289}
          />
    </div>
  </div>
  </div>

  )
}

export default DressStyle
