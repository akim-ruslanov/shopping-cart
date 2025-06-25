import CartItem from "../CartItem/CartItem";
import styles from "./Cart.module.css";

export default function Cart({ cart, updateCart }) {
    let cartItems = [];
    for (const [_, product] of Object.entries(cart)) {
        cartItems.push(product);
    }
    let total = 0;
    console.log(`cartitems: ${JSON.stringify(cartItems)}`)
    for (const item of cartItems) {
        total += item["product"]["price"] * item["quantity"];
    }
    console.log(`total: ${JSON.stringify(total)}`)
    return (
        <div className={styles.cart}>
            {cartItems.map((item) => (
                <CartItem
                    key={item["product"].id}
                    product={item["product"]}
                    qty={item["quantity"]}
                    updateCart={updateCart}
                />
            ))}
            <div className="total">
            {total === 0 ? <p>Cart is empty</p> : `Total: ${total}`}

            </div>
        </div>
    );
}
