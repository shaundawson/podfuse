import React from "react";

const references = [
    {
        text: "Pixton: Comic and Storyboard Builder. Pixton.",
        link: "https://app.pixton.com",
    },
    {
        text: "Canva. Canva Online Design Tool. Canva.",
        link: "https://www.canva.com",
    },
    {
        text: '"Contemplative Portrait of a Man in Toronto." Pexels, uploaded by Saikou, 2023.',
        link: "https://www.pexels.com/photo/contemplative-portrait-of-a-man-in-toronto-29028775/",
    },
    {
        text: '"Woman Wearing a Beige Coat and Headphones Walking in a Street with a Coffee and Phone." Pexels, uploaded by Lucia, 2023.',
        link: "https://www.pexels.com/photo/woman-wearing-a-beige-coat-and-headphones-walking-in-a-street-with-a-coffee-and-phone-20447502/",
    },
    {
        text: '"Close-Up Shot of a Woman Wearing Headphones While Holding to a Steel Handle." Pexels, uploaded by Ketut Subiyanto, 2021.',
        link: "https://www.pexels.com/photo/close-up-shot-of-a-woman-wearing-headphones-while-holding-to-a-steel-handle-6686306/",
    },
    {
        text: '"Man in T-Shirt." Pexels, uploaded by Abhishek Gaur, 2023.',
        link: "https://www.pexels.com/photo/man-in-tshirt-27137377/",
    },
    {
        text: '"A Person Playing Music in Podcast." Pexels, uploaded by Ketut Subiyanto, 2021.',
        link: "https://www.pexels.com/photo/a-person-playing-music-in-podcast-6686443/",
    },
    {
        text: "Figma. Collaborative Interface Design Tool.",
        link: "https://www.figma.com",
    },
    {
        text: "Patreon API Documentation. Patreon Developers.",
        link: "https://docs.patreon.com/#introduction",
    },
];

const References = () => {
    return (
        <div className="bg-[#121212] min-h-screen text-[#EDEDED] flex items-center justify-center">
            <section className="container mx-auto px-6 lg:px-20 py-16">
                {/* Title and Subheading */}
                <div className="text-center mb-10">
                    <h1 className="text-2xl font-extrabold text-[#1DB954]">
                        References
                    </h1>
                    <p className="text-sm text-gray-400 mt-2">
                        Resources and tools used in the development of PodFuse.
                    </p>
                </div>

                {/* References List */}
                <ul className="space-y-6">
                    {references.map((ref, index) => (
                        <li
                            key={index}
                            className="bg-[#1C1C1C] p-5 rounded-md shadow-md hover:shadow-lg transition duration-300"
                        >
                            <p className="text-sm text-gray-400 mb-1">{ref.text}</p>
                            <a
                                href={ref.link}
                                className="text-sm text-[#1DB954] hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {ref.link}
                            </a>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default References;
