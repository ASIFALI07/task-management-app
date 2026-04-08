function Button({ text, onClick, disabled }) {
  return (
    <button onClick={onClick} disabled={disabled} style={{ margin: "5px" }}>
      {text}
    </button>
  );
}

export default Button;
