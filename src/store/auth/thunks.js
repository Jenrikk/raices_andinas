import { loginWithEmailPassword, logoutFirebase } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice"

export const checkingAuthentication = ( email, password ) => {
    return async ( dispatch ) => {

        dispatch( checkingCredentials() );

    }
}

// aqui uso correo en lugar de email para no liarme con la declaracion de loginWithEmailPassword y 
// poder desestructuralizar la propiedad email de la respuesta.
export const startLoginWithEmailPassword = ( correo, password ) => {
    return async ( dispatch ) => {

        dispatch( checkingCredentials() );

        const result =  await loginWithEmailPassword( {correo, password} );
        // console.log( result );
        if ( !result.ok ) return dispatch( logout(result));

        dispatch( login(result) );

    }

};

export const startLogout = () => {
    return async (dispatch) => {

        await logoutFirebase();
        
        dispatch( logout() );
    }
};