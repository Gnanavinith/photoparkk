import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Grid, Layout, Layers, Lightbulb,Camera } from 'lucide-react';


// Acrylic
import acrylic1 from "../assets/NewArrival/arrival1.jpg";
import acrylic2 from "../assets/NewArrival/arrival2.jpg";
import acrylic3 from "../assets/NewArrival/arrival3.jpg";
import acrylic4 from "../assets/NewArrival/arrival4.jpg";

// Canvas
import canvas1 from "../assets/NewArrival/arrival5.jpg";
import canvas2 from "../assets/NewArrival/arrival6.jpg";
import canvas3 from "../assets/NewArrival/arrival7.jpg";

// Wooden Cutouts
import wooden1 from "../assets/NewArrival/arrival8.jpg";
import wooden2 from "../assets/NewArrival/arrival9.jpg";

// Backlight Frames
import backlight1 from "../assets/NewArrival/arrival10.jpg";
import backlight2 from "../assets/NewArrival/arrival11.jpg";
import backlight3 from "../assets/NewArrival/arrival12.jpg";

// Center focus for custom layout or special collection
import center1 from "../assets/NewArrival/arrivalcenter1.jpg";
import center2 from "../assets/NewArrival/arrivalcenter2.jpg";
import center3 from "../assets/NewArrival/arrivalcenter3.jpg";
import center4 from "../assets/NewArrival/arrivalcenter4.jpg";
import center5 from "../assets/NewArrival/arrivalcenter5.jpg";
import center6 from "../assets/NewArrival/arrivalcenter6.jpg";


const categories = {
    "Acrylic": {
      icon: <Grid className="w-8 h-8" />,
      description: "Modern acrylic prints with vibrant colors",
      images: [acrylic1, acrylic2, acrylic3, acrylic4],
    },
    "Canvas": {
      icon: <Layout className="w-8 h-8" />,
      description: "Premium quality canvas prints",
      images: [canvas1, canvas2, canvas3],
    },
    "Wooden Cutouts": {
      icon: <Layers className="w-8 h-8" />,
      description: "Handcrafted wooden art pieces",
      images: [wooden1, wooden2],
    },
    "Backlight Frames": {
      icon: <Lightbulb className="w-8 h-8" />,
      description: "Illuminated frames for stunning displays",
      images: [backlight1, backlight2, backlight3],
    }
   
  };


function Collection() {
  const [selectedCategory, setSelectedCategory] = useState("Acrylic");
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className="min-h-screen mt-20 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] font-[Poppins]">
    {/* Header */}
    <header>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 flex justify-center items-center gap-2">
          Art Collection
        </h1>
        <p className="text-gray-600 mt-2 text-2xl italic">
          Curated expressions of creativity — one frame at a time.
        </p>
      </div>
    </header>
  
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Mobile Category Selector */}
      <div className="md:hidden mb-8">
        <button
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          className="w-full bg-white rounded-lg shadow-md px-4 py-3 flex items-center justify-between"
        >
          <div className="flex items-center space-x-3">
            {categories[selectedCategory].icon}
            <span className="font-medium">{selectedCategory}</span>
          </div>
          <ChevronDown
            className={`w-5 h-5 transition-transform ${
              showMobileMenu ? "rotate-180" : ""
            }`}
          />
        </button>
  
        <AnimatePresence>
          {showMobileMenu && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-2 bg-white rounded-lg shadow-lg overflow-hidden"
            >
              {Object.entries(categories).map(([name, { icon, description }]) => (
                <motion.button
                  key={name}
                  whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                  onClick={() => {
                    setSelectedCategory(name);
                    setShowMobileMenu(false);
                  }}
                  className={`w-full px-4 py-3 flex items-start space-x-3 ${
                    selectedCategory === name
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-700"
                  }`}
                >
                  <div
                    className={`${
                      selectedCategory === name ? "text-blue-600" : "text-gray-400"
                    }`}
                  >
                    {icon}
                  </div>
                  <div className="text-left">
                    <div className="font-medium">{name}</div>
                    <div className="text-sm text-gray-500">{description}</div>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
  
      <div className="flex flex-col md:flex-row gap-8">
        {/* Desktop Category Sidebar */}
        <div className="hidden md:block w-72">
          <div className="bg-white rounded-xl shadow-md p-4">
            <h2 className="text-2xl font-extrabold mb-4 px-2 uppercase">
              Categories
            </h2>
            <div className="space-y-2">
              {Object.entries(categories).map(([name, { icon, description }]) => (
                <motion.button
                  key={name}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedCategory(name)}
                  className={`w-full p-3 flex items-start space-x-3 rounded-lg transition-colors ${
                    selectedCategory === name
                      ? "bg-blue-500 text-white"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
                >
                  <div
                    className={selectedCategory === name ? "text-white" : "text-gray-400"}
                  >
                    {icon}
                  </div>
                  <div className="text-left">
                    <div className="text-2xl">{name}</div>
                    <div
                      className={`text-sm ${
                        selectedCategory === name
                          ? "text-blue-100"
                          : "text-gray-500"
                      }`}
                    >
                      {description}
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
  
        {/* Gallery Grid */}
        <div className="flex-1">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {categories[selectedCategory].images.map((imgSrc, index) => (
              <motion.div
                key={imgSrc}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group relative aspect-square rounded-xl overflow-hidden shadow-md bg-white"
              >
                <img
                  src={imgSrc}
                  alt={`${selectedCategory} artwork ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-medium">
                      {selectedCategory} - Piece {index + 1}
                    </p>
                    <p className="text-gray-200 text-sm mt-1 mb-2">
                      Click to view details
                    </p>
                    <button className="bg-blue-500 cursor-pointer text-white text-sm px-3 py-1 rounded hover:bg-blue-600 transition">
                      Buy Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </main>
  </div>
  
  
  );
}

export default Collection;