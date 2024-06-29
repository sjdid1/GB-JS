import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { fetchTasks } from './tasksSlice';



function App() {

    const dispatch = useDispatch();

    const tasks = useSelector((state) => state.tasks.items);

    const taskStatus = useSelector((state) => state.tasks.status);



    useEffect(() => {

        if (taskStatus === 'idle') {

            dispatch(fetchTasks());

        }

    }, [taskStatus, dispatch]);



    return (

        <div className="App">

            <h1>Tasks</h1>

            {taskStatus === 'loading' && <p>Loading...</p>}

            {taskStatus === 'succeeded' && (

                <ul>

                    {tasks.map((task) => (

                        <li key={task.id}>

                            {task.title}: {task.completed ? 'Completed' : 'Incomplete'}

                        </li>

                    ))}

                </ul>

            )}

            {taskStatus === 'failed' && <p>Error loading tasks</p>}

        </div>

    );

}



export default App;

