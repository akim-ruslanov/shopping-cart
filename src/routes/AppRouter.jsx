import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/errorPage";
import Root from "../pages/root";
import Home from "../pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        errorElement: <ErrorPage/>,
        children: [
          {
            index: true,
            element: <Home></Home>
          }
        ]
      }
    ]
  }
])

export {router};