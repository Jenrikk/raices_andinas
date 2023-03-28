import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { RaicesPage } from '../pages/RaicesPage'

export const RaicesRoutes = () => {
  return (
    <Routes>

        <Route path="/" element={ <RaicesPage /> } />

        <Route path="/*" element={ <Navigate to="/" /> } />

    </Routes>
  )
}
