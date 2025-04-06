import React from "react";
import "../Components/NewArrival.css";
import arrival1 from "../assets/NewArrival/arrival1.jpg";
import arrival2 from "../assets/NewArrival/arrival2.jpg";
import arrival3 from "../assets/NewArrival/arrival3.jpg";
import arrival4 from "../assets/NewArrival/arrival4.jpg";
import arrival5 from "../assets/NewArrival/arrival5.jpg";
import arrival6 from "../assets/NewArrival/arrival6.jpg";
import arrival7 from "../assets/NewArrival/arrival7.jpg";
import arrival8 from "../assets/NewArrival/arrival8.jpg";
import arrival9 from "../assets/NewArrival/arrival9.jpg";
import arrival10 from "../assets/NewArrival/arrival10.jpg";
import arrival11 from "../assets/NewArrival/arrival11.jpg";
import arrival12 from "../assets/NewArrival/arrival12.jpg";
import arrivalcenter1 from "../assets/NewArrival/arrivalcenter1.jpg";
import arrivalcenter2 from "../assets/NewArrival/arrivalcenter2.jpg";
import arrivalcenter3 from "../assets/NewArrival/arrivalcenter3.jpg";
import arrivalcenter4 from "../assets/NewArrival/arrivalcenter4.jpg";
import arrivalcenter5 from "../assets/NewArrival/arrivalcenter5.jpg";
import arrivalcenter6 from "../assets/NewArrival/arrivalcenter6.jpg";

const arrivals = [
  {
    left: arrival1,
    center: arrivalcenter1,
    right: arrival2,
    quote: "Turn your favorite moments into timeless acrylic masterpieces!",
  },
  {
    left: arrival3,
    center: arrivalcenter2,
    right: arrival4,
    quote: "Capture life’s best memories in crystal-clear acrylic cutouts!",
  },
  {
    left: arrival5,
    center: arrivalcenter3,
    right: arrival6,
    quote: "Acrylic photo cutouts – where your pictures come to life!",
  },
  {
    left: arrival7,
    center: arrivalcenter4,
    right: arrival8,
    quote: "Transform your photos into sleek, modern acrylic art!",
  },
  {
    left: arrival9,
    center: arrivalcenter5,
    right: arrival10,
    quote: "Preserve your special memories with stunning acrylic cutouts!",
  },
  {
    left: arrival11,
    center: arrivalcenter6,
    right: arrival12,
    quote:
      "A perfect blend of elegance and durability – acrylic photo cutouts!",
  },
];

const NewArrivals = () => {
  return (
    <div className="text-center sm:px-[5vw] md:px-[7vw] lg:px-[9vw] font-[Poppins] ">
    <h1 className="font-extrabold text-4xl">New Arrivals</h1>
    <p className="text-2xl">Acrylic Photo Cutouts</p>
    <p className="text-lg">Buy Photo Cutouts Starts @ ₹ 398/-</p>

    {/* Scrollable Section */}
    <div className="overflow-y-auto overflow-x-hidden h-[600px] xl:h-[800px] 2xl:h-[900px] 3xl:h-[1000px] border rounded-sm p-10 mt-10 custom-scrollbar">
        <div className="grid gap-14 items-center">  
            {arrivals.map((row, index) => (
                <div key={index} className="grid grid-cols-3 gap-10 items-center justify-center text-center">
                    
                    {/* Left Image - Vertical */}
                    <div className="relative group">
                        <img 
                            src={row.left} 
                            alt="Left" 
                            className="w-full h-[250px] lg:h-[320px] xl:h-[400px] 2xl:h-[750px] 3xl:h-[800px] object-cover rounded-lg transition-all duration-300" 
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/40 transition-opacity duration-300 rounded-lg">
                            <button className="bg-white text-black px-4 py-2 font-semibold rounded-lg shadow-lg hover:bg-gray-200 cursor-pointer">
                                Buy Now
                            </button>
                        </div>
                    </div>

                    {/* Center Image - Horizontal with Quote */}
                    <div className="relative">
                        {/* Image with Hover Effect */}
                        <div className="group relative">
                            <img 
                                src={row.center} 
                                alt="Center" 
                                className="w-full h-[180px] lg:h-[220px] xl:h-[260px] 2xl:h-[600px] object-cover rounded-lg transition-all duration-300" 
                            />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/40 transition-opacity duration-300 rounded-lg">
                                <button className="bg-white text-black px-4 py-2 font-semibold rounded-lg shadow-lg hover:bg-gray-200 cursor-pointer">
                                    Buy Now
                                </button>
                            </div>
                        </div>
                        {/* Quote Below (Unaffected by Hover) */}
                        <p className="mt-4 text-lg font-semibold italic text-gray-700">
                            {row.quote}
                        </p>
                    </div>

                    {/* Right Image - Vertical */}
                    <div className="relative group">
                        <img 
                            src={row.right} 
                            alt="Right" 
                            className="w-full h-[250px] lg:h-[320px] xl:h-[400px] 2xl:h-[750px] 3xl:h-[800px] object-cover rounded-lg transition-all duration-300" 
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/40 transition-opacity duration-300 rounded-lg">
                            <button className="bg-white text-black px-4 py-2 font-semibold rounded-lg shadow-lg hover:bg-gray-200 cursor-pointer">
                                Buy Now
                            </button>
                        </div>
                    </div>

                </div>
            ))}
        </div>
    </div>
</div>

  
  );
};

export default NewArrivals;
