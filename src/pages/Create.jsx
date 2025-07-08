import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { RecipeContext } from "../context/RecipeProvider";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const { register, handleSubmit, reset } = useForm();
  const { data, setData } = useContext(RecipeContext);
  const navigate = useNavigate();

  const submitHandler = (newRecipe) => {
    newRecipe.id = nanoid();
    const updatedData = [...data, newRecipe];
    setData(updatedData);
    localStorage.setItem("recipes", JSON.stringify(updatedData));
    toast.success("New Recipe Created!");
    reset();
    navigate("/recipes");
  };

  return (
    <div className="min-h-screen bg-white px-6 md:px-20 py-12 text-gray-800">
      <h1 className="text-3xl font-bold text-orange-500 mb-6">Create a New Recipe</h1>
      
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="grid gap-6 max-w-2xl w-full"
      >
        <input
          {...register("image")}
          type="text"
          placeholder="Image URL"
          className="border-b border-gray-300 focus:outline-none focus:border-orange-500 py-2 text-sm"
        />

        <input
          {...register("title")}
          type="text"
          placeholder="Recipe Title"
          className="border-b border-gray-300 focus:outline-none focus:border-orange-500 py-2 text-sm"
        />

        <input
          {...register("chef")}
          type="text"
          placeholder="Chef Name"
          className="border-b border-gray-300 focus:outline-none focus:border-orange-500 py-2 text-sm"
        />

        <textarea
          {...register("description")}
          placeholder="Short Description"
          rows="3"
          className="border-b border-gray-300 focus:outline-none focus:border-orange-500 py-2 text-sm resize-none"
        />

        <textarea
          {...register("ingredients")}
          placeholder="Ingredients (comma-separated)"
          rows="3"
          className="border-b border-gray-300 focus:outline-none focus:border-orange-500 py-2 text-sm resize-none"
        />

        <textarea
          {...register("instruction")}
          placeholder="Instructions (comma-separated)"
          rows="3"
          className="border-b border-gray-300 focus:outline-none focus:border-orange-500 py-2 text-sm resize-none"
        />

        <select
          {...register("category")}
          className="border-b border-gray-300 focus:outline-none focus:border-orange-500 py-2 text-sm text-gray-500"
        >
          <option value="">Select Category</option>
          <option value="Dinner">Dinner</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
        </select>

        <button
          type="submit"
          className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition-all"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default Create;
