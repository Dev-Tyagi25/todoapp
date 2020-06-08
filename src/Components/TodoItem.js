import React from 'react';
import "./TodoItem.css";

function TodoItem(props) {

    return(
        <div className="todoItem" >
            <input type="checkbox" checked={props.checked} onChange={props.onclick}></input>
            <p className={props.checked ? "completed" : null}>{props.description}</p>
            <hr />
        </div>
    );
}

export default TodoItem;