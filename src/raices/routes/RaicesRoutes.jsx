import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { RaicesApp } from '../../RaicesApp'

export const RaicesRoutes = () => {
  return (
    <Routes>

        <Route path="/" element={ <RaicesApp /> } />

        <Route path="/*" element={ <Navigate to="/" /> } />

    </Routes>
  )
}
