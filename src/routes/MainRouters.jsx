import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Recipes from "../pages/Recipes"
import Create from "../pages/Create"
import SingleRecipe from "../components/SingleRecipe"
import PageNotFound from "../pages/PageNotFound"
import Fav from "../pages/Fav"


const MainRouters = () => {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/recipes/details/:id" element={<SingleRecipe />} />
            <Route path="/create" element={<Create />} />
            <Route path="/favorite" element= {<Fav />} />
            <Route path="/*" element={<PageNotFound />} />
        </Routes>
    )
}

export default MainRouters;