import "./ProductButton.css";

function ProductButton({ name, price, onClick }) {
  return (
    <div className="product">
      <button className="product-button" onClick={onClick}>
        <span className="name"> {name} </span>
        <span className="price"> {price} </span>
      </button>
    </div>
  );
}

export default ProductButton;
