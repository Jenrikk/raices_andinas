import { createSlice } from '@reduxjs/toolkit';

export const entriesSlice = createSlice({
    name: 'entries',
    initialState: {
        status: 'idle', // 'loading' | 'succeeded' | 'failed'
        entries: [],
        publishedEntries: [],
        entryForEdition: null,
        errorMessage: null,
    },
    reducers: {
        setEntries: (state, action) => {
            state.entries = action.payload;
            state.errorMessage = null;
        },
        setStatus: (state, action) => {
            state.status = action.payload;
        },
        setEntryForEditionById: (state, action) => {
            state.entryForEdition = state.entries.find(entry => entry.id === action.payload);
        },
        setEntryForEdition: (state, action) => {
            state.entryForEdition = action.payload;
        },
        getEntryById: (state, entryId) => {
            state.entries.find(entry => entry.id === entryId);
        },
        addNewEntry: (state, action) => {
            state.entries.push(action.payload);
            state.status = 'succeeded';
        },
        updateEntry: (state, action) => {
            
        },
        publishEntry: (state, action) => {
            
        },
        deleteEntryById: (state, action) => {
            state.entries = state.entries.filter(entry => entry.id !== action.payload);
        },
        setErrorMessage: (state, action) => {
            state.errorMessage = action.payload;
        },
        
        
     }
 });


 // Action creators are generated for each case reducer function 
export const { 
    setEntries, 
    setStatus,
    setEntryForEditionById,
    setEntryForEdition,
    getEntryById, 
    addNewEntry, 
    updateEntry, 
    publishEntry, 
    deleteEntryById,
    setErrorMessage } = entriesSlice.actions;