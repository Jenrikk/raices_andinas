import { useEffect, useState } from 'react';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography, } from '@mui/material';
import iguana from './../../assets/images/contemplative_reptile.jpg'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { startAddNewEntry } from '../../store/entries/thunks';
import { collection, getDocs, query, where } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';



export const EventListComponent = () => {
    const {status} = useSelector(state => state.auth);

    const [entries, setEntries] = useState([]);

    useEffect(() => {
      const getEvents = async () => {
        const collectionRef = collection(FirebaseDB, `id-admin/raices/entries`);
        const docs = await getDocs(query(collectionRef, where("type", "==", "event")));
        const allEntries = [];
        docs.forEach( doc => {
            allEntries.push(
                {
                    id: doc.id,
                    ...doc.data()
                }
            );
        });

        setEntries(allEntries)
      }

      getEvents();

    }, [])
    
    console.log({entries});



    return (
        <Grid container component='section' direction='row' sx={{  p: 1, }} >

            <Grid item xs={12} sm={12} md={12} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 1, mt: 1}}>
                <Typography sx={{ typography: { xs: 'h4', sm: 'h3', md: 'h2'  } }}>
                    Nuestros ultimos eventos
                </Typography>
                <Box display={(status === 'authenticated') ? '' : 'none'}>
                    <Button component={Link}
                        to='/event/new' 
                        sx={{ 
                            backgroundColor: 'transparent', 
                            color: 'error.main', 
                            mt: 2, ml: 1,
                            ':hover': {color: 'inherit'}
                        }}
                    >
                        Agregar evento
                    </Button>
                </Box>
            </Grid>
            <ul>
                {
                    entries.map( entry => (
                        <li key={entry.id} >{entry.title}</li>
                    ))
                }
            </ul> 

            <Grid container item spacing={2} xs={12} sm={12} md={12} margin='auto' >
                <Grid item p={2} xs={12} sm={6} md={6} sx={{ display: 'flex', justifyContent: 'center' }} >
                    <Card sx={{ maxWidth: 590, }}>
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
                </Grid>
                <Grid item p={2} xs={12} sm={6} md={6} sx={{ display: 'flex', justifyContent: 'center', }}>
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
                </Grid>
                <Grid item p={2} xs={12} sm={6} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
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
                </Grid>
                <Grid item p={2} xs={12} sm={6} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
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
                </Grid>

            </Grid> {/* //end of Grid container item */}
            

        </Grid>
    )
}
