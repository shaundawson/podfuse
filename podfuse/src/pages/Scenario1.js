import React from "react";
import Slideshow from "../components/Slideshow.js"

const images = [
    "./scenarios/scenario_1/scene1.png",
    "./scenarios/scenario_1/scene2.png",
    "./scenarios/scenario_1/scene3.png",
    "./scenarios/scenario_1/scene4.png",
    "./scenarios/scenario_1/scene5.png",
];

const Scenario1 = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="container mx-auto px-6 lg:px-20 py-16">
                <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
                    Scenario 1
                </h1>
                <Slideshow images={images} />
            </div>
        </div>
    );
};

export default Scenario1;
