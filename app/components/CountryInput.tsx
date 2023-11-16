"use client";

import { useState } from "react";

const CountryInput = () => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        id="inputField"
        value={inputValue}
        onChange={handleInputChange}
      />
    </>
  );
};

export default CountryInput;
