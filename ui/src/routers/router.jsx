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
import DashboardLayout from "../components/dashboard/DashboardLayout";
import Dashboard from "../components/dashboard/Dashboard";
import UploadBook from "../components/dashboard/UploadBook";
import ManageBooks from "../components/dashboard/ManageBooks";
import EditBook from "../components/dashboard/EditBook";
import SignUp from "../components/dashboard/SignUp";

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
                element: <NotFoundPage />,
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
                loader: (({ params }) => fetch(`http://localhost:8000/books/${params.id}`))
            }
        ],
    },
    {
        path: "/admin/dashboard",
        element: <DashboardLayout />,
        children: [
            {
                path: "/admin/dashboard",
                element: <Dashboard />,
            },
            {
                path: "/admin/dashboard/upload-book",
                element: <UploadBook />,
            },
            {
                path: "/admin/dashboard/manage-book",
                element: <ManageBooks />
            },
            {
                path: "/admin/dashboard/edit-book/:id",
                element: <EditBook />,
                loader: (({ params }) => fetch(`http://localhost:8000/books/${params.id}`))
            },
        ]
    },
    {
        path: "/sign-up",
        element: <SignUp />,
    }
]);

export default router;