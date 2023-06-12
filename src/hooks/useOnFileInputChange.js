import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useState } from 'react';
import { FirebaseStorage } from '../firebase/config';

export const useOnFileInputChange = ( imagenPath, setValueRHF = () => {} ) => {
    const [imageFile, setImageFile] = useState('');
  
    
    const onFileInputChange = async (ev) => {
        if (ev.target.files === 0) return; // exit if we resign to set a file the first time
        if (!ev.target.files[0]) return; // exit if we resign to change the existing file
    
        const file = ev.target.files[0];
       
    
        try {
          // File name: "image/event/imageName" || "image/project/imageName"
          const storageRef = ref(
            FirebaseStorage,
            `${imagenPath}/${file.name}`
          );
          // Firebase Method : uploadBytes, getDownloadURL
          await uploadBytes(storageRef, file).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
              setImageFile(url);
              //this line is necessary only for EditFormComponent
              setValueRHF('coverImg', url) 
            });
          });
        } catch (error) {
          console.log(error);
        }
    
      };

    return {
        imageFile,
        onFileInputChange,
        setImageFile
    }
}