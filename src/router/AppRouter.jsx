import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { RaicesRoutes } from "../raices/routes/RaicesRoutes"
import { CheckingAuth } from "../ui/components"
import { onAuthStateChanged } from "firebase/auth"
import { FirebaseAuth } from "../firebase/config"
import { login, logout } from "../store/auth/authSlice"

export const AppRouter = () => {

  const {status} = useSelector( state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    // se ejecutara desde el principio y estara "escuchando" el estado del Auth
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispatch(logout());
      const {uid, photoURL, displayName, email} = user;
      dispatch(login({uid, photoURL, displayName, email}));
    })

  }, [])


  if (status === 'checking') {
    return <CheckingAuth />;
  }

  return (
    <Routes>

      {
        (status === 'authenticated') 
          ? <Route path="/*" element={ <RaicesRoutes /> } />
          : <Route path="/auth/*" element={ <AuthRoutes /> } />
      }
        <Route path="/*" element={ <Navigate to='/auth/login' /> } />

      {/* Login */}
      {/* <Route path="/auth/*" element={ <AuthRoutes /> } /> */}

      {/* RaicesApp */}
      {/* <Route path="/*" element={ <RaicesRoutes /> } /> */}

    </Routes>
  )
}
