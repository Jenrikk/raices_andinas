import React from 'react'
import { Grid } from '@mui/material'
import { ProjectListComponent } from '../components'

export const AllProjectsView = ({ children}) => {
  return (
    <Grid container component="main" sx={{ mt: 9}}>

        {/* ProjectListComponent, posibles props: cuantos proyectos  */}
        <ProjectListComponent />

    </Grid>
  )
}
