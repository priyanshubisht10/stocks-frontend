import React from "react";

const Slider = ({ dayLow, dayHigh, currentPrice }) => {
   const sliderWidth = 100; // Slider width in percentage
   const range = dayHigh - dayLow;
   const position = ((currentPrice - dayLow) / range) * sliderWidth;

   console.log(dayHigh, dayLow, currentPrice);

   return (
      <div className="relative w-full">
         {/* Slider Track */}
         <div className="h-2 bg-gray-200 rounded-full w-full"></div>

         {/* Current Price Indicator (Dot) */}
         <div
            className="absolute top-0 transform -translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full"
            style={{ left: `${position}%` }}
         ></div>

         {/* Labels */}
         <div className="flex justify-between mt-2 text-sm text-gray-600">
            <span>Rs. {dayLow.toFixed(2)}</span>
            <span>Rs. {dayHigh.toFixed(2)}</span>
         </div>

         {/* Current Price Text */}
         <div
            className="absolute top-4 transform -translate-x-1/2 text-sm text-blue-500 font-semibold"
            style={{ left: `${position}%` }}
         >
            Rs. {currentPrice.toFixed(2)}
         </div>
      </div>
   );
};

export default Slider;