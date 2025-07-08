import RecipeCard from "../components/RecipeCard";
import { Link } from "react-router-dom";

const Fav = () => {
  const favorite = JSON.parse(localStorage.getItem("fav")) || [];

  return (
    <div className="min-h-screen bg-white px-6 md:px-16 py-12 text-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold text-orange-500 mb-6">
        Your Favorite Recipes ❤️
      </h1>

      {favorite.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {favorite.map((recipe) => (
            <RecipeCard key={recipe.id} value={recipe} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-600 text-lg mt-20">
          <p className="mb-2">You haven't added any favorite recipes yet.</p>
          <Link
            to="/recipes"
            className="text-orange-500 hover:underline font-medium"
          >
            Start Exploring Recipes →
          </Link>
        </div>
      )}
    </div>
  );
};

export default Fav;
