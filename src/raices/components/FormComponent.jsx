import { LoginOutlined, Save } from '@mui/icons-material';
import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material'
import { useRef, useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Tiptap } from '../../tiptap/Tiptap';


export const FormComponent = ({ postType }) => {

  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(content);
  };

  const editor = useEditor({
    extensions: [
      StarterKit,
    ],
    content: '<p>Hello World!</p>',
  })

  return (
    <Grid container component='section' direction='row' sx={{ p: 1, }} >

      <Grid item xs={12} sm={12} md={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 1, mt: 1 }}>
        <Typography sx={{ typography: { xs: 'h4', sm: 'h3', md: 'h2' } }}>
          Estas agregando un {postType}
        </Typography>
      </Grid>

      <Grid container sx={{ margin: 'auto', display: 'flex', justifyContent: 'center' }}>
        <Paper elevation={7}
          sx={{ mt: 1, mb: 1, }}
        >
          <Box component='form' sx={{ margin: 2 }} onSubmit={handleSubmit}>
            <Grid container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

              <Grid item>
                <Button color='inherit' type='submit'>
                  <Save />
                </Button>
              </Grid>
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
                { editor && <Tiptap editor={editor} /> }
              </Grid>

            </Grid>
          </Box>
        </Paper>

      </Grid>  {/* end of  form container  */}

    </Grid>
  )
}
