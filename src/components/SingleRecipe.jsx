import { useNavigate, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { RecipeContext } from "../context/RecipeProvider";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SingleRecipe = () => {
  const [favorite, setFavorite] = useState(() => JSON.parse(localStorage.getItem("fav")) || []);
  const { data, setData } = useContext(RecipeContext);
  const params = useParams();
  const navigate = useNavigate();

  const recipe = data.find(recipe => String(recipe.id) === String(params.id));

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Recipe not found.
      </div>
    );
  }

  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: recipe.title,
      image: recipe.image,
      chef: recipe.chef,
      ingredients: recipe.ingredients,
      description: recipe.description,
      category: recipe.category,
    }
  });

  const updateHandler = (updatedRecipe) => {
    const index = data.findIndex(recipe => String(recipe.id) === String(params.id));
    const updatedData = [...data];
    updatedData[index] = { ...updatedData[index], ...updatedRecipe };
    setData(updatedData);
    localStorage.setItem("recipes", JSON.stringify(updatedData));
    toast.success("Recipe Updated!");
  };

  const deleteHandler = () => {
    const filteredData = data.filter(recipe => String(recipe.id) !== String(params.id));
    setData(filteredData);
    localStorage.setItem("recipes", JSON.stringify(filteredData));
    toast.success("Recipe Deleted!");
    navigate("/recipes");
    unfavHandler(); // Remove from favorites if exists
  };

  const favHandler = () => {
    if (!favorite.find(fav => fav.id === recipe.id)) {
      const updatedFav = [...favorite, recipe];
      setFavorite(updatedFav);
      localStorage.setItem("fav", JSON.stringify(updatedFav));
    }
  };

  const unfavHandler = () => {
    const updatedFav = favorite.filter(fav => fav.id !== recipe.id);
    setFavorite(updatedFav);
    localStorage.setItem("fav", JSON.stringify(updatedFav));
  };

  const isFav = favorite.find(fav => String(fav.id) === String(recipe.id));

  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 md:px-20 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      
      {/* LEFT PANEL */}
      <div className="relative">
        <img src={recipe.image} alt={recipe.title} className="w-full h-[300px] object-cover rounded-xl shadow" />
        
        <button
          onClick={isFav ? unfavHandler : favHandler}
          className={`absolute top-4 right-4 text-2xl ${
            isFav ? "text-red-500" : "text-gray-400"
          } hover:scale-110 transition`}
        >
          <i className={`ri-heart${isFav ? "-fill" : "-line"}`}></i>
        </button>

        <div className="mt-6 space-y-3">
          <h1 className="text-3xl font-bold text-orange-500">{recipe.title}</h1>
          <p className="text-sm text-gray-500">By <strong>{recipe.chef}</strong></p>
          <p><strong>Category:</strong> {recipe.category}</p>
          <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
          <p><strong>Description:</strong> {recipe.description}</p>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div>
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Edit Recipe</h2>
        <form onSubmit={handleSubmit(updateHandler)} className="space-y-4">
          <input {...register("image")} type="text" placeholder="Image URL" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-orange-500" />
          <input {...register("title")} type="text" placeholder="Title" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-orange-500" />
          <input {...register("chef")} type="text" placeholder="Chef Name" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-orange-500" />
          <input {...register("description")} type="text" placeholder="Short Description" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-orange-500" />
          <input {...register("ingredients")} type="text" placeholder="Ingredients (comma-separated)" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-orange-500" />
          <select {...register("category")} className="w-full border-b border-gray-300 py-2 text-gray-500 focus:outline-none focus:border-orange-500">
            <option value="Dinner">Dinner</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
          </select>

          <div className="flex gap-4 mt-6">
            <button type="submit" className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition">
              Update
            </button>
            <button
              type="button"
              onClick={deleteHandler}
              className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition"
            >
              Delete
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SingleRecipe;
