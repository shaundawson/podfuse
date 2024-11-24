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
];

const References = () => {
    return (
        <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center">
            <section className="container mx-auto px-6 lg:px-20 py-16">
                <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">
                    References
                </h1>
                <ul className="space-y-4 text-gray-700">
                    {references.map((ref, index) => (
                        <li key={index} className="flex items-start space-x-2">
                            <span className="font-bold">{index + 1}.</span>
                            <div>
                                <p className="inline">{ref.text}</p>{" "}
                                <a
                                    href={ref.link}
                                    className="text-blue-500 hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {ref.link}
                                </a>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default References;
