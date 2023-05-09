import { collection, doc, setDoc } from 'firebase/firestore/lite'
import { FirebaseDB } from '../../firebase/config';
import { addNewEntry, setIsSaving } from './entriesSlice';


export const startAddNewEntry = (entryContent) => {

    return async(dispatch, getState) => {

        // uid
        // const {uid} = getState().auth;

        dispatch(setIsSaving('loading'));

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




