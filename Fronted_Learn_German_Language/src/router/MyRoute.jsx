import About from "../pages/about/About";
import Blog from "../pages/blog/Blog";
import Contact from "../pages/contact/Contact";
import { Home } from "../pages/home/Home";
import Learn from "../pages/learn/Learn";
import {createBrowserRouter} from "react-router-dom";


const MyRoute = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "about",
        element: <About/>
    },
    {
        path: "learn",
        element: <Learn/>
    },
    {
        path: "blog",
        element: <Blog/>
    },
    {
        path: "contact",
        element: <Contact/>
    }
]);

export default MyRoute;