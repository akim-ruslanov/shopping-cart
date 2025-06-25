import NavBar from "../components/NavBar";
import Filter from "../components/Filter";
import { Outlet } from "react-router-dom";
import Cart from "../components/Cart/Cart";
import "./root.css";
import { useState } from "react";

export default function Root() {
const [cart, setCart] = useState({});

    function addToCart(product) {
        if (product.id in cart) {
            const newQuantity = cart[product.id]["quantity"] + 1;
            setCart({
                ...cart,
                [product.id]: { quantity: newQuantity, product },
            });
        } else {
            setCart({ ...cart, [product.id]: { quantity: 1, product } });
        }
    }

    function updateCart(productId, quantity) {
        if (quantity === 0) {
            setCart(oldCart => {
                const {[productId]: _, ...rest} = oldCart;
                return rest;
            });
        } else {
            const product = cart[productId];
            setCart({...cart, productId: {"quantity": quantity, product}});
        }
    }

    return (
        <>
            <NavBar></NavBar>
            <div className="content">
                <Filter></Filter>
                <Outlet context={{ addToCart }}></Outlet>
                <Cart cart={cart} updateCart={updateCart}></Cart>
            </div>
        </>
    );
}
