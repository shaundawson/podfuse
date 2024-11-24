import React from "react";
import Slideshow from "../components/Slideshow";

const Wireframes = () => {
    // Array of wireframe images
    const wireframeImages = [
        "/wireframes/Screen1.png",
        "/wireframes/Screen2.png",
        "/wireframes/Screen3.png",
        "/wireframes/Screen4.png",
        "/wireframes/Screen5.png",
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <section className="container mx-auto px-6 lg:px-20 py-16">
                <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">
                    PodFuse Wireframes
                </h1>
                {/* Slideshow */}
                <Slideshow images={wireframeImages} />
            </section>
        </div>
    );
};

export default Wireframes;
