import { useParams, Link } from "react-router-dom";

const Topic = ({ topics }) => {
    const { id } = useParams();
    const topic = topics.find((t) => t.id === parseInt(id));

    if (!topic) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100 text-red-500 text-lg font-semibold">
                Topic not found!
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl flex-grow">
                {/* Title */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-6">
                    {topic.title}
                </h1>

                {/* Image */}
                <div className="w-full mb-6">
                    <img
                        src={`/${topic.image}`}
                        alt={topic.title}
                        className="w-full h-48 sm:h-64 md:h-72 object-cover rounded-xl shadow-md"
                    />
                </div>

                {/* Description */}
                <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-8">
                    {topic.description}
                </p>

                {/* Video */}
                <div className="w-full mb-8 flex justify-center">
                    <div className="w-full sm:w-11/12 md:w-3/4">
                        <iframe
                            className="w-full h-40 sm:h-56 md:h-72 rounded-lg shadow-lg"
                            src={`${topic.video}?autoplay=0&rel=0&modestbranding=1`}
                            title={topic.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

                {/* Back Link */}
                <div className="text-center">
                    <Link
                        to="/"
                        className="inline-block text-blue-600 hover:text-blue-800 font-medium text-base sm:text-lg transition-colors duration-200"
                    >
                        ← Back to Home
                    </Link>
                </div>
            </div>

            {/* Footer Spacing */}
            <div className="py-6 bg-gray-50"></div>
        </div>
    );
};

export default Topic;
