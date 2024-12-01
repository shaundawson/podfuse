import React, { useState } from "react";

const HubSpotFormOverlay = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="bg-[#121212] text-[#EDEDED] font-sans min-h-screen flex items-center justify-center">
            {/* Call-to-Action Section */}
            <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-[#EDEDED]">
                    Ready to Test PodFuse?
                </h2>
                <p className="mt-2 text-sm lg:text-md text-gray-400">
                    Join our exclusive testing group and help shape the future of podcast listening.
                </p>
                <button
                    onClick={openModal}
                    className="mt-6 px-5 py-2 bg-[#1DB954] text-[#121212] font-medium rounded-md shadow-sm hover:shadow-md hover:bg-[#15803D] transition duration-300"
                >
                    Sign Up to Become a Tester
                </button>
            </div>

            {/* Modal Overlay */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    onClick={closeModal} // Close modal when clicking outside of the form
                >
                    <div
                        className="bg-[#282828] p-6 rounded-lg shadow-lg relative w-full max-w-lg"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
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

                        {/* HubSpot Form Embed */}
                        <div>
                            <iframe
                                src="https://share.hsforms.com/your-form-id"
                                title="HubSpot Form"
                                style={{
                                    width: "100%",
                                    height: "400px",
                                    border: "none",
                                }}
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HubSpotFormOverlay;
