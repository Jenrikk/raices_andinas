import { Grid } from "@mui/material"
import { EventListComponent, HeaderComponent, ProjectListComponent } from "../components"




export const MainView = () => {
  return (
    <Grid container component="main">
        {/* HeaderComponent */}
        <HeaderComponent />

        {/* EventListComponent */}
        <EventListComponent />

        {/* ProjectsListComponent */}
        <ProjectListComponent />

        {/* UpcomingEventListComponent */}


    </Grid>
  )
}
