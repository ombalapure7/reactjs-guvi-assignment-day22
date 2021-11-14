import CardWrapper from "./components/CardWrapper";
import Footer from "./components/Footer";
import Jumbotron from "./components/Jumbotron";
import data from "./data";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsCartFill } from "react-icons/bs";
import { useState } from "react";

let cards = data;

function App() {
  const [cartCount, setCartCount] = useState(0);

  /* Increase cart count */
  const addToCart = (id) => {
    setCartCount(() => cartCount + 1);
    
    cards = data.map((item) => {
      if (item.id === id) {
        item.addedToCart = true;
        return item;
      }
  
      return item;
    });

    console.log("Cards:", cards);
  };

  /* Reduce cart count */
  const removeFromCart = (id) => {
    setCartCount(() => cartCount - 1);
    cards = data.map((item) => {
      if (item.id === id && item.addedToCart) {
        item.addedToCart = false;
        return item;
      }
  
      return item;
    });

    console.log("Cards:", cards);
  };

  return (
    <div>
      <nav className="navbar">
        {/* Wrap Navbar links */}
        <div className="navbar-content">
          <div className="navbar-title">Start Bootstrap</div>
          {/* First half */}
          <ul className="navbar-links">
            <li>Home</li>
            <li>About</li>
            <li>
              Shop
              <IoMdArrowDropdown />
            </li>
          </ul>
          {/* Second half */}
        </div>
        <div className="cart">
          <BsCartFill />
          Cart<span className="item-count">{cartCount}</span>
        </div>
      </nav>
      <Jumbotron />
      <CardWrapper cards={cards} addToCart={addToCart} removeFromCart={removeFromCart} />
      <Footer />
    </div>
  );
}

export default App;
