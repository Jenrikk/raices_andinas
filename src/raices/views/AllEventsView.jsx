import React from 'react'
import { Grid } from '@mui/material'
import { EventListComponent } from '../components'

export const AllEventsView = ({ children}) => {
  return (
    <Grid container component="main" sx={{ mt: 9}}>

        {/* EventListComponent, posibles props: cuantos eventos  */}
        <EventListComponent />

    </Grid>
  )
}
