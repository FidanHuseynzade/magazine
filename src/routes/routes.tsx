import Login from "../pages/Login";
import HomePage from "../pages/News";
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
            // {
            //     path: "/logout",
            //     element: <Login/>
            // }

        ]
    }
]