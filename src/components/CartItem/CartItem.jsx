import { useState } from "react";
import styles from "./CartItem.module.css";

export default function CartItem({ product, qty, updateCart}) {
    return (
        <div className={styles["cart-item"]}>
            <div className={styles["cart-item-image"]}>
                <img
                    src="https://eightouncecoffee.ca/cdn/shop/files/97bc3caf-6477-42c6-ac2d-22609ce01206.png?v=1749526555&width=600"
                    alt=""
                />
            </div>
            <p>{product.name}</p>
            <p>{qty}</p>
            <button onClick={() => updateCart(product.id, qty-1)}>-</button>
            <button onClick={() => updateCart(product.id, qty+1)}>+</button>
        </div>
    );
}
