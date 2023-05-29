import { collection, deleteDoc, doc, setDoc } from 'firebase/firestore/lite'
import { FirebaseDB } from '../../firebase/config';
import { loadEntries } from '../../helpers/loadEntries';
import { addNewEntry, deleteEntryById, setEntries, setEntryForEdition, setErrorMessage, setStatus } from './entriesSlice';


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

        const entries = await loadEntries();
        
        // dispatch error here if entries doesn't have data
        if ( entries.code ) return dispatch( setErrorMessage(`${entries.code}, ${entries.name}`));
        if ( entries.length === 0 ) return dispatch( setErrorMessage('No se encontraron datos'));
        
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
    return async( dispatch) => {
        dispatch(setStatus('loading'));

        dispatch(setEntryForEdition(entryId));

        dispatch(setStatus('idle'));
    }
}




