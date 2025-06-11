import NavBar from "../components/NavBar";
import Filter from "../components/Filter";
import { Outlet } from "react-router-dom";
import Cart from "../components/cart";

export default function Root() {
  return (
    <>
      <NavBar></NavBar>
      <Filter></Filter>
      <Outlet></Outlet>
      <Cart></Cart>
    </>
  )
}