
import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { RaicesRoutes } from "../raices/routes/RaicesRoutes"
import { CheckingAuth } from "../ui/components"
import { useCheckAuth } from "../hooks"


export const AppRouter = () => {

  const {status} = useCheckAuth();


  if (status === 'checking') {
    return <CheckingAuth />;
  }

  return (
    <Routes>

      {/* {
        (status === 'not-authenticated')
          ? <Route path="/*" element={ <RaicesRoutes /> } />
          : <Route path="/auth/*" element={ <AuthRoutes /> } />
      } */}

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
