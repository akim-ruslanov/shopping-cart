import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/errorPage";
import Root from "../pages/Root";
import Home from "../pages/Home";

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