import { createSlice } from '@reduxjs/toolkit';

const initialValue = {
    name: '',
    email: '',
    handphone: '',
    nationality: '',
    comment: '',
};
export const formSlice = createSlice({
    name: 'form',
    initialState: {
        formList: initialValue,
    },
    reducers: {
        handleFormData: (state, action) => {
            state.formList = action.payload;
            console.log('ini state', state.formList);
        },
    },
});

export const { handleFormData } = formSlice.actions;
export default formSlice.reducer;
