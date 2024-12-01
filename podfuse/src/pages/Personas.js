import React from "react";

const personas = [
    {
        name: "Nandi, the Podcast Addict (They/Them)",
        age: 36,
        occupation: "Product Manager",
        location: "New York City",
        techSavviness: "Moderate",
        image:
            "https://media.licdn.com/dms/image/v2/D5603AQELoTdsLRbOrQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1715619884815?e=1735171200&v=beta&t=P73LaPYcE9HEOZKHEQ-3OFXhFVWU5o28HmjaZFWE5As",
        backStory:
            "Nandi is a busy professional who spends a lot of time commuting. Podcasts are their main source of entertainment and information, but they get frustrated managing premium ad-free content manually. They support multiple creators on Patreon and love discovering new shows in their niche areas of interest, like tech and self-improvement.",
        goals: [
            "Streamline podcast listening experience",
            "Access premium ad-free content easily",
            "Discover new podcasts without hassle",
        ],
        frustrations: [
            "Finds importing XML files tedious",
            "Wants a single app to manage all podcasts",
        ],
        motivations: [
            "Save time and effort in managing podcasts",
            "Stay updated on their favorite shows without interruptions",
        ],
        idealExperience:
            "Nandi wants a solution that connects directly to their Patreon account and syncs all their premium shows automatically, so they can enjoy podcasts uninterrupted, even during commutes.",
    },
    {
        name: "Tracy, the Podcast Newbie (She/Her)",
        age: 58,
        occupation: "High School Teacher",
        location: "Austin, TX",
        techSavviness: "Low",
        image:
            "https://media.licdn.com/dms/image/v2/C4E03AQFw266wGD2mJg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516448377955?e=1736985600&v=beta&t=rS37Onn8UVCRlZe-zrDeUDOcHz-g71eX8u6i1cvnG9g",
        backStory:
            "Tracy recently started listening to podcasts recommended by her friends. She isn’t very familiar with managing apps or importing content and often finds herself struggling with basic tech tasks. While she enjoys listening to premium podcasts on Patreon, the process of manually importing files is frustrating and confusing for her.",
        goals: [
            "Easily access premium podcasts without technical barriers",
            "Have everything in one place to avoid switching apps",
            "Enjoy podcasts during her downtime without interruptions",
        ],
        frustrations: [
            "Struggles with technology, especially managing different podcast apps",
            "Finds the process of manually importing XML files overwhelming",
        ],
        motivations: [
            "Find a simple, easy-to-use solution for podcast management",
            "Have uninterrupted access to her favorite podcasts",
        ],
        idealExperience:
            "Tracy wants a user-friendly solution that automatically organizes and syncs all her podcasts without any need for manual imports. She needs something intuitive that doesn’t require much tech knowledge.",
    },
];

const Personas = () => {
    return (
        <div className="bg-[#121212] min-h-screen text-[#EDEDED]">
            <div className="container mx-auto px-6 lg:px-20 py-16">
                {/* Title and Subheading */}
                <div className="text-center mb-12">
                    <h1 className="text-2xl font-extrabold text-[#1DB954]">
                        Understanding Our Users
                    </h1>
                    <p className="text-sm text-gray-400 mt-2">
                        Meet the diverse personas who inspired the creation of PodFuse.
                    </p>
                </div>

                {/* Personas Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {personas.map((persona, index) => (
                        <div
                            key={index}
                            className="bg-[#1C1C1C] p-6 rounded-lg shadow-md hover:shadow-lg transition"
                        >
                            {/* Persona Header */}
                            <div className="flex items-center mb-6">
                                <img
                                    src={persona.image}
                                    alt={persona.name}
                                    className="w-20 h-20 rounded-full shadow-md mr-6"
                                />
                                <div>
                                    <h3 className="text-lg font-semibold text-[#1DB954]">
                                        {persona.name}
                                    </h3>
                                    <p className="text-sm text-gray-400">
                                        {persona.occupation} | {persona.location}
                                    </p>
                                </div>
                            </div>

                            {/* Details */}
                            <div className="space-y-4 text-sm text-gray-400">
                                <div>
                                    <strong className="text-[#1DB954]">Age:</strong> {persona.age}
                                </div>
                                <div>
                                    <strong className="text-[#1DB954]">Tech-Savviness:</strong>{" "}
                                    {persona.techSavviness}
                                </div>
                                <div>
                                    <strong className="text-[#1DB954]">Back Story:</strong>{" "}
                                    {persona.backStory}
                                </div>
                                <div>
                                    <strong className="text-[#1DB954]">Goals:</strong>
                                    <ul className="list-disc pl-6">
                                        {persona.goals.map((goal, i) => (
                                            <li key={i}>{goal}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <strong className="text-[#1DB954]">Frustrations:</strong>
                                    <ul className="list-disc pl-6">
                                        {persona.frustrations.map((frustration, i) => (
                                            <li key={i}>{frustration}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <strong className="text-[#1DB954]">Motivations:</strong>
                                    <ul className="list-disc pl-6">
                                        {persona.motivations.map((motivation, i) => (
                                            <li key={i}>{motivation}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <strong className="text-[#1DB954]">Ideal Experience:</strong>{" "}
                                    {persona.idealExperience}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Personas;
