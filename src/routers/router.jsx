import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Cart from "../pages/book/Cart";
import Checkout from "../pages/book/Checkout";
import SingleBook from "../pages/book/SingleBook";
import PrivateRoute from "./PrivateRoute";
import Orders from "../pages/book/Orders";
import AdminRoute from "./AdminRoute";
import AdminLogin from "../components/AdminLogin";
import DashboardLayout from "../pages/dashboard/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import ManageBooks from "../pages/dashboard/manageBooks/ManageBooks";
import AddBooks from "../pages/dashboard/addBooks/AddBooks";
import EditeBook from "../pages/dashboard/editeBook/EditeBook";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/orders",
            element: <PrivateRoute><Orders /></PrivateRoute>
        },
        {
            path: "/about",
            element: <div>About</div>
        },
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/register",
            element: < Register />
        },
        {
            path: "/cart",
            element: <Cart />
        },
        {
            path: "/checkout",
            element:<PrivateRoute><Checkout /></PrivateRoute> 
        },
        {
            path: "/book/:id",
            element: <SingleBook />
        }   
    ]
  },
  {
    path: "/admin",
    element: <AdminLogin />
  },
  {
    path: '/dashboard',
    element: <AdminRoute><DashboardLayout /></AdminRoute>,
    children:[
        {
            path: "",
            element: <AdminRoute><Dashboard /></AdminRoute>
        },
        {
            path: 'add-book',
            element: <AdminRoute><AddBooks/></AdminRoute>
        },
        {
            path: 'edit-book/:id',
            element: <AdminRoute><EditeBook /></AdminRoute>
        },
        {
            path: 'manage-books',
            element: <AdminRoute><ManageBooks /></AdminRoute>
        },
    ]
  }
]);

export default router;