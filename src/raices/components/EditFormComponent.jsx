import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { uploadBytes, getDownloadURL, ref } from "firebase/storage";
import { FirebaseStorage } from '../../firebase/config';
import { useGetLastFolder } from '../../hooks';

import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { toolbarOptions } from '../../quill/moduleParts'

import ImageResize from 'quill-image-resize-module-react'

import { Save, UploadFileOutlined } from '@mui/icons-material';
import { Box, Button, CircularProgress, Grid, IconButton, Paper, TextField, Typography } from '@mui/material'

import { startAddNewEntry, startLoadingEntryForUpdate, } from '../../store/entries/thunks';
import { useOnFileInputChange } from '../../hooks/useOnFileInputChange';
import { useParams } from 'react-router-dom';
import { useForm, Controller, useController } from "react-hook-form";

Quill.register('modules/imageResize', ImageResize)



export const EditFormComponent = () => {
    const { entryId } = useParams();
    const dispatch = useDispatch();

    const { entryForEdition, errorMessage, status } = useSelector(state => state.entries);

    const { control, handleSubmit, reset, register, setValue, formState  } = useForm();


    // it gets the entry with the URL params
    useEffect(() => {
        dispatch(startLoadingEntryForUpdate(entryId));
    }, [])

    // reset the defaultValues of useForm with the entry data (populated data)
    useEffect(() => {
        let entryData = {
            title: entryForEdition?.title,
            coverImg: entryForEdition?.cover_img,
            description: entryForEdition?.description,
            imgPath: entryForEdition?.imagesPath
        }
        reset(entryData);

    }, [entryForEdition])

    console.log(entryForEdition);


    const quillRef = useRef();

    console.log('soyEditFormComponent');
    // with these 2 lines it handle the coverImg field:
    const fileInputRef = useRef();
    const { onFileInputChange, setImageFile } = useOnFileInputChange(entryForEdition?.imagesPath, setValue);


    const onSubmit = (e) => {
        e.preventDefault();
        // gather all the fields using js vanilla
        const { coverImg, title, description, imgPath } = Object.fromEntries(new window.FormData(e.target));
        // and the content of the editor
        const quillElementValue = quillRef.current.value;

        const entryObject = {
            postType,
            coverImg,
            title,
            description,
            quillElementValue,
            imgPath,
        };
        console.log(entryObject);

        // upload the entry object dispatching the thunk fn()
        dispatch(startAddNewEntry(entryObject));

        // clear the editor
        const element = document.getElementsByClassName("ql-editor");
        element[0].innerHTML = "";
        // clear the inputs
        e.target.reset();
        setImageFile('');

        //Redirect to All Events/Projects

    };


    const imageHandler = () => {
        // get the path (value) set on the TextField with id="imagenPath"
        const imagenPath = document.getElementById('imagenPath').value;

        const input = document.createElement("input");
        input.setAttribute("type", "file");
        input.setAttribute("accept", "image/*");
        input.click();
        input.addEventListener("change", async () => {
            const editor = quillRef.current.getEditor();
            const file = input.files[0];
            const range = editor.getSelection(true);
            try {
                // File name: "image/event/Date.now()" || "image/project/Date.now()"
                const storageRef = ref(
                    FirebaseStorage,
                    `${imagenPath}/${Date.now()}`
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
            imageResize: {
                // parchment: Quill.import('parchment'),
                modules: ['Resize', 'DisplaySize']
            }
        };
    }, []);

    if (!entryForEdition) {
        return <>
            <Typography variant='h4' sx={{ m: 2 }}>{errorMessage}</Typography>
        </>
    }

    return (
        <Grid container component='section' direction='row' sx={{ p: 1, }} >

            <Grid item xs={12} sm={12} md={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 1, mt: 1 }}>
                <Typography sx={{ typography: { xs: 'h4', sm: 'h3', md: 'h2' } }}>
                    Estás editando: "{entryForEdition.title}"
                </Typography>
            </Grid>

            <Grid container sx={{ margin: 'auto', display: 'flex', justifyContent: 'center' }}>
                <Paper elevation={7}
                    sx={{ mt: 1, mb: 1, }}
                >
                    <Box component='form' sx={{ margin: 2 }} onSubmit={handleSubmit(onSubmit)}>
                        <Grid container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                            <Grid item>
                                {
                                    (status === "loading")
                                        ? <CircularProgress color='error' size={30} />
                                        : <Button color='inherit' type='submit' disabled={(formState?.defaultValues?.coverImg === '')}>
                                            <Save />
                                        </Button>
                                }

                            </Grid>

                            <Grid item xs={12} sm={12} md={12} sx={{ mt: 3, mb: 1, display: 'flex' }}>
                               
                                <input
                                    type="file" ref={fileInputRef}
                                    onChange={onFileInputChange}
                                    accept="image/png, image/jpeg" style={{ display: 'none' }}
                                />
                                <IconButton
                                    color='inherit'
                                    disabled={(status === 'loading')}
                                    onClick={() => fileInputRef.current.click()}
                                    sx={{
                                        color:
                                            (formState?.defaultValues?.coverImg === '')
                                                ? 'red'
                                                : 'inherit'
                                    }}
                                >
                                    <UploadFileOutlined />
                                </IconButton>

                                <Controller
                                    name="coverImg"
                                    defaultValue=''
                                    control={control}
                                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                                        <TextField
                                            required
                                            variant="outlined"
                                            label="Imagen de Portada"
                                            value={value}
                                            onChange={onChange}
                                            InputProps={{
                                                readOnly: true,
                                            }}
                                            sx={{ minWidth: 460 }}
                                        />
                                    )}
                                />
                            </Grid>

                            <Grid item xs={12} sm={12} md={12} sx={{ mt: 2, mb: 1, }}>
                                <Controller
                                    name="title"
                                    defaultValue=''
                                    control={control}
                                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                                        <TextField
                                            required
                                            variant="outlined"
                                            label="Titulo"
                                            value={value}
                                            onChange={onChange}
                                            sx={{ minWidth: 500 }}
                                        />
                                    )}
                                />
                            </Grid>

                            <Grid item xs={12} sm={12} md={12} sx={{ mt: 2, mb: 1 }}>
                                <Controller
                                    name="description"
                                    defaultValue=''
                                    control={control}
                                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                                        <TextField
                                            required
                                            variant="outlined"
                                            label="Descripción"
                                            value={value}
                                            onChange={onChange}
                                            sx={{ minWidth: 500 }}
                                            multiline
                                            rows={4}
                                        />
                                    )}
                                />
                            </Grid>

                            <Grid item xs={12} sm={12} md={12} sx={{ mt: 2, mb: 1 }}>

                                <Controller
                                    name="imgPath"
                                    defaultValue=''
                                    control={control}
                                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                                        <TextField
                                            id='imagenPath'
                                            variant="outlined"
                                            label="Carpeta donde iran tus imagenes"
                                            value={value}
                                            InputProps={{
                                                readOnly: true,
                                            }}
                                            sx={{ minWidth: 500 }}
                                        />
                                    )}
                                />
                            </Grid>

                            <Grid item xs={12} sm={12} md={12} sx={{ mt: 2, mb: 1 }}>

                                <ReactQuill theme="snow" modules={modules} ref={quillRef} />
                            </Grid>

                        </Grid>
                    </Box>
                </Paper>

            </Grid>  {/* end of  form container  */}

        </Grid>
    )
}
