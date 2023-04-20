import { Box, Button, Grid, Typography } from '@mui/material'

export const FormComponent = ({postType}) => {
  return (
    <Grid container component='section' direction='row' sx={{  p: 1, }} >

            <Grid item xs={12} sm={12} md={12} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 1, mt: 1}}>
                <Typography sx={{ typography: { xs: 'h4', sm: 'h3', md: 'h2'  } }}>
                Estas agregando un {postType}
                </Typography>
            </Grid>
    </Grid>
  )
}
