import { Google } from '@mui/icons-material'
import { Button, Grid, TextField, Typography, Link } from '@mui/material'
import React from 'react'
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from '../layout/AuthLayout';

export const LoginPage = () => {
  return (
    <AuthLayout title='Login'>

      <form>
        <Grid container sx={{ maxWidth:400,  }}>
          <Grid item xs={12} sm={12} md={12} sx={{ mt: 2, mb: 1 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="correo@gmail.com"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} sx={{ mt: 1, mb: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="xxxxxxxxxx"
              fullWidth
            />
          </Grid>
          <Grid container  sx={{ mb: 2, maxWidth:400,  }}>
            <Grid item xs={12} sm={12} md={12}>
              <Button  variant='contained' fullWidth sx={{ backgroundColor: 'secondary.main'}}>Login</Button>
            </Grid>
          </Grid>

        </Grid>
      </form>

    </AuthLayout>

  )
}