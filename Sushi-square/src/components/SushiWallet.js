import React, { useState } from "react";

const SushiWallet = ({ onAddMoney }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddMoney(value);
    setValue("");
  };

  const handleChange = (e) => {
    const input = parseInt(e.target.value);

    setValue(input);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" value={value} onChange={handleChange} />
      <button type="submit">Add Cash</button>
    </form>
  );
};

export default SushiWallet;
