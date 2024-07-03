export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const EDIT_TASK = 'EDIT_TASK';

export const addTask = (task) => ({
    type: ADD_TASK,
    payload: task,
});

export const deleteTask = (index) => ({
    type: DELETE_TASK,
    payload: index,
});

export const editTask = (index, newTask) => ({
    type: EDIT_TASK,
    payload: { index, newTask },
});
