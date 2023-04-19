import { collection, doc, setDoc } from 'firebase/firestore/lite'
import { FirebaseDB } from '../../firebase/config';
import { addNewEntry } from './entriesSlice';


export const startAddNewEntry = () => {

    return async(dispatch, getState) => {

        // uid
        const {uid} = getState().auth;

        const newEntry = {
            title: '',
            body: '',
            date: new Date().getTime(),
            imageUrls: [],
        }

        const newDoc = doc( collection(FirebaseDB, `${uid}/raices/entries`));
        await setDoc( newDoc, newEntry );

        newEntry.id = newDoc.id;

        dispatch(addNewEntry(newEntry));

    }
}
// export const startAddNewEntry = () => {

//     return async(dispatch, getState) => {

//         // uid
//         const {uid} = getState().auth;

//         const newEntry = {
//             title: '',
//             body: '',
//             date: new Date().getTime(),
//             imageUrls: [],
//         }

//         const newDocResp = await addDoc(collection( FirebaseDB, `${ uid }`, "raices/entries"),{
//             ...newEntry
//         });

//         console.log({newDocResp})

//         // dispatch(newEntry)

//     }
// }

