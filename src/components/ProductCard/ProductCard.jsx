import styles from "./ProductCard.module.css";

export default function ProductCard({ product, addToCart }) {
    return (
        <div className={styles["product-card"]}>
            <div className="image">
                <img
                    src="https://eightouncecoffee.ca/cdn/shop/files/97bc3caf-6477-42c6-ac2d-22609ce01206.png?v=1749526555&width=600"
                    alt=""
                />
            </div>
            <div className={styles.roastery}>{product.roastery}</div>
            <div className={styles.name}>{product.name}</div>
            <div className={styles.price}>${product.price} CAD</div>
            <button onClick={() => addToCart(product)}>Add to cart</button>
        </div>
    );
}
