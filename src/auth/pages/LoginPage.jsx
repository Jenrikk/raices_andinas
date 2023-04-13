import { Google } from '@mui/icons-material'
import { Button, Grid, TextField, Typography, Link } from '@mui/material'
import React from 'react'
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { useDispatch } from 'react-redux';
import { checkingAuthentication } from '../../store/auth/thunks';

export const LoginPage = () => {
  const dispatch = useDispatch();

  const { email, password, onInputChange} = useForm({
    email: 'hola@google.com',
    password: '123456',
  })

  const onSubmit = (ev) => {
    ev.preventDefault();
    // console.log({email, password});
    dispatch(checkingAuthentication(email, password));
  }


  return (
    <AuthLayout title='Login'>

      <form onSubmit={onSubmit}>
        <Grid container sx={{ maxWidth:400,  }}>
          <Grid item xs={12} sm={12} md={12} sx={{ mt: 2, mb: 1 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="correo@gmail.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} sx={{ mt: 1, mb: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="xxxxxxxxxx"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </Grid>
          <Grid container  sx={{ mb: 2, maxWidth:400,  }}>
            <Grid item xs={12} sm={12} md={12}>
              <Button type="submit" variant='contained' fullWidth sx={{ backgroundColor: 'secondary.main'}}>Login</Button>
            </Grid>
          </Grid>

        </Grid>
      </form>

    </AuthLayout>

  )
}