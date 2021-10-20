import React, { useState } from 'react';

const ToDo = () => {
    const [toDo, setToDo] = useState([]);
    const createToDo = (e) => {
        e.preventDefault();
        setToDo(document.getElementById('new-to-do').innerHTML);
    }

    return (
        <div className="todo">
        <header>
            <h3 className="h3-todo">To-Do</h3>
        </header>
            
            <form className="to-do-form" onSubmit={createToDo}>
                <div className="">
                    
                    <input type="text" id="new-to-do" className="new-to-do-input" name="text" autoComplete="off" 
                    onChange={ e => setToDo(e.target.value)}/><br/>
                    <button type="submit" className="new-to-do-btn" onClick={createToDo}>Add</button>
                </div>
            </form>
            {toDo.length === 0 && <div>Nothing To-Do</div>}
                
        </div>
    );
}
export default ToDo;