import { createContext, useEffect, useState } from "react";

export const RecipeContext = createContext(null);

const RecipeProvider = (props) => {
    const [data, setData] = useState([]);
    console.log(data);

    useEffect(()=>{
        // const recipes = JSON.parse(localStorage.getItem("recipes"));
        // setData(Array.isArray(recipes) ? recipes : []);
        setData(JSON.parse(localStorage.getItem("recipes")) || []);
    },[]);

    return (
        <RecipeContext.Provider value={{ data, setData }}>
            {props.children}
        </RecipeContext.Provider>
    )
}

export default RecipeProvider;

// {
//         "id": 1,
//         "title": "Classic Margherita Pizza",
//         "ingredients": "Pizza dough Fresh basil leaves Olive oil Salt and pepper to taste"
//         ,
//         "description": "Preheat the oven to 475°F (245°C) Roll out the pizza dough and spread tomato sauce evenly"
//         ,
//         "image": "https://cdn.dummyjson.com/recipe-images/1.webp",
//         "chef": "Sanjeev kapoor",
//         "category": "Lunch",
//         "instruction": "Maggie , salt"

//  },