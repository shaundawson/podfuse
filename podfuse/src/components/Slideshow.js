import React, { useState } from "react";

const Slideshow = ({ images }) => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const goToSlide = (index) => {
        setCurrent(index);
    };

    return (
        <div className="relative flex flex-col items-center justify-center">
            {/* Slideshow container */}
            <div className="relative w-[80%] max-w-4xl mx-auto h-[50vh] bg-[#121212] rounded-lg overflow-hidden shadow-lg">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-700 ${index === current ? "opacity-100 z-10" : "opacity-0"
                            }`}
                    >
                        <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full object-contain"
                        />
                    </div>
                ))}
            </div>

            {/* Navigation buttons */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 -translate-y-1/2 bg-[#282828] text-white p-3 rounded-full hover:bg-[#1DB954] transition"
            >
                &#10094;
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-[#282828] text-white p-3 rounded-full hover:bg-[#1DB954] transition"
            >
                &#10095;
            </button>

            {/* Navigation dots */}
            <div className="flex justify-center space-x-3 mt-4">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full ${index === current ? "bg-[#1DB954]" : "bg-[#B3B3B3]"
                            } transition`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Slideshow;
