import React from "react";

const Research = () => {
    return (
        <div className="bg-[#121212] min-h-screen text-[#EDEDED]">
            <section className="container mx-auto px-6 lg:px-20 py-16">
                {/* Title and Subheading */}
                <div className="text-center mb-12">
                    <h1 className="text-2xl font-extrabold text-[#1DB954]">
                        Research Behind PodFuse
                    </h1>
                    <p className="text-sm text-gray-400 mt-2">
                        A deep dive into the data and insights that shaped the development of PodFuse.
                    </p>
                </div>

                <div className="space-y-8">
                    {/* Podcast Industry Growth Section */}
                    <div className="bg-[#1C1C1C] p-5 rounded-md shadow-md hover:shadow-lg transition duration-300">
                        <h2 className="text-xl font-semibold text-[#EDEDED] mb-3">
                            The Rise of Podcasts
                        </h2>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            Podcasts have exploded in popularity over the last decade, with platforms like Spotify,
                            Apple Podcasts, and Patreon offering creators new ways to connect with their audiences.
                            However, as premium, ad-free content has grown, listeners have faced challenges managing
                            their subscriptions seamlessly. PodFuse aims to simplify this experience by consolidating
                            premium feeds and eliminating manual imports.
                        </p>
                    </div>

                    {/* Challenges and Gaps Section */}
                    <div className="bg-[#1C1C1C] p-5 rounded-md shadow-md hover:shadow-lg transition duration-300">
                        <h2 className="text-xl font-semibold text-[#EDEDED] mb-3">
                            Challenges Faced by Podcast Listeners
                        </h2>
                        <ul className="list-disc pl-5 text-gray-400 space-y-2 text-sm">
                            <li>
                                <strong className="text-[#1DB954]">Fragmented Platforms:</strong> Managing premium and free podcast feeds across multiple apps.
                            </li>
                            <li>
                                <strong className="text-[#1DB954]">Manual Imports:</strong> The hassle of managing XML files, especially for less tech-savvy users.
                            </li>
                            <li>
                                <strong className="text-[#1DB954]">Subscription Overload:</strong> Difficulty tracking premium subscriptions and favorite shows.
                            </li>
                        </ul>
                    </div>

                    {/* Design Evaluation Section */}
                    <div className="bg-[#1C1C1C] p-5 rounded-md shadow-md hover:shadow-lg transition duration-300">
                        <h2 className="text-xl font-semibold text-[#EDEDED] mb-3">
                            Evaluating the PodFuse Prototype
                        </h2>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            To ensure PodFuse delivers on its promise of simplicity and engagement, I conducted a
                            comprehensive design evaluation. This included:
                        </p>
                        <ul className="list-disc pl-5 text-gray-400 space-y-2 text-sm mt-4">
                            <li>
                                A <strong>survey</strong> capturing user feedback on ease of use, engagement, and satisfaction.
                            </li>
                            <li>
                                An <strong>interview</strong> with a product manager and avid podcast enthusiast to uncover pain points and gather feature requests.
                            </li>
                            <li>
                                Statistical analysis of the survey responses to identify key strengths and areas for improvement.
                            </li>
                        </ul>
                        <p className="text-gray-400 leading-relaxed text-sm mt-4">
                            Users praised PodFuse for its intuitive interface, automated syncing, and ability to simplify podcast management. However, feedback highlighted the need for better onboarding and advanced sorting features.
                        </p>
                    </div>

                    {/* Results Visualization Section */}
                    <div className="bg-[#1C1C1C] p-5 rounded-md shadow-md hover:shadow-lg transition duration-300">
                        <h2 className="text-xl font-semibold text-[#EDEDED] mb-3">
                            Survey Results at a Glance
                        </h2>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            Survey participants were asked to rate their experience with PodFuse across multiple categories. Below is a snapshot of the cumulative user feedback gathered from the design evaluation survey.
                        </p>
                        {/* Survey Results Image */}
                        <div className="mt-6 text-center">
                            <img
                                src="/podfuse-survey-results.png"
                                alt="PodFuse Survey Results"
                                className="mx-auto"
                                style={{ width: "50%", height: "auto" }} // Adjust image size
                            />
                        </div>
                    </div>
                    <p className="text-gray-400 leading-relaxed text-sm">
                        Below is a histogram that shows the distribution of scores for each question.
                    </p>
                    {/* Histogram Survey Results Image */}
                    <div className="mt-6 text-center">
                        <img
                            src="/survey-histogram.png"
                            alt="PodFuse Histogram Survey Results"
                            className="mx-auto"
                            style={{ width: "50%", height: "auto" }} // Adjust image size
                        />
                    </div>
                </div>

                {/* Case Study Section */}
                <div className="bg-[#1C1C1C] p-5 rounded-md shadow-md hover:shadow-lg transition duration-300">
                    <h2 className="text-xl font-semibold text-[#EDEDED] mb-3">
                        Case Study: Nandi, the Podcast Addict
                    </h2>
                    <p className="text-gray-400 leading-relaxed text-sm">
                        Meet Nandi, a product manager who relies on podcasts during her commute. While she loves
                        premium shows on Patreon, she often feels frustrated managing multiple feeds and dealing
                        with XML imports. Using PodFuse, Nandi appreciated the automated syncing and intuitive
                        interface, though she suggested adding advanced filtering options for even greater usability.
                    </p>
                </div>

                {/* Conclusion Section */}
                <div className="bg-[#1C1C1C] p-5 rounded-md shadow-md hover:shadow-lg transition duration-300">
                    <h2 className="text-xl font-semibold text-[#EDEDED] mb-3">
                        The Road Ahead for PodFuse
                    </h2>
                    <p className="text-gray-400 leading-relaxed text-sm">
                        PodFuse has already shown great promise in simplifying podcast management. High scores in
                        ease of use and engagement validate the core design, while feedback from surveys and
                        interviews highlights opportunities for further refinement. With plans to improve onboarding,
                        add advanced features, and conduct broader testing, PodFuse continues to evolve as the ultimate
                        tool for podcast enthusiasts.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Research;
