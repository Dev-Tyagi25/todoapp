import React from 'react';
import "./AddNewItem.css"

function AddNewItem(props) {
    return(
        <div className="addNewItem"> 
            <label htmlFor="newItem">Description: </label>
            <input type="text" name="newItem" id="newItem" value={props.description} onChange={props.onchange}></input>
            <button onClick={props.onsubmit} className="addButton">Add</button>
            <button onClick={props.remove} className="removeButton">Remove</button>
            <hr />
        </div>
    )
}

export default AddNewItem;