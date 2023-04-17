import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FirebaseAuth } from "../firebase/config";
import { login, logout } from "../store/auth/authSlice";
import { onAuthStateChanged } from "firebase/auth";

export const useCheckAuth = () => {

    const { status } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        // se ejecutara desde el principio y estara "escuchando" el estado del Auth
        onAuthStateChanged(FirebaseAuth, async (user) => {
            if (!user) return dispatch(logout());
            const { uid, photoURL, displayName, email } = user;
            dispatch(login({ uid, photoURL, displayName, email }));
        })

    }, [])

    return {
        status
    }

}
