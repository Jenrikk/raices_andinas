import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material'
// import { useQuill } from 'react-quilljs';
// import 'quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { modules } from '../../quill/modules'

export const FormComponent = ({ postType }) => {
  // const {quill, quillRef } = useQuill();
  // {
  //   modules: {
  //     toolbar: toolbar,
  //   }
  // }



  return (
    <Grid container component='section' direction='row' sx={{ p: 1, }} >

      <Grid item xs={12} sm={12} md={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 1, mt: 1 }}>
        <Typography sx={{ typography: { xs: 'h4', sm: 'h3', md: 'h2' } }}>
          Estas agregando un {postType}
        </Typography>
      </Grid>

      <Grid container sx={{margin: 'auto', display: 'flex', justifyContent: 'center'}}>
        <Paper elevation={7}
          sx={{mt: 1, mb: 1,}}
        >
          <Box component='form' sx={{margin: 2}}>
            <Grid container sx={{display: 'flex', flexDirection:'column', alignItems: 'center'}}>
              <Grid item xs={12} sm={12} md={12} sx={{ mt: 2, mb: 1 }}>
                <TextField
                  variant="outlined"
                  label="Titulo"                
                />

              </Grid>
              
              <Grid item xs={12} sm={12} md={12} sx={{ mt: 2, mb: 1 }}>
                <TextField
                  label="Descripción" 
                  multiline
                  rows={4}
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12} sm={12} md={12} sx={{ mt: 2, mb: 1 }}>
                {/* <div ref={quillRef}>
                </div> */}
                <ReactQuill theme="snow" modules={modules}/> 
              </Grid>

            </Grid>
          </Box>
        </Paper>

     </Grid>  {/* end of  form container  */}

    </Grid>
  )
}
