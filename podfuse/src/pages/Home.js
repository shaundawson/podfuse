import React from "react";

const Home = () => {
    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20">
                <div className="container mx-auto px-6 lg:px-20">
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                        <div className="max-w-xl text-center lg:text-left">
                            <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight">
                                Simplify Your Podcast Listening with <span className="text-yellow-400">PodFuse</span>
                            </h1>
                            <p className="mt-6 text-lg text-gray-200">
                                Manage your premium ad-free podcasts seamlessly in one place. Say goodbye to manual imports and hello to uninterrupted entertainment.
                            </p>
                            <button className="mt-8 px-6 py-3 bg-yellow-400 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-yellow-300 transition">
                                Get Started
                            </button>
                        </div>
                        <img
                            src="https://source.unsplash.com/600x400/?podcast,technology"
                            alt="Podcast illustration"
                            className="mt-10 lg:mt-0 rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </section>

            {/* Key Features Section */}
            <section className="container mx-auto px-6 lg:px-20 py-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center">
                    Key Features
                </h2>
                <p className="text-center text-gray-600 mt-4">
                    Explore what makes PodFuse the ultimate tool for podcast enthusiasts.
                </p>
                <div className="mt-12 grid gap-8 lg:grid-cols-3">
                    {[
                        {
                            title: "Automated Feed Fetching",
                            description:
                                "Connect directly to your Patreon account and retrieve premium podcast feeds without any manual downloads.",
                            icon: "📡",
                        },
                        {
                            title: "Consolidated Podcast Feed",
                            description:
                                "Combine all your premium ad-free content into a single, easy-to-access feed.",
                            icon: "📦",
                        },
                        {
                            title: "Seamless App Integration",
                            description:
                                "Effortlessly import your unified feed into popular apps like Overcast and PocketCasts.",
                            icon: "🔗",
                        },
                        {
                            title: "Automatic Updates",
                            description:
                                "Sync new episodes automatically without the hassle of re-importing feeds.",
                            icon: "⚡",
                        },
                        {
                            title: "User-Friendly Interface",
                            description:
                                "Enjoy a sleek, intuitive interface that simplifies your podcast experience.",
                            icon: "✨",
                        },
                        {
                            title: "Secure and Reliable",
                            description:
                                "Rest assured with secure integration and uninterrupted podcast listening.",
                            icon: "🔒",
                        },
                    ].map((feature, index) => (
                        <div
                            key={index}
                            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition"
                        >
                            <div className="text-4xl">{feature.icon}</div>
                            <h3 className="mt-4 text-xl font-semibold text-gray-800">
                                {feature.title}
                            </h3>
                            <p className="mt-2 text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* About Section */}
            <section className="bg-gray-100 py-16">
                <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center">
                    <img
                        src="https://www.iamsdawson.com/hubfs/20180303_Shaun__Mark%20Luebbers__13157.jpg"
                        alt="Shaun Dawson"
                        className="w-48 h-48 rounded-full shadow-lg lg:mr-12"
                    />
                    <div className="mt-8 lg:mt-0">
                        <h3 className="text-3xl font-bold text-gray-900">
                            Meet the Creator: Shaun Dawson
                        </h3>
                        <p className="mt-4 text-gray-700">
                            <strong>Role:</strong> UX Designer
                        </p>
                        <p className="mt-2 text-gray-700">
                            <strong>Contact:</strong>{" "}
                            <a
                                href="mailto:sdawson@fiu.edu"
                                className="text-blue-500 hover:underline"
                            >
                                sdawson@fiu.edu
                            </a>
                        </p>
                        <p className="mt-4 text-gray-600">
                            Shaun is passionate about streamlining user experiences and
                            solving real-world problems with tech. He built PodFuse from the
                            ground up to simplify podcast listening for everyone.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-indigo-600 text-white py-16">
                <div className="container mx-auto px-6 lg:px-20 text-center">
                    <h2 className="text-4xl font-extrabold">Ready to Get Started?</h2>
                    <p className="mt-4 text-lg text-gray-200">
                        Join thousands of podcast lovers and simplify your premium podcast experience today.
                    </p>
                    <button className="mt-6 px-8 py-3 bg-yellow-400 text-indigo-900 font-bold rounded-lg shadow-lg hover:bg-yellow-300 transition">
                        Sign Up Now
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Home;
