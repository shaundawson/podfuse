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
        <div className="relative w-full h-screen flex items-center justify-center">
            {/* Slides */}
            <div className="w-full max-w-3xl h-auto overflow-hidden rounded-lg shadow-lg">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        <img
                            src={image}
                            alt={`Scenario ${index + 1}`}
                            className="w-full max-h-[80vh] object-contain"
                        />
                    </div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700"
            >
                &#10094;
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700"
            >
                &#10095;
            </button>

            {/* Dots */}
            <div className="absolute bottom-8 flex justify-center space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full ${index === current ? "bg-gray-800" : "bg-gray-400"
                            }`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Slideshow;
