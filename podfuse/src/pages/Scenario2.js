import React from "react";
import Slideshow from "../components/Slideshow.js";

const images = [
    "./scenarios/scenario_2/scene1.png",
    "./scenarios/scenario_2/scene2.png",
    "./scenarios/scenario_2/scene3.png",
    "./scenarios/scenario_2/scene4.png",
    "./scenarios/scenario_2/scene5.png",
];

const Scenario2 = () => {
    return (
        <div className="bg-[#121212] min-h-screen text-[#EDEDED]">
            <div className="container mx-auto px-6 lg:px-20 py-16">
                <h1 className="text-4xl font-bold text-center text-[#1DB954] mb-12">
                    Scenario 2
                </h1>
                <Slideshow images={images} />
            </div>
        </div>
    );
};

export default Scenario2;
