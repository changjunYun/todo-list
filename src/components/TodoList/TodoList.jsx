import React, { useState } from "react";
import AddTodo from "../AddTodo/AddTodo";

export default function TodoList(){
    const [todos, setTodos] = useState([
        { id: '123', text: '장보기', status: 'active' },
        { id: '124', text: '공부하기', status: 'active' },
    ]);
    
    const handleAdd = (todo) => {
        // 새로운 todo를 todos에 업데이트 해줘야 한다.
        console.log(todo);
        setTodos([...todos, todo])
    }
    return (
        <section>
            <ul>
                {todos.map((item) =>(
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
            {/* add가 되면 나의 콜백함수를 호출해라 */}
            <AddTodo onAdd={handleAdd}/>
        </section>
    );
}