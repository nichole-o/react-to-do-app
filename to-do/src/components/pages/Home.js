import React from 'react';
import ToDo from './ToDo';

const Home = () => {
    return (
        <div className="home">
            <div className="todo-block">
                <ToDo/>
            </div>
        </div>
    );
}
export default Home;