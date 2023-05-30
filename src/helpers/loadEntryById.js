import { doc, getDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";


export const loadEntryById = async (entryId) => {

    const docRef = doc(FirebaseDB, `id-admin/raices/entries`, entryId);
    try {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return {
                id: docSnap.id,
                ...docSnap.data()
            }
        }else {
            return { code: 'Document does not exist', name: 'La entrada no existe' }
        }

    } catch (err) {
        return { code: err, name: err }
    }
}