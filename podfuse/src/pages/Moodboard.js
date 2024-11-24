import React from "react";

const Moodboard = () => {
    return (
        <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center">
            <section className="container mx-auto px-6 lg:px-20 py-16">
                <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">
                    PodFuse Moodboard
                </h1>
                <div className="flex justify-center">
                    <img
                        src="/moodboard/PodFuseMoodboard.png"
                        alt="PodFuse Moodboard"
                        className="w-full max-w-3xl rounded-lg shadow-lg"
                    />
                </div>
            </section>
        </div>
    );
};

export default Moodboard;
