import { createSlice } from '@reduxjs/toolkit';

export const entriesSlice = createSlice({
    name: 'entries',
    initialState: {
        status: 'loading', // 'succeeded' or 'failed'
        messageSaved: '',
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
        getAllEntries: (state) => {
            state.entries;
        },
        setStatus: (state) => {
            
        },
        getEntryById: (state, entryId) => {
            state.entries.find(entry => entry.id === entryId);
        },
        addNewEntry: (state, action) => {
            
        },
        updateEntry: (state, action) => {
            
        },
        publishEntry: (state, action) => {
            
        },
        deleteEntryById: (state, action) => {
            
        },
        
     }
 });


 // Action creators are generated for each case reducer function 
export const { 
    getAllEntries, 
    setStatus, 
    getEntryById, 
    addNewEntry, 
    updateEntry, 
    publishEntry, 
    deleteEntryById } = entriesSlice.actions;