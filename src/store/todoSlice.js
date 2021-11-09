import { createSlice } from '@reduxjs/toolkit';

const initialValue = [
    {
        id: 0,
        title: 'I want Running',
        completed: false,
    },
    {
        id: 1,
        title: 'I want swimming',
        completed: false,
    },
];


export const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todolists: initialValue,
    },
    reducers: {
        handleDelete: (state, action) => {
           state.todolists = state.todolists.filter((data, index, arr) => arr[index].id !== action.payload);
        },
        handleCompleted: (state, action) => {
            var data = state.todolists;
            for (var i in data) {
                if (data[i].id === action.payload) {
                    data[i].completed = data[i].completed === 'false' ? 'true' : 'false';
                    break;
                }
            }
            state.todolists = [...data]
            return; 
        },
        handleSubmit: (state, action) => {
            state.todolists = [...state.todolists, action.payload]
        },
        handleEdit: (state, action) => {
            const index = state.todolists.findIndex((data) => data.id === action.payload.id)
            if (index !== -1) {
                state.todolists[index] = action.payload;
            }
        }
    }
})

export const { handleDelete, handleCompleted, handleSubmit,handleEdit } = todoSlice.actions
export default todoSlice.reducer