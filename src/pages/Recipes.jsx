import { useContext } from "react";
import { RecipeContext } from "../context/RecipeProvider";
import RecipeCard from "../components/RecipeCard";
import { Link } from "react-router-dom";

const Recipes = () => {
  const { data } = useContext(RecipeContext);

  return (
    <div className="min-h-screen bg-gray-50 px-6 md:px-16 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-orange-500 mb-6">
        All Recipes
      </h1>

      {data?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {data.map((recipe) => (
            <RecipeCard key={recipe.id} value={recipe} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-600 text-lg mt-20">
          <p className="mb-2">😔 No recipes found.</p>
          <p>
            Want to add some?{" "}
            <Link
              to="/create"
              className="text-orange-500 hover:underline font-medium"
            >
              Create a new recipe
            </Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default Recipes;
