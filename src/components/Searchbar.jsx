import React, { useState } from 'react';

const Searchbar = ({ setCity }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(input);
  }

  const handleInputChange = (e) => {
    setInput(e.target.value);
  }

  return (
    <div id="searchbar">
      <form onSubmit={handleSubmit}>
        <label>
          Search by City:
          <input type="text" name="name" value={input} onChange={handleInputChange}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Searchbar;