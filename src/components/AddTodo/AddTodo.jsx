import React, { useState } from "react";

export default function AddTodo( {onAdd} ){
    const [text, setText] = useState("");
    const handleChange = (e) => setText(e.target.value);
    const handleSummit = (e) => {
        e.preventDefault();
        onAdd({ id: "123455", text, status: 'active' });
        setText("");
    };

    return (
        <form onSubmit={handleSummit}>
            <input 
            type="text"
            placeholder="add text"
            value={text}
            onChange={handleChange}
            />
            <button>Add</button>
        </form> 
    );
}