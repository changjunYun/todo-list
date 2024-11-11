import React, { useEffect, useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";

export default function TodoList({filter}){
    /* const [todos, setTodos] = useState(function(){
        return readTodosFromLocalStorage();
    });
    */
    const [todos, setTodos] = useState(() => readTodosFromLocalStorage());
    
    const handleAdd = (todo) => {
        // 새로운 todo를 todos에 업데이트 해줘야 한다.
        console.log(todo);
        setTodos([...todos, todo]);
    }
    const handleUpdate = (updated) => setTodos(todos.map((t) => t.id === updated.id ? updated : t))
    const handleDelete = (deleted) => setTodos(todos.filter((t) => t.id !== deleted.id));
        
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    } , [todos]);

    const filtered = getFilteredItems(todos, filter);

    return (
        <section>
            <ul>
                {filtered.map((item) =>(
                    <Todo 
                    key={item.id}
                    todo={item}
                    onUpdate={handleUpdate}
                    onDelete={handleDelete}
                    />
                ))}
            </ul>
            {/* add가 되면 나의 콜백함수를 호출해라 */}
            <AddTodo onAdd={handleAdd}/>
          
        </section>
    );
}

function readTodosFromLocalStorage(){
    const todos = localStorage.getItem('todos');
    return todos ? JSON.parse(todos) : [];
}

function getFilteredItems(todos, filter){
    if (filter === 'all'){
        return todos;
    }
    return todos.filter((todo) => todo.status === filter);
}