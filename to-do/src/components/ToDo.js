import React, { useState } from 'react';
import complete from './images/complete.png';
import remove from './images/remove.png';

function Task({ task, index, completeTask, removeTask }) {
    
    return (
        <div
            className="task"
            style={{ textDecoration: task.completed ? "line-through" : "" }}
        >
            
            <button onClick={() => completeTask(index)}><img className="img complete-img" src={complete} alt=""/></button>
            
            {task.title}
            
            <button onClick={() => removeTask(index)}><img className="img remove-img" src={remove} alt=""/></button>
        </div>
    );
}

const ToDo = () => {
    
    const [value, setValue] = useState('');
    const [tasks, setTasks] = useState([]);

    const handleSubmit = e => {
        e.preventDefault();
        if(!value) return;
        
        addTask(value);
        setValue('');
    }

    const addTask = title => {
        const newTasks = [ ...tasks, { title, completed: false }];
        setTasks(newTasks);
    };

    const completeTask = index => {
        const newTasks = [...tasks];
        newTasks[index].completed = true;
        setTasks(newTasks);
    };

    const removeTask = index => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };


    return (
        <div className="todo">
        <header>
            <h3 className="h3-todo">To-Do</h3>
        </header>
            
            <form className="to-do-form" onSubmit={handleSubmit}>
                    
                    <input type="text" id="new-to-do" className="new-to-do-input" value={value} 
                    onChange={e => setValue(e.target.value)}/><br/>
                    <button type="submit" className="new-to-do-btn">Add</button>

            </form>

                <div className="tasks">
                    {tasks.map((task, index) => (
                        <Task
                            task={task}
                            index={index}
                            completeTask={completeTask}
                            removeTask={removeTask}
                            key={index}
                        />
                    ))}
                </div>
                
        </div>
    );
}
export default ToDo;