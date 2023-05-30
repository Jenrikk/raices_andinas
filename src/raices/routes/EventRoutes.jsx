import { Navigate, Route, Routes } from "react-router-dom"
import { AddEventPage } from "../pages/AddEventPage"
import { EditEntryPage } from "../pages/EditEntryPage"


export const EventRoutes = () => {
  return (
    <Routes>
        <Route path="new" element={ <AddEventPage /> } />
        <Route path="edit/:entryId" element={ <EditEntryPage /> } />

        <Route path="/*" element={ <Navigate to="/event/" /> } />

    </Routes>
  )
}
