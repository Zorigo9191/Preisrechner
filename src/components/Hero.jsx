import ActionButton from "./buttons/ActionButton";
import ProductButton from "./products/ProductButton";
import "./Hero.css";
import Display from "./displays/Display";
import { useState } from "react";

const products = [
  { id: 1, name: "Hähnchen Curry", price: 9.9 },
  { id: 2, name: "Cheeseburger", price: 8.5 },
  { id: 3, name: "Pizza Salami", price: 11.0 },
  { id: 4, name: "Döner Teller", price: 12.5 },
  { id: 5, name: "Pommes Frites", price: 4.5 },
  { id: 6, name: "Spaghetti Bolognese", price: 10.9 },
  { id: 7, name: "Falafel Wrap", price: 7.9 },
  { id: 8, name: "Caesar Salat", price: 8.2 },
  { id: 9, name: "Schnitzel Wiener Art", price: 13.9 },
  { id: 10, name: "Chicken Nuggets", price: 6.5 },
  { id: 11, name: "Lachsfilet", price: 15.9 },
  { id: 12, name: "Veggie Burger", price: 9.4 },
  { id: 13, name: "Tomatensuppe", price: 5.5 },
  { id: 14, name: "Tiramisu", price: 4.9 },
  { id: 15, name: "Apfelstrudel", price: 5.9 },
  { id: 16, name: "Currywurst", price: 7.5 },
];

function Hero() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [list, setList] = useState([]);

  const productBtn = (id) => {
    const dish = products.find((product) => product.id === id);
    if (dish) {
      setTotalPrice((prevPrice) => prevPrice + dish.price);
    }

    setList((product) => [...product, dish]);
  };

  const resetBtn = () => {
    if (totalPrice === 0) return;

    if (window.confirm("möchtest du wirklich alles zurücksetzen?")) {
      setTotalPrice(0);
      setList([]);
    }
  };

  const payBtn = () => {
    if (totalPrice === 0) {
      alert("Bitte geben Sie eine Bestellung ein");
      return;
    }

    const summe = totalPrice;

    if (summe) {
      window.confirm(
        "Bestellung abgeschlossen! Der Gesamtpreis Beträgt: " + summe + "€",
      );
    }
    setTotalPrice(0);
  };

  const orderBtn = () => {
    if (totalPrice === 0) {
      alert("Mindestbestellwert von 20€ nicht erreicht!");
      return;
    } else if (totalPrice > 20) {
      window.confirm("Bestellung abgeschlossen! ");
      setTotalPrice(0);
    }
  };

  const display = () => {};

  return (
    <>
      <div className="wrapper">
        <section className="hero">
          <div className="hero-container">
            {products.map((product) => {
              return (
                <ProductButton
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  onClick={() => productBtn(product.id)}
                />
              );
            })}
          </div>

          <div className="render">
            <p className="render-text">Gesamt</p>
            <Display
              className="render-display"
              value={totalPrice.toFixed(2) + " €"}
            />
          </div>

          <div className="actions">
            <div className="actions-reset">
              <ActionButton
                className="reset-btn"
                label="Zurücksetzen"
                onClick={resetBtn}
                disabled={totalPrice === 0}
              />
            </div>
            <div className="actions-payAndDelivery">
              <ActionButton
                className="pay-button"
                label="Vor Ort"
                onClick={payBtn}
              />
              <ActionButton
                className="delivery-btn"
                label="Bestellen"
                onClick={orderBtn}
              />
            </div>
          </div>
        </section>
        <section className="sidebar">
          <div className="sidebar-list">
            <h3 className="sidebar-title">Bestellung</h3>

            <ul className="sidebar-items">
              {list.map((item, index) => (
                <li key={index} className="sidebar-item">
                  <span>{item.name}</span>
                  <span>{item.price.toFixed(2)}€</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}

export default Hero;
