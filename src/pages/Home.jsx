import { Link } from "react-router-dom"
import { useState } from "react"


const Home = () => {
    // const [data, setData] = useState([]);
    // const [loading, setLoading] = useState(false);

    // const fetchData = async () => {
    //     setLoading(true);
    //     try {
    //         const response = await axios.get("/posts");
    //         setData(response.data);
    //     } catch (error) {
    //         alert("Failed to fetch data.");
    //     }
    //     setLoading(false);
    // };

    return (
        <section className="min-h-screen bg-white text-gray-800 px-6 md:px-20 py-16">
           
            <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-orange-500 mb-4">
                    Welcome to RecipeNest 🍳
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Your personal recipe manager — create, update, explore, and save your favorite dishes.
                    Whether you're a home cook or a food blogger, RecipeNest keeps all your recipes organized and accessible.
                </p>
                <div className="mt-6">
                    <a
                        href="/create"
                        className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full transition"
                    >
                        Create Your First Recipe
                    </a>
                </div>
            </div>

            {/* Features Section */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
                <div className="p-6 rounded-lg shadow hover:shadow-lg transition border">
                    <h3 className="text-xl font-bold text-orange-600 mb-2">📝 Create Recipes</h3>
                    <p className="text-gray-600">Quickly add recipes with ingredients, instructions, chef name, and images.</p>
                </div>
                <div className="p-6 rounded-lg shadow hover:shadow-lg transition border">
                    <h3 className="text-xl font-bold text-orange-600 mb-2">📚 Manage & Edit</h3>
                    <p className="text-gray-600">Update or delete any recipe anytime. Keep your cookbook always fresh and accurate.</p>
                </div>
                <div className="p-6 rounded-lg shadow hover:shadow-lg transition border">
                    <h3 className="text-xl font-bold text-orange-600 mb-2">❤️ Favorites</h3>
                    <p className="text-gray-600">Mark recipes as favorites for easy access to your go-to meals and snacks.</p>
                </div>
            </div>

            {/* Call to Action */}
            <div className="mt-20 text-center">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ready to build your personal recipe book?</h2>
                <a
                    href="/recipes"
                    className="inline-block text-orange-500 border border-orange-500 hover:bg-orange-50 px-6 py-2 rounded-full transition"
                >
                    Browse Recipes
                </a>
            </div>
        </section>
    );


};

export default Home;
