import "./CardWrapper.css";
import Card from "./Card";

function CardWrapper({ cards, addToCart, removeFromCart }) {
  return (
    <div className="card-wrapper">
      {cards.map((item) => {
        return (
          <Card
            key={item.id}
            {...item}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        );
      })}
    </div>
  );
}

export default CardWrapper;
