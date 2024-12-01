import React from "react";

const Prototype = () => {
    return (
        <div className="bg-[#121212] min-h-screen text-[#EDEDED] flex items-center justify-center">
            <div className="container mx-auto px-6 lg:px-20 py-16">
                {/* Title and Subheading */}
                <div className="text-center mb-12">
                    <h1 className="text-2xl font-extrabold text-[#1DB954]">
                        PodFuse Prototype
                    </h1>
                    <p className="text-sm text-gray-400 mt-2">
                        Experience the interactive design that brings PodFuse to life.
                    </p>
                </div>

                {/* Prototype Embed */}
                <div className="bg-[#1C1C1C] p-5 rounded-md shadow-md hover:shadow-lg transition duration-300">
                    <h2 className="text-xl font-semibold text-center mb-3 text-[#EDEDED]">
                        Explore the Design
                    </h2>
                    <p className="text-gray-400 text-center text-sm mb-5">
                        Interact with the PodFuse prototype below or view it directly on Figma.
                    </p>
                    <div className="relative w-full flex justify-center rounded-md overflow-hidden shadow-lg">
                        <iframe
                            style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                            width="800"
                            height="450"
                            src="https://embed.figma.com/proto/cMG0xt6e4pLoxO9qcny8op/Patreon-Auth-Login?node-id=6-2&node-type=frame&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=6%3A2&embed-host=share"
                            allowFullScreen
                            title="PodFuse Prototype"
                            className="rounded-md"
                        ></iframe>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-8">
                    <a
                        href="https://www.figma.com/proto/cMG0xt6e4pLoxO9qcny8op/Patreon-Auth-Login?node-id=6-2&node-type=frame&t=cEVHcpts97G0vRqK-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=6%3A2"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 bg-[#1DB954] text-gray-900 font-semibold rounded-md shadow-md hover:bg-[#15803D] transition"
                    >
                        Open in Figma
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Prototype;
