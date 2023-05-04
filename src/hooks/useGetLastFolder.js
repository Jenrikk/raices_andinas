import { ref, listAll } from "firebase/storage";
import { FirebaseStorage } from "../firebase/config";
import { useEffect, useState } from "react";

export const useGetLastFolder = (postType) => {

    const [folderPath, setFolderPath] = useState('');

    const listRef = ref(FirebaseStorage, `image/${postType}`);

    useEffect(() => {
        const getData = async () => {
            await listAll(listRef)
                .then((res) => {
                    const arrayFolders = res.prefixes.map((folderRef) => {
                        return folderRef.name;
                    })
                    arrayFolders.sort((a, b) => (a-b));
                    // take last folder name of array, convert to number and add +1, then 
                    // convert to string again.
                    const lastFolder = (parseInt(arrayFolders[arrayFolders.length - 1]) + 1).toString();
                    setFolderPath(`image/${postType}/${lastFolder}`);
                })
                .catch((error) => {
                    // Uh-oh, an error occurred!
                    console.log(error)
                });
        }
        console.log('soy useGetLastFolder ')
        getData();

    }, [])

    return {
        folderPath
    }
}

