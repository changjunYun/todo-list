import React from 'react';

export default function Todo({todo, onUpdate, onDelete}) {
    const {text, status} = todo;
    const handleChange = (e) => {
        const status = e.target.checked ? 'completed' : 'active';
        // key, value값이 같다면 생략가능
        //onUpdate({...todo, status : status});
        onUpdate({...todo, status});
    }
    const handleDelete = () => {
        onDelete(todo); 
        console.log("삭제된 리스트 : " + JSON.stringify(todo));
    };
    return (
      <li>
        <input 
        type='checkbox' 
        id='checkbox' 
        checked={status === 'completed'}
        onChange={handleChange}
        />
        <label htmlFor='checkbox'>{text}</label>
        <button onClick={handleDelete}>삭제하기</button>
      </li>
    );
}

