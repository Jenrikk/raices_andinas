import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { startLoadingEntryForUpdate } from '../../store/entries/thunks';
import { Box, Button, CircularProgress, Grid, Paper, TextField, Typography } from '@mui/material';
import { Save } from '@mui/icons-material';

export const EditFormComponent2 = () => {
  const { entryId } = useParams();
  const dispatch = useDispatch();

  const { entryForEdition, errorMessage, status } = useSelector(state => state.entries);


  // useEffect which execute thunk
  useEffect(() => {
    dispatch(startLoadingEntryForUpdate(entryId));

  }, [])

  console.log(entryForEdition?.id);


  if (!entryForEdition) {
    return <>
      <Typography variant='h4' sx={{ m: 2 }}>{errorMessage}</Typography>
    </>
  }

  return (
    <Grid container component='section' direction='row' sx={{ p: 1, }} >

      <Grid container sx={{ margin: 'auto', display: 'flex', justifyContent: 'center' }}>
        <Paper elevation={7}
          sx={{ mt: 1, mb: 1, }}
        >
          <Box component='form' sx={{ margin: 2 }}
          // onSubmit={handleSubmit} /////////////////////////////////////////////////
          >
            <Grid container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

              <Grid item>
                {
                  (status === "loading")
                    ? <CircularProgress color='error' size={30} />
                    : <Button color='inherit' type='submit'
                    // disabled={(imageFile === '')}  /////////////////////////////////////////////////
                    >
                      <Save />
                    </Button>
                }

              </Grid>

              <Grid item xs={12} sm={12} md={12} sx={{ mt: 2, mb: 1, }}>
                <TextField
                  name='title'
                  required
                  variant="outlined"
                  label="Titulo"
                  sx={{ minWidth: 300 }}
                  value={entryForEdition.title}
                />
              </Grid>

              <Typography variant='h4'>EditFormComponentt</Typography>
            </Grid>

          </Box>

        </Paper>
      </Grid> {/* end of  form container  */}

    </Grid>

  )
}
