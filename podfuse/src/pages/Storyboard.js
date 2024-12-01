import React from "react";

const Storyboard = () => {
    return (
        <div className="bg-[#121212] text-[#EDEDED] font-sans">
            {/* Hero Section */}
            <section className="relative bg-[#121212] text-white py-14">
                <div className="container mx-auto px-6 lg:px-20">
                    <div className="text-center">
                        <h1 className="text-4xl lg:text-2xl font-bold tracking-tight">
                            Visualize the <span className="text-[#1DB954]">Journey</span>
                        </h1>
                        <p className="mt-4 text-lg text-gray-400">
                            Explore the user flow and design decisions behind PodFuse.
                        </p>
                    </div>
                </div>
            </section>

            {/* Storyboard Section */}
            <section className="bg-[#181818] py-12">
                <div className="container mx-auto px-6 lg:px-20">
                    <div className="flex justify-center">
                        <img
                            src="/storyboard/storyboard.png"
                            alt="PodFuse Storyboard"
                            className="w-full max-w-3xl rounded-lg shadow-md hover:shadow-lg transition duration-300"
                        />
                    </div>
                    <p className="text-center text-gray-400 text-sm mt-4">
                        The storyboard illustrates the streamlined process PodFuse follows to deliver an intuitive experience.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Storyboard;
