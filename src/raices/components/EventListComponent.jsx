import { useEffect, useState } from 'react';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography, } from '@mui/material';
import iguana from './../../assets/images/contemplative_reptile.jpg'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { startAddNewEntry, startLoadingEntries } from '../../store/entries/thunks';
import { collection, getDocs, query, where } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import { EntryItemComponent } from './EntryItemComponent';



export const EventListComponent = () => {
    const { status } = useSelector(state => state.auth);
    const { errorMessage } = useSelector(state => state.entries);
    const entriesStatus = useSelector(state => state.entries.status);
    const { entries } = useSelector(state => state.entries);
    const dispatch = useDispatch();

    console.log(entriesStatus)

    useEffect(() => {
        if (entriesStatus === 'idle') {
            dispatch(startLoadingEntries());
        }

    }, []);

    console.log('soy EventListComponent');


    return (
        <Grid container component='section' direction='row' sx={{ p: 1, }} >

            <Grid item xs={12} sm={12} md={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 1, mt: 1 }}>
                <Typography sx={{ typography: { xs: 'h4', sm: 'h3', md: 'h2' } }}>
                    Nuestros ultimos eventos
                </Typography>
                <Box display={(status === 'authenticated') ? '' : 'none'}>
                    <Button component={Link}
                        to='/event/new'
                        sx={{
                            backgroundColor: 'transparent',
                            color: 'error.main',
                            mt: 2, ml: 1,
                            ':hover': { color: 'inherit' }
                        }}
                    >
                        Agregar evento
                    </Button>
                </Box>
            </Grid>

            {
                errorMessage && <Typography variant='h4'>{errorMessage}</Typography>
            }

            {/* TODO: If entriesStatus is 'loading' show a loadingComponent,if not, the entries */}
            {
                (entriesStatus === 'loading') && <Typography variant='h4'>Cargando...</Typography>
            }


            <Grid container item margin='auto' maxWidth={1300}
                sx={{ display: 'grid', width: '100%', gap: 1, 
                    gridTemplateColumns: {xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(2, 1fr)'}
                }} 
            >
                {
                    entries.map(entry => (
                        <EntryItemComponent key={entry.id} entry={entry}/>
                    ))
                }



                {/* <Grid item p={2} xs={12} sm={6} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Card sx={{ maxWidth: 590 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image={iguana}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid> */}

            </Grid> {/* //end of Grid container item */}


        </Grid>
    )
}
