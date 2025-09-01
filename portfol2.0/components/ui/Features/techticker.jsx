"use client";

import Image from "next/image";

export const TechTicker = ({ logos = [] }) => {

    return (
    <div className="overflow-hidden w-full py-6 bg-gray-900">
      <div className="ticker-animation space-x-10">
        {logos.map((logo, index) => (
          <div key={index} className="flex-shrink-0">
            <Image
              src={logo}
              alt={`logo-${index}`}
              width={80} // adjust based on your design
              height={80}
              className="h-16 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechTicker;
