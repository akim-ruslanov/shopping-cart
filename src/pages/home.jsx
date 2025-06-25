import { useOutletContext } from "react-router-dom";
import Filter from "../components/Filter";
import NavBar from "../components/NavBar";
import ProductGrid from "../components/ProductGrid/ProductGrid";
import { useEffect, useState } from "react";
import "./home.css";

const coffeeProducts = [
    {
        id: 1,
        roastery: "Blue Ridge Roasters",
        name: "Yirgacheffe Sunrise",
        price: 18.5,
        image: "https://source.unsplash.com/featured/?coffee,ethiopia",
        description:
            "Delicate floral aroma with notes of bergamot and lemon zest. Light roast, perfect for pour-over.",
    },
    {
        id: 2,
        roastery: "Red Lantern Coffee Co.",
        name: "Colombian Sierra Blend",
        price: 16.0,
        image: "https://source.unsplash.com/featured/?coffee,colombia",
        description:
            "Balanced and smooth with chocolate and hazelnut notes. Medium roast, versatile for all brewers.",
    },
    {
        id: 3,
        roastery: "Highlands & Crema",
        name: "Kenyan Ember",
        price: 19.25,
        image: "https://source.unsplash.com/featured/?coffee,kenya",
        description:
            "Vibrant acidity with juicy berry and citrus flavors. Washed process with a bright, clean finish.",
    },
    {
        id: 4,
        roastery: "Obsidian Coffee Works",
        name: "Sumatra Deep Earth",
        price: 17.9,
        image: "https://source.unsplash.com/featured/?coffee,sumatra",
        description:
            "Earthy and rich with cocoa and dried fruit notes. Dark roast with a syrupy body.",
    },
    {
        id: 5,
        roastery: "Golden Leaf Roasters",
        name: "Guatemalan Volcán",
        price: 15.75,
        image: "https://source.unsplash.com/featured/?coffee,guatemala",
        description:
            "Spicy chocolate tones with hints of orange peel. Grown in volcanic soil at high altitudes.",
    },
    {
        id: 6,
        roastery: "Latitude Coffee Lab",
        name: "Brazil Santos Classic",
        price: 14.5,
        image: "https://source.unsplash.com/featured/?coffee,brazil",
        description:
            "Smooth, nutty and low-acid. A dependable everyday brew with chocolate undertones.",
    },
    {
        id: 7,
        roastery: "Northern Bloom Roastery",
        name: "Costa Rica Honey Gold",
        price: 17.25,
        image: "https://source.unsplash.com/featured/?coffee,costarica",
        description:
            "Sweet and creamy with notes of caramel, apple and honey. Honey-processed beans from Tarrazú.",
    },
    {
        id: 8,
        roastery: "Wild Pine Coffee",
        name: "Rwanda Twongere",
        price: 18.8,
        image: "https://source.unsplash.com/featured/?coffee,rwanda",
        description:
            "Juicy red fruit notes with a silky body. Grown by women-led cooperatives in Rwanda.",
    },
];

export default function Home() {
    const { addToCart } = useOutletContext();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => {
                setTimeout(() => {setProducts(data); setLoading(false)}, 50000)
                
                console.log(data);
            })
            .catch((error) => {
                setError(error);
            })
            .finally(() => {
                // setLoading(false);
            });
    }, []);
    return (
        <div className="home">
            {loading ? (
                <div className="loader"> </div>
            ) : error ? (
                <div>Cannot fetch data</div>
            ) : (
                <section className="featured-items">
                    <h1>Featured Items</h1>
                    <div className="featured-items-grid">
                        <ProductGrid
                            products={products}
                            addToCart={addToCart}
                        ></ProductGrid>
                    </div>
                </section>
            )}
        </div>
    );
}
