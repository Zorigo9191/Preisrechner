import "./Display.css";

function Display({ value }) {
  return (
    <div className="display">
      <span className="display-item"> {value}</span>
    </div>
  );
}

export default Display;
