import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, editTask } from '../redux/actions';

const TaskItem = ({ task, index }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newTask, setNewTask] = useState(task);
    const dispatch = useDispatch();

    const handleEditTask = () => {
        if (newTask.trim()) {
            dispatch(editTask(index, newTask));
            setIsEditing(false);
        }
    };

    return (
        <div className="task-item">
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                    />
                    <button onClick={handleEditTask}>Save</button>
                </>
            ) : (
                <>
                    <span>{task}</span>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                </>
            )}
            <button onClick={() => dispatch(deleteTask(index))}>Delete</button>
        </div>
    );
};

export default TaskItem;
