import About from "../pages/About";
import Add from "../pages/Add";
import Basket from "../pages/Basket";
import Contact from "../pages/Contact";
import Detail from "../pages/Detail";
import Gallery from "../pages/Gallery";
import Home from "../pages/Home";
import MainRoot from "../pages/MainRoot";
import Menu from "../pages/Menu";
import Offer from "../pages/Offer";

export const ROUTES = [
    {
    path:'/',
    element:<MainRoot/>,
    children:[
        {
            index:true,
            element:<Home/>
        },
        {
            path:"add",
            element:<Add/>
        },
        {
            path:"basket",
            element:<Basket/>
        },
        {
            path:"offer",
            element:<Offer/>
        },
        {
            path:"menu",
            element:<Menu/>
        },
        {
            path:"gallery",
            element:<Gallery/>
        },
        {
            path:"contact",
            element:<Contact/>
        },
        {
            path:"about",
            element:<About/>
        },
        {
            path:"detail/:id",
            element:<Detail/>
        }
    ]
    }
];
