import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Ensure react-router-dom is installed

const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    useEffect(() => {
        if (isModalOpen) {
            // Load HubSpot form script dynamically
            const script = document.createElement("script");
            script.src = "//js.hsforms.net/forms/embed/v2.js";
            script.async = true;
            script.onload = () => {
                if (window.hbspt) {
                    window.hbspt.forms.create({
                        portalId: "5688825",
                        formId: "a93c3296-67f0-444d-aa89-9eda1f927394",
                        target: "#hubspotForm",
                    });
                }
            };
            document.body.appendChild(script);
        }
    }, [isModalOpen]);

    return (
        <div className="bg-[#121212] text-[#EDEDED] font-sans">
            {/* Hero Section */}
            <section className="relative bg-[#121212] text-white py-16">
                <div className="container mx-auto px-6 lg:px-20">
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                        <div className="max-w-lg text-center lg:text-left">
                            <h1 className="text-4xl lg:text-6xl font-bold leading-tight tracking-tight">
                                Your Podcasts, <span className="text-[#1DB954]">Simplified</span>
                            </h1>
                            <p className="mt-4 text-lg text-gray-400">
                                All your premium podcasts in one place. Automated, seamless, and effortless.
                            </p>
                            <Link
                                to="/research"
                                className="mt-6 inline-block px-5 py-2 bg-[#1DB954] text-[#121212] font-medium rounded-md shadow-sm hover:shadow-md hover:bg-[#15803D] transition duration-300"
                            >
                                Learn More
                            </Link>
                        </div>
                        <img
                            src="podfusemockup.png"
                            alt="PodFuse Mockup"
                            className="mt-8 lg:mt-0 rounded-lg shadow-md max-w-md"
                        />
                    </div>
                </div>
            </section>

            {/* Key Features Section */}
            <section className="bg-[#181818] py-12">
                <div className="container mx-auto px-6 lg:px-20">
                    <h2 className="text-3xl font-bold text-center text-white">
                        Why Choose PodFuse
                    </h2>
                    <div className="mt-10 grid gap-8 lg:grid-cols-3">
                        {[
                            {
                                title: "Automated Syncing",
                                description:
                                    "Directly fetch and sync premium feeds from your Patreon account.",
                                icon: "📡",
                            },
                            {
                                title: "Unified Library",
                                description: "Organize all your podcasts—premium and free—in one feed.",
                                icon: "📦",
                            },
                            {
                                title: "Seamless Integration",
                                description: "Effortlessly connect with apps like Overcast and PocketCasts.",
                                icon: "🔗",
                            },
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className="p-5 bg-[#282828] rounded-md shadow-sm hover:shadow-md transition duration-300"
                            >
                                <div className="text-3xl text-[#1DB954]">{feature.icon}</div>
                                <h3 className="mt-3 text-lg font-semibold text-white">
                                    {feature.title}
                                </h3>
                                <p className="mt-2 text-gray-400 text-sm">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Meet the Creator Section */}
            <section className="bg-[#121212] py-12">
                <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center">
                    <img
                        src="https://www.iamsdawson.com/hubfs/20180303_Shaun__Mark%20Luebbers__13157.jpg"
                        alt="Shaun Dawson"
                        className="w-48 h-48 rounded-full shadow-lg lg:mr-12"
                    />
                    <div className="mt-8 lg:mt-0 text-center lg:text-left">
                        <h3 className="text-3xl font-bold text-[#1DB954]">
                            Meet the Creator: Shaun Dawson
                        </h3>
                        <p className="mt-4 text-gray-400">
                            <strong>Role:</strong> UX Designer
                        </p>
                        <p className="mt-2 text-gray-400">
                            <strong>Contact:</strong>{" "}
                            <a
                                href="mailto:sdawson@fiu.edu"
                                className="text-blue-500 hover:underline"
                            >
                                sdawson@fiu.edu
                            </a>
                        </p>
                        <p className="mt-4 text-gray-400">
                            Shaun is passionate about streamlining user experiences and solving real-world
                            problems with tech. They built PodFuse from the ground up to simplify podcast
                            listening for everyone.
                        </p>
                    </div>
                </div>
            </section>

            {/* Call-to-Action Section */}
            <section className="bg-[#1DB954] text-[#121212] py-14">
                <div className="container mx-auto px-6 lg:px-20 text-center">
                    <h2 className="text-3xl font-bold tracking-tight">
                        Ready to Test PodFuse?
                    </h2>
                    <p className="mt-3 text-md text-[#121212] opacity-80">
                        Join our exclusive testing group and help shape the future of podcast listening.
                    </p>
                    <button
                        onClick={openModal}
                        className="mt-6 px-5 py-2 bg-[#121212] text-white font-medium rounded-md shadow-sm hover:shadow-md hover:bg-[#15803D] transition duration-300"
                    >
                        Sign Up to Become a Tester
                    </button>
                </div>
            </section>

            {/* Modal Overlay */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    onClick={closeModal}
                >
                    <div
                        className="bg-[#282828] text-[#EDEDED] p-6 rounded-lg shadow-lg relative w-full max-w-3xl max-h-[80vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={closeModal}
                            className="absolute top-3 right-3 text-white hover:text-gray-400"
                        >
                            ✕
                        </button>
                        <h2 className="text-xl font-semibold text-[#1DB954] mb-4">
                            Join the PodFuse Testing Group
                        </h2>
                        <p className="text-sm text-gray-400 mb-4">
                            Fill out the form below to get started.
                        </p>
                        <div id="hubspotForm" className="bg-[#121212] p-4 rounded-md shadow-inner"></div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;
