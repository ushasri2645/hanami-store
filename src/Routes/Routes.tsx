import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "../Home/Home";
import Cart from "../Components/Cart/Cart";
import Product from "../Components/Product/Product";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path:"/cart",
        element: <Cart/>
    },
    {
        path:"product/:id",
        element: <Product />
    }
]);



export default router;