import { collection, getDocs, query, where } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";


export const loadEntries = async () => {

    try {
        const collectionRef = collection(FirebaseDB, `id-admin/raices/entries`);
        const docs = await getDocs(query(collectionRef, where("type", "==", "event")));
        const allEntries = [];
        docs.forEach(doc => {
            allEntries.push(
                {
                    id: doc.id,
                    ...doc.data()
                }
            );
        });
        return allEntries;

    } catch (err) {
        return {code: err.code, name: err.name}
    }
}