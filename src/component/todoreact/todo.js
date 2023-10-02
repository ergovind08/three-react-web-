import React, { useState } from "react";
import "./style.css";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (!inputData) {
      alert("Please fill in the data");
    } else {
      const newColor = getRandomColor();
      const newItem = {
        id: new Date().getTime().toString(),
        name: inputData,
        color: newColor,
      };
      setItems([...items, newItem]); // Added color property to the item
      setInputData("");
    }
  };

  // Function to delete items from the added list
  const deleteItem = (id) => {
    const updatedItems = items.filter((curEle) => {
      return curEle.id !== id;
    });
    setItems(updatedItems);
  };

  // Function to generate a random color
  const getRandomColor = () => {
    const colors = ["#FF5733", "#33FF57", "#5733FF", "#FF33E1", "#33E1FF"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const removeAll = () => {
    return setItems([]);
  };

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="/images/todo.svg" alt="phot" />
            <figcaption>Apna Kaam add kariye</figcaption>
            <hr></hr>
          </figure>
          <div className="input-and-button">
            <input
              type="text"
              placeholder="Item Add kariye"
              className="form-control"
              value={inputData}
              onChange={(event) => setInputData(event.target.value)}
            />
            <i className="fa fa-plus add-btn" onClick={addItem}></i>
          </div>
          <div className="showItems">
            {items.map((curEle) => {
              return (
                <div
                  className="eachItem"
                  key={curEle.id}
                  style={{ backgroundColor: curEle.color }}
                >
                  <h3>{curEle.name}</h3>
                  <div className="todo-btn">
                    <i className="fa fa-plus add-btn"></i>
                    <i
                      className="fa fa-plus add-btn"
                      onClick={() => deleteItem(curEle.id)}
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              onClick={removeAll}
            >
              <span>Check List</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
