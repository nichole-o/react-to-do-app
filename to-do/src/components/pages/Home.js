import React from 'react';
import ToDo from './ToDo';

const Home = () => {
    return (
        <div className="home">
            <p>This is the home page</p>
            <div className="todo-block">
                <ToDo/>
            </div>
        </div>
    );
}
export default Home;