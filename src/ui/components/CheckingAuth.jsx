import { CircularProgress, Grid, Paper, Typography } from '@mui/material'
import React from 'react'

export const CheckingAuth = () => {
    return (
        <Grid container component="main" sx={{ height: '100vh' }}>
            <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                    backgroundImage: 'url(https://source.unsplash.com/random)',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: (t) =>
                        t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />


            <Grid item xs={12} sm={8} md={5}
                component={Paper}
                elevation={6} square
                alignItems="center" justifyContent="center"
            >

                <Grid item
                    className='box-shadow'
                    sx={{
                        my: 38,
                        mx: 10,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <CircularProgress color='warning' />
                    <Typography variant='h5' sx={{mt:1}}>Comprobando...</Typography>

                </Grid>

            </Grid>
        </Grid>


    )
}
