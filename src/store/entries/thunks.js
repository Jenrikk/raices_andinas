import { collection, doc, setDoc } from 'firebase/firestore/lite'
import { FirebaseDB } from '../../firebase/config';
import { addNewEntry } from './entriesSlice';


export const startAddNewEntry = () => {

    return async(dispatch, getState) => {

        // uid
        const {uid} = getState().auth;

        const newEntry = {
            title: '',
            description: '',
            body: '',
            date: new Date().getTime(),
            // imageUrls: [],
        }

        const newDoc = doc( collection(FirebaseDB, `${uid}/raices/entries`));
        await setDoc( newDoc, newEntry );
        // add id property to newEntry
        newEntry.id = newDoc.id;

        dispatch(addNewEntry(newEntry));

    }
}


export const startSavingStatus = () => {
    
}


