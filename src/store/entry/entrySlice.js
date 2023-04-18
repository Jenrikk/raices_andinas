import { createSlice } from '@reduxjs/toolkit';

export const entrySlice = createSlice({
    name: 'entry',
    initialState: {
        isSaving: true,
        messageSaved: '',
        type: 'event', // 'project'
        entries: [],
        active: null,
        // active: {
        //     id: 'abc123',
        //     title: '',
        //     body: '',
        //     date: 1234567,
        //     imageUrls: [],
        // }
    },
    reducers: {
        increment: (state, /* action */ ) => {
            state.counter += 1;
         },
     }
 });


 // Action creators are generated for each case reducer function 
export const { increment } = raicesSlice.actions;