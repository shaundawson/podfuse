import React from "react";

const colors = [
    { name: "Background", code: "#121212" },
    { name: "Primary Text", code: "#EDEDED" },
    { name: "Highlight Text", code: "#1DB954" },
    { name: "Secondary Background", code: "#1C1C1C" },
    { name: "Button Background", code: "#15803D" },
    { name: "Button Hover", code: "#1DB954" },
    { name: "Link Hover", code: "#B3B3B3" },
];

const fonts = ["Roboto", "Helvetica"];

const Moodboard = () => {
    return (
        <div className="bg-[#121212] min-h-screen text-[#EDEDED]">
            <section className="container mx-auto px-6 lg:px-20 py-16">
                {/* Title and Subheading */}
                <div className="text-center mb-10">
                    <h1 className="text-2xl font-extrabold text-[#1DB954]">
                        PodFuse Moodboard
                    </h1>
                    <p className="text-sm text-gray-400 mt-2">
                        Colors and fonts that define the visual identity of PodFuse.
                    </p>
                </div>

                {/* Moodboard Image */}
                <div className="flex justify-center mb-12">
                    <img
                        src="/moodboard/PodFuseMoodboard.png"
                        alt="PodFuse Moodboard"
                        className="w-full max-w-3xl rounded-lg shadow-md hover:shadow-lg transition"
                    />
                </div>

                {/* Color Scheme */}
                <div className="mb-12">
                    <h2 className="text-xl font-semibold text-[#1DB954] mb-4">
                        Color Scheme
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {colors.map((color, index) => (
                            <div
                                key={index}
                                className="p-5 bg-[#1C1C1C] rounded-md shadow-md hover:shadow-lg transition"
                            >
                                <div
                                    className="w-full h-16 rounded-md mb-4"
                                    style={{ backgroundColor: color.code }}
                                ></div>
                                <p className="text-sm text-gray-400">{color.name}</p>
                                <p className="text-sm text-[#1DB954]">{color.code}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Fonts */}
                <div>
                    <h2 className="text-xl font-semibold text-[#1DB954] mb-4">
                        Fonts
                    </h2>
                    <ul className="space-y-2">
                        {fonts.map((font, index) => (
                            <li
                                key={index}
                                className="bg-[#1C1C1C] p-4 rounded-md shadow-md hover:shadow-lg transition text-sm text-gray-400"
                            >
                                {font}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default Moodboard;
