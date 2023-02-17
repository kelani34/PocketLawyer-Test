import React, { useState } from "react";
import "./List.css"; // import CSS file

function List({ items }) {
  const [newItem, setNewItem] = useState(""); // state for the new item input

  const handleAddItem = (event) => {
    event.preventDefault(); // prevent page from refreshing on form submission
    // add the new item to the array of items
    items.push(newItem);
    setNewItem(""); // clear the input field
  };

  return (
    <div className="container">
      <div className="list-container">
        <h2>My List</h2>
        <ul className="list">
          {items.map((item, index) => (
            <>
              <li key={index}>{item}</li>
              <hr />
            </>
          ))}
        </ul>
        <form onSubmit={handleAddItem} className="add-item-form">
          <input
            placeholder="Add new Item"
            type="text"
            value={newItem}
            onChange={(event) => setNewItem(event.target.value)}
            required
          />

          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
}

export default List;
