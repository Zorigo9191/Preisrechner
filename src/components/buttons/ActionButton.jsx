import "./ActionButton.css";

function ActionButton({ label, onClick, className = "", disabled = false }) {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
}

export default ActionButton;
