import { ref, listAll } from "firebase/storage";
import { FirebaseStorage } from "../firebase/config";
import { useEffect, useState } from "react";

export const useGetLastFolder = (postType) => {

    const [folders, setFolders] = useState([]);

    const listRef = ref(FirebaseStorage, `image/${postType}`);

    useEffect(() => {

     listAll(listRef)
            .then((res) => {
                setFolders(res.prefixes.map((folderRef) => {
                    return folderRef.name;
                }));
            })
            .catch((error) => {
                // Uh-oh, an error occurred!
            });
        
    }, [])

    // take last folder name, convert to number and add +1, then convert to
    // string again.
    const lastFolder = (parseInt(folders[folders.length - 1]) + 1).toString();
    const lastPossibleFolderPath = `image/${postType}/${lastFolder}`
    
    return {
        lastPossibleFolderPath
    }

}

