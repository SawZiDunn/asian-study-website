import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Home = ({ topics }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 text-gray-900">
            {/* Hero Section - Responsive Height */}
            <div className="relative">
                <img
                    src="/overview.jpg"
                    alt="Saudi Arabia"
                    className="w-full h-64 md:h-96 object-cover brightness-75 transition-all duration-300"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
                    <h1 className="text-3xl md:text-5xl font-bold text-shadow">
                        Discover Saudi Arabia
                    </h1>
                    <p className="mt-2 md:mt-4 text-base md:text-lg max-w-xl text-shadow">
                        Explore the history, culture, and beauty of Saudi Arabia
                        through these video presentations.
                    </p>
                    <button className="mt-4 md:mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded-full transition-all duration-300 transform hover:scale-105">
                        Start Exploring
                    </button>
                </div>
            </div>

            {/* Topics Section */}
            <div className="container mx-auto px-4 py-8 md:py-12">
                <h2 className="text-2xl md:text-3xl font-semibold text-center mb-4 md:mb-8">
                    Featured Topics
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                    {topics.map((topic) => (
                        <Link
                            key={topic.id}
                            to={`/topic/${topic.id}`}
                            className="block bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
                        >
                            <div className="relative">
                                <img
                                    src={`/${topic.image}`}
                                    alt={topic.title}
                                    className="w-full h-40 md:h-48 object-cover"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg md:text-xl font-bold text-blue-800">
                                    {topic.title}
                                </h3>
                                <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                                    {topic.description.slice(
                                        0,
                                        isMobile ? 100 : 150
                                    ) +
                                        (topic.description.length >
                                        (isMobile ? 100 : 150)
                                            ? "..."
                                            : "")}
                                </p>
                                <div className="mt-4 flex justify-end items-center">
                                    <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">
                                        Learn More
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Additional Section */}
                <div className="mt-12 bg-white rounded-lg shadow-md p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-bold text-center mb-4">
                        About My Project
                    </h3>
                    <p className="text-gray-700">
                        This website is dedicated solely to educational
                        purposes, offering accurate and engaging insights into
                        Saudi Arabia’s rich culture, history, and modern
                        developments through video presentations crafted with
                        expert knowledge. All images featured are sourced from
                        Google.
                    </p>
                    <div className="mt-6 flex flex-col md:flex-row justify-center gap-4">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
                            Contact Us
                        </button>
                        <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
