import { signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { FirebaseAuth } from './config'


export const loginWithEmailPassword = async ({correo, password}) => {

    try {
        const resp = await signInWithEmailAndPassword(FirebaseAuth, correo, password);
        const {uid, photoURL, displayName, email} = resp.user;

        return {
            ok: true,
            uid: uid,
            photoURL: photoURL,
            displayName: displayName,
            email: email
        }
        
    } catch (error) {
        // console.log(error);
        return { ok: false, errorMessage: error.message };
    }

}


export const logoutFirebase = async () => {

    return await FirebaseAuth.signOut();
}