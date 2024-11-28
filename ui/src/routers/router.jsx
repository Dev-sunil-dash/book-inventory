import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from "../App";
import Home from "../components/home/Home";
import NotFoundPage from "../components/reusable-components/NotFoundPage";
import Shop from "../components/shop/Shop";
import About from "../components/about/About";
import Blog from "../components/blog/Blog";
import SingleBook from "../components/shop/SingleBook";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "*",
                element: <NotFoundPage/>,
            },
            {
                path: "shop",
                element: <Shop />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "blog",
                element: <Blog />,
            },
            {
                path: "books/:id",
                element: <SingleBook />,
                loader: (({params}) =>  fetch(`http://localhost:8000/books/${params.id}`))
            }
        ],
    },
]);

export default router;