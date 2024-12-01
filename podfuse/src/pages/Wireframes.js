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
        <div className="bg-[#121212] text-[#EDEDED] font-sans min-h-screen">
            {/* Header Section */}
            <section className="py-16">
                <div className="container mx-auto px-6 lg:px-20 text-center">
                    <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                        PodFuse <span className="text-[#1DB954]">Wireframes</span>
                    </h1>
                    <p className="mt-4 text-gray-400 text-lg">
                        Explore the initial design concepts that shaped PodFuse’s final look.
                        See how ideas evolved from sketches to a seamless podcast experience.
                    </p>
                </div>
            </section>

            {/* Slideshow Section */}
            <section className="py-16">
                <div className="container mx-auto px-6 lg:px-20">
                    <div className="bg-[#181818] p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                        <h2 className="text-2xl font-semibold text-center text-[#1DB954] mb-6">
                            Wireframe Slideshow
                        </h2>
                        <Slideshow images={wireframeImages} />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Wireframes;
