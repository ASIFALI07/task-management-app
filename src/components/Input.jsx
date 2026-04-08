function Input({ value, onChange, placeholder, type = "text" }) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={{ margin: "5px", padding: "5px" }}
    />
  );
}

export default Input;
