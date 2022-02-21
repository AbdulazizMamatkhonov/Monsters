import React from "react";
import "./searchBox.css";
function SearchBox({ placeholder, handleChange }) {
  return (
    <div>
      <input
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
        className="searchBox"
      />
    </div>
  );
}

export { SearchBox };
