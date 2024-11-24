import React from "react";

const Storyboard = () => {
    return (
        <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center">
            {/* Storyboard Section */}
            <section className="container mx-auto px-6 lg:px-20 py-16">
                <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">
                    PodFuse Storyboard
                </h1>
                <div className="flex justify-center">
                    <img
                        src="/storyboard/storyboard.png"
                        alt="PodFuse Storyboard"
                        className="w-full max-w-3xl rounded-lg shadow-lg"
                    />
                </div>
            </section>
        </div>
    );
};

export default Storyboard;
