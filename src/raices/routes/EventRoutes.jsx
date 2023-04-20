import { Navigate, Route, Routes } from "react-router-dom"
import { AddEventPage } from "../pages/AddEventPage"


export const EventRoutes = () => {
  return (
    <Routes>
        <Route path="new" element={ <AddEventPage /> } />

        <Route path="/*" element={ <Navigate to="/event/new" /> } />

    </Routes>
  )
}
