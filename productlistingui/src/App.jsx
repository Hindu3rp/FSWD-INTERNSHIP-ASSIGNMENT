import { useState } from "react";
import "./App.css";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 1999,
    category: "Electronics",
    rating: 4.5,
    image: "https://picsum.photos/300?1",
  },
  {
    id: 2,
    name: "Running Shoes",
    price: 2999,
    category: "Fashion",
    rating: 4.2,
    image: "https://picsum.photos/300?2",
  },
  {
    id: 3,
    name: "Smart Watch",
    price: 3499,
    category: "Electronics",
    rating: 4.8,
    image: "https://picsum.photos/300?3",
  },
  {
    id: 4,
    name: "Backpack",
    price: 999,
    category: "Fashion",
    rating: 4.0,
    image: "https://picsum.photos/300?4",
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    price: 1499,
    category: "Electronics",
    rating: 4.3,
    image: "https://picsum.photos/300?5",
  },
];

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [price, setPrice] = useState(5000);
  const [cart, setCart] = useState(0);

  const filtered = products.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || p.category === category) &&
      p.price <= price
  );

  return (
    <div className="container">
      <header>
        <h1>🛍 NeoStore</h1>
        <div className="cart">🛒 {cart}</div>
      </header>

      <div className="controls">
        <input
          placeholder="Search products..."
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="chips">
          {["All", "Electronics", "Fashion"].map((c) => (
            <button
              key={c}
              className={category === c ? "active" : ""}
              onClick={() => setCategory(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="slider">
          <label>Max Price: ₹{price}</label>
          <input
            type="range"
            min="0"
            max="5000"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
      </div>

      <div className="grid">
        {filtered.map((p) => (
          <div className="card" key={p.id}>
            <img src={p.image} />
            <div className="info">
              <h3>{p.name}</h3>
              <p className="rating">⭐ {p.rating}</p>
              <p className="price">₹{p.price}</p>

              <button onClick={() => setCart(cart + 1)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;