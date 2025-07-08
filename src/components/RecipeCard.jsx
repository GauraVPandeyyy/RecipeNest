import { Link } from "react-router-dom";

const RecipeCard = ({ value }) => {
  const {
    id,
    image,
    title,
    description,
    chef,
    category
  } = value;

  return (
    <Link
      to={`/recipes/details/${id}`}
      className="block w-full sm:w-[300px] bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:scale-[1.03] transition duration-300 overflow-hidden"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-[200px] object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <div className="text-sm text-orange-600 font-medium mb-1">{category}</div>
        <small className="text-gray-500">By {chef}</small>
        <p className="text-gray-600 text-sm mt-2 line-clamp-3">
          {description}
        </p>
        <span className="text-blue-500 text-sm inline-block mt-2">View More →</span>
      </div>
    </Link>
  );
};

export default RecipeCard;
