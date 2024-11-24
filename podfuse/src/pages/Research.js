import React from "react";

const Research = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            <section className="container mx-auto px-6 lg:px-20 py-16">
                <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">
                    Research Behind PodFuse
                </h1>

                <div className="space-y-12">
                    {/* Podcast Industry Growth Section */}
                    <div>
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                            The Rise of Podcasts
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Podcasts have grown exponentially in the past decade, with platforms like
                            Spotify, Apple Podcasts, and Patreon providing spaces for creators to thrive.
                            Premium, ad-free content on platforms such as Patreon has enabled podcasters
                            to directly connect with their audiences and monetize their work. However,
                            this surge in premium podcast availability has created complexities for listeners,
                            requiring manual feed management that disrupts the seamless experience users expect.
                        </p>
                    </div>

                    {/* Challenges and Gaps Section */}
                    <div>
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                            Challenges Faced by Podcast Listeners
                        </h2>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2">
                            <li>
                                <strong>Fragmented Platforms:</strong> Listeners often need to juggle multiple apps to
                                access premium and free podcast feeds, creating a disjointed experience.
                            </li>
                            <li>
                                <strong>Manual Imports:</strong> Managing XML files and importing premium feeds manually
                                can be tedious and confusing, especially for less tech-savvy users.
                            </li>
                            <li>
                                <strong>Subscription Overload:</strong> With no centralized platform to organize premium
                                subscriptions, users struggle to keep track of their favorite shows.
                            </li>
                        </ul>
                    </div>

                    {/* User-Centered Design Section */}
                    <div>
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                            User-Centered Design Approach
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            PodFuse was built with a user-first approach. Research into listener habits,
                            frustrations, and expectations revealed the need for a single platform that
                            integrates premium podcast feeds seamlessly. Personas like "Nandi, the Podcast Addict"
                            and "Tracy, the Podcast Newbie" guided the development to address a wide range of user needs.
                        </p>
                    </div>

                    {/* The PodFuse Solution Section */}
                    <div>
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                            The PodFuse Solution
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            PodFuse simplifies podcast listening by consolidating premium feeds from Patreon and
                            similar platforms into one easy-to-access interface. By automating feed management and
                            syncing new episodes instantly, PodFuse eliminates the manual work, enabling listeners
                            to enjoy uninterrupted entertainment.
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2">
                            <li>
                                <strong>Automatic Sync:</strong> No more manual imports—PodFuse fetches your premium
                                feeds directly from the source.
                            </li>
                            <li>
                                <strong>Unified Feed:</strong> Combines all podcasts, whether free or premium, into a
                                single, accessible library.
                            </li>
                            <li>
                                <strong>Cross-Platform Support:</strong> Works seamlessly with popular apps like Overcast
                                and PocketCasts.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Research;
