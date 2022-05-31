import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const tarinerSlice = createSlice({
    name: 'trainer',
    initialState: 'hi',
    reducers: {
       changeTrainer: (state, action) => action.payload
    }
})

export const {changeTrainer} = tarinerSlice.actions;

export default tarinerSlice.reducer;