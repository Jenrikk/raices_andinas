import { Grid } from "@mui/material"
import { EventListComponent, HeaderComponent } from "../components"




export const MainView = () => {
  return (
    <Grid container component="main">
        {/* HeaderComponent */}
        <HeaderComponent />

        {/* EventListComponent */}
        <EventListComponent />

        {/* ProjectsListComponent */}

        {/* UpcomingEventListComponent */}


    </Grid>
  )
}
