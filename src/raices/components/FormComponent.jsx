import { HourglassTop, Save } from '@mui/icons-material';
import { Box, Button, CircularProgress, Grid, Paper, TextField, Typography } from '@mui/material'
import React, { useMemo, useRef, useState } from 'react';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { toolbarOptions } from '../../quill/moduleParts'
import { uploadBytes, getDownloadURL, ref } from "firebase/storage";
import { FirebaseStorage } from '../../firebase/config';
import { useSelector } from 'react-redux';

export const FormComponent = ({ postType }) => {
  const {isSaving} = useSelector(state => state.raices);

  const quillRef = useRef();

  const [content, setContent] = useState('');

  const handleSave = () => {
    console.log(content);
  };

  const imageHandler = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();
    input.addEventListener("change", async () => {
      const editor = quillRef.current.getEditor();
      const file = input.files[0];
      const range = editor.getSelection(true);
      try {
        // File name: "image/Date.now()"
        const storageRef = ref(
          FirebaseStorage,
          `image/${Date.now()}`
        );
        // Firebase Method : uploadBytes, getDownloadURL
        await uploadBytes(storageRef, file).then((snapshot) => {
          getDownloadURL(snapshot.ref).then((url) => {
            // Inserta imageURL en el editor:
            editor.insertEmbed(range.index, "image", url);
            // Después de insertar la URL, mueva el cursor al espacio detrás de la imagen
            editor.setSelection(range.index + 1);
          });
        });
      } catch (error) {
        console.log(error);
      }
    });
  };


  const modules = useMemo(() => {
    return {
      toolbar: {
        container: toolbarOptions,
        handlers: {
          image: imageHandler,
        },
      },
    };
  }, []);

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
          <Box component='form' sx={{ margin: 2 }}>
            <Grid container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

              <Grid item>
                {
                  (isSaving === "loading")
                    ? <CircularProgress color='error' size={30} />
                    : <Button color='inherit' onClick={handleSave}>
                      <Save />
                    </Button>
                }

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
                
                <ReactQuill theme="snow" modules={modules} onChange={setContent} ref={quillRef}/>
              </Grid>

            </Grid>
          </Box>
        </Paper>

      </Grid>  {/* end of  form container  */}

    </Grid>
  )
}