import { loginWithEmailPassword } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice"

export const checkingAuthentication = ( email, password ) => {
    return async ( dispatch ) => {

        dispatch( checkingCredentials() );

    }
}


export const startLoginWithEmailPassword = ( correo, password ) => {
    return async ( dispatch ) => {

        dispatch( checkingCredentials() );

        const result =  await loginWithEmailPassword( {correo, password} );
        console.log( result );
        if ( !result.ok ) return dispatch( logout(result.errorMessage));

        dispatch( login(result) );

    }

};