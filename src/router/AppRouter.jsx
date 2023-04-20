
import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { RaicesRoutes } from "../raices/routes/RaicesRoutes"
import { CheckingAuth } from "../ui/components"
import { useCheckAuth } from "../hooks"
import { PublicRoute } from "./PublicRoute"
import { AllEventsPage } from "../raices/pages/AllEventsPage"
import { EventRoutes } from "../raices/routes/EventRoutes"
import { PrivateRoute } from "./PrivateRoute"


export const AppRouter = () => {

  const {status} = useCheckAuth();


  if (status === 'checking') {
    return <CheckingAuth />;
  }

  return (
    <Routes>

      {/* RaicesApp */}
      <Route path="/*" element={ <RaicesRoutes /> } />
     
      {/* Login */}
      <Route path="/auth/*" 
        element={ 
          <PublicRoute>
            <AuthRoutes />
          </PublicRoute>
        }
      />

      {/* Events */}
      <Route path="event">
        <Route index element={<AllEventsPage />} />

        <Route path="/event/*" 
          element={ 
            <PrivateRoute>
              <EventRoutes />
            </PrivateRoute>
          }
        />
        
        
      </Route>






      {/* {
        (status === 'authenticated') 
          ? <Route path="/*" element={ <RaicesRoutes /> } />
          : <Route path="/auth/*" element={ <AuthRoutes /> } />
      }
        <Route path="/*" element={ <Navigate to='/auth/login' /> } /> */}

    </Routes>
  )
}
