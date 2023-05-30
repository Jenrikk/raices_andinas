import { doc, getDoc} from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";


export const loadEntryById = async (entryId) => {

    try {
        const docRef = doc(FirebaseDB, `id-admin/raices/entries`, entryId);
        const docSnap = await getDoc(docRef);

        return docSnap.data();

    } catch (err) {
        return {code: err.code, name: err.name}
    }
}