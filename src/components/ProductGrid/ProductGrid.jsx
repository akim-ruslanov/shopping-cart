import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductGrid.module.css";

export default function ProductGrid({ products, addToCart }) {
    return (
        <div className={styles["product-grid"]}>
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    addToCart={addToCart}
                ></ProductCard>
            ))}
        </div>
    );
}
