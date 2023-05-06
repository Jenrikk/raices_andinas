import { createSlice } from '@reduxjs/toolkit';

export const entriesSlice = createSlice({
    name: 'entries',
    initialState: {
        isSaving: 'new', // 'succeeded' or 'failed' or 'new' or 'loading'
        messageSaved: '',
        entries: [],
        publishedEntries: []
    },
    reducers: {
        getAllEntries: (state) => {
            state.entries;
        },
        setIsSaving: (state, action) => {
            state.isSaving = action.payload;
        },
        getEntryById: (state, entryId) => {
            state.entries.find(entry => entry.id === entryId);
        },
        addNewEntry: (state, action) => {
            state.entries.push(action.payload);
            state.isSaving = 'succeeded';
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
    setIsSaving, 
    getEntryById, 
    addNewEntry, 
    updateEntry, 
    publishEntry, 
    deleteEntryById } = entriesSlice.actions;