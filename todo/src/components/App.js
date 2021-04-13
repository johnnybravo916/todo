import React, { useState } from "react";

function App() {
    const [inputText, setInputText] = useState("");
    const [list, setList] = useState([]);

    const handleChange = (e) => {
        const { value } = e.target;
        setInputText(value);
    };

    const addTask = () => {
        setList((prevValue) => {
            return [...prevValue, inputText];
        });
        setInputText("")
    };

    return (
        <div className="container">
            <div className="heading">
                <h1>To-Do List</h1>
            </div>
            <div className="form">
                <input
                    type="text"
                    name="todo"
                    onChange={handleChange}
                    value={inputText}
                />
                <button onClick={addTask}>
                    <span>Add</span>
                </button>
            </div>
            <div>
                <ul>
                    {list.map((item, k) => {
                        return <li key={k}>{item}</li>;
                    })}
                </ul>
            </div>
        </div>
    );
}

export default App;

//CHALLENGE: Make this app work by applying what you've learnt.
//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>s
