import React from 'react'
import { FormComponent } from '../components'
import { Grid } from '@mui/material'

export const FormView = ({ children}) => {
  return (
    <Grid container component="main" sx={{ border: 1, mt: 9}}>

        {/* postType='event' || postType='project' */}
        <FormComponent postType='event'/>

    </Grid>
  )
}
