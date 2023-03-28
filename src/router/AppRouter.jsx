import React from "react"
import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { RaicesRoutes } from "../raices/routes/RaicesRoutes"

export const AppRouter = () => {
  return (
    <Routes>

        {/* Login */}
        <Route path="/auth/*" element={ <AuthRoutes /> } />

        {/* RaicesApp */}
        <Route path="/*" element={ <RaicesRoutes /> } />

    </Routes>
  )
}
