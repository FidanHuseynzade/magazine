import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import HomePage from "../pages/News";
import NotFound from "../pages/NotFound";
import Publishers from "../pages/Publishers";
import Register from "../pages/Register";
import UserRoot from "../pages/UserRoot";

export const ROUTES = [
    {
        path: '/',
        element: <UserRoot/>,
        children: [
            {
                path: "/",
                element: <HomePage/>,
            },
            {
                path: "/register",
                element: <Register/>,
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: '*',
                element: <NotFound/>
            },
            {
                path:'/publishers',
                element: <Publishers/>
            }
            // {
            //     path: "/logout",
            //     element: <Login/>
            // }

        ]
    },
    {
        path:'/Dashboard',
        element: <Dashboard/>
    }
]