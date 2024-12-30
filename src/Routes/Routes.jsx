import { createBrowserRouter } from "react-router";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import AddCourse from "../pages/AddCourse/AddCourse";
import Courses from "../pages/Courses/Courses";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
            ,
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/addCourse',
                element:<AddCourse></AddCourse>
            },
            {
                path:'/courses',
                element:<Courses></Courses>
            }
        ]
    }
])