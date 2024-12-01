import React from "react";

const Flowchart = () => {
    return (
        <div className="bg-[#121212] min-h-screen text-[#EDEDED] font-sans">
            <section className="container mx-auto px-6 lg:px-20 py-16">
                {/* Title Section */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-[#1DB954]">
                        PodFuse Flowchart
                    </h1>
                    <p className="mt-2 text-sm lg:text-md text-gray-400">
                        Visualizing the architecture and functionality of PodFuse.
                    </p>
                </div>

                {/* Flowchart Image */}
                <div className="flex flex-col items-center">
                    <img
                        src="/flowchart/PodFuseFlowChart.png"
                        alt="PodFuse Flowchart"
                        className="w-3/4 rounded-md shadow-lg hover:shadow-xl transition duration-300 mb-6"
                    />
                    <a
                        href="/flowchart/PodFuseFlowChart.png"
                        download="PodFuseFlowchart.png"
                        className="px-4 py-2 bg-[#1DB954] text-[#121212] font-medium rounded-md shadow-sm hover:shadow-md hover:bg-[#15803D] transition duration-300"
                    >
                        Download Full Image
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Flowchart;
