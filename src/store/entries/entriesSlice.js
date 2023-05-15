import { createSlice } from '@reduxjs/toolkit';

export const entriesSlice = createSlice({
    name: 'entries',
    initialState: {
        isSaving: 'new', // 'succeeded' | 'failed' | 'new' | 'loading'
        status: 'idle', // 'loading' | 'succeeded' | 'failed'
        entries: [],
        publishedEntries: [],
        errorMessage: null,
    },
    reducers: {
        setEntries: (state, action) => {
            state.entries = action.payload;
            state.errorMessage = null;
        },
        setIsSaving: (state, action) => {
            state.isSaving = action.payload;
        },
        setStatus: (state, action) => {
            state.status = action.payload;
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
        setErrorMessage: (state, action) => {
            state.errorMessage = action.payload;
        },
        
        
     }
 });


 // Action creators are generated for each case reducer function 
export const { 
    setEntries, 
    setIsSaving, 
    setStatus,
    getEntryById, 
    addNewEntry, 
    updateEntry, 
    publishEntry, 
    deleteEntryById,
    setErrorMessage } = entriesSlice.actions;