import { collection, deleteDoc, doc, setDoc } from 'firebase/firestore/lite'
import { FirebaseDB } from '../../firebase/config';
import { loadEntries } from '../../helpers/loadEntries';
import { addNewEntry, deleteEntryById, setEntries, setEntryForEdition, setEntryForEditionById, setErrorMessage, setStatus } from './entriesSlice';
import { loadEntryById } from '../../helpers/loadEntryById';


export const startAddNewEntry = (entryContent) => {

    return async(dispatch, getState) => {

        // uid
        // const {uid} = getState().auth;

        dispatch(setStatus('loading'));

        const newEntry = {
            type: entryContent.postType,
            cover_img: entryContent.coverImg,
            title: entryContent.title,
            description: entryContent.description,
            imagesPath: entryContent.imgPath,
            body: entryContent.quillElementValue,
            date: new Date().getTime(),
        }

        // const newDoc = doc( collection(FirebaseDB, `${uid}/raices/entries`));
        const newDoc = doc( collection(FirebaseDB, `id-admin/raices/entries`));
        await setDoc( newDoc, newEntry );
        // add id property to newEntry
        newEntry.id = newDoc.id;

        dispatch(addNewEntry(newEntry));

    }
}

export const startLoadingEntries = () => {
    return async (dispatch) => {
        dispatch(setStatus('loading'));
        // get documents from a collection
        const entries = await loadEntries();
        
        // dispatch error here if entries doesn't have data
        if ( entries.code ) return dispatch( setErrorMessage(`${entries.code}, ${entries.name}`));
        if ( entries?.length === 0 ) return dispatch( setErrorMessage('No se encontraron datos'));
        
        dispatch(setEntries(entries));

        dispatch(setStatus('idle'));
    }
}


export const startDeletingEntry = (entryId) => {
    return async( dispatch, getState) => {
        
        const docRef = doc(FirebaseDB, `id-admin/raices/entries/${entryId}`)
        await deleteDoc(docRef);

        dispatch(deleteEntryById(entryId));
    }
}

export const startLoadingEntryForUpdate = (entryId) => {
    return async( dispatch, getState) => {
        dispatch(setStatus('loading'));
        // it will set an entry if there is something in the getState().entries.entries
        dispatch(setEntryForEditionById(entryId));

        // check the state after setEntryForEditionById(entryId)
        const {entryForEdition, status} = getState().entries;
        // if entryForEdition doesn't exist, it fetches the entry from the database
        if ( !entryForEdition && status === 'loading') {
            dispatch(setStatus('loading'));
            // fetch entry
            const entry = await loadEntryById(entryId);
            // dispatch error here if entry doesn't have data
            if ( entry.code ) return dispatch( setErrorMessage(`${entry.code}, ${entry.name}`));
            // If everything is OK, it set the entry
            dispatch(setEntryForEdition(entry));
        }

        dispatch(setStatus('idle'));
    }
}




