import React, { useState } from "react";
import "./App.css";

function WishList() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  function addItem() {

    if (text.trim().length === 0) {
      return;
    }

    const newItem = {
      text: text,
      priority: 1,
      // picture: "",
    };

    setItems([...items, newItem]);
    setText("");

  }

  function removeItem(index) {
    setItems(items.filter((_, i) => i !== index));
  }

  function updatePriority(index, priority) {
    setItems(
      items.map((item, i) => {
        if (i === index) {
          return { ...item, priority: priority };
        }
        return item;
      })
    );
  }

  function moveItemToTop(index) {
    setItems([
      items[index],
      ...items.slice(0, index),
      ...items.slice(index + 1),
    ]);
  }

  return (

    <>

    <div className="wish-list-heading">
      <h1>Items Wish List</h1>
    </div>

    <div className="wish-list">

      <form onSubmit={(e) => {
          e.preventDefault();
          addItem();
        }}
      >
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="addBtn">Add Item</button>
        
      </form>

      </div>

      <div className="list-items">

      <ul>
        {items.map((item, index) => (

          <div>
          <li key={index}>
            {/* <div className="picture">
              <img src={item.picture} alt="Not Found" />
            </div> */}
            <div>
              {item.text}{" "}
              <button onClick={() => removeItem(index)}>Remove</button>{" "}
              <button onClick={() => moveItemToTop(index)}>Move to Top</button>
            </div>
            <div>
              Priority:{" "}
              <input
                type="number"
                value={item.priority}
                onChange={(e) => updatePriority(index, e.target.value)}
              />
            </div>
          </li>
          </div>
        ))}
      </ul>

      </div>

    </>
  );
}

export default WishList;