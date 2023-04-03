import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography, autocompleteClasses } from '@mui/material';
import iguana from './../../assets/images/contemplative_reptile.jpg'



export const EventListComponent = () => {
    return (
        <Grid container direction='row' sx={{ height:700, p: 3, display: 'flex', justifyContent: 'center' }}
        >
            <Grid item xs={12} sm={12} md={12} sx={{display: 'flex', justifyContent: 'center'}}>
                <Typography variant="h2">
                    Nuestros ultimos eventos
                </Typography>
            </Grid>

            <Grid container item spacing={2} xs={12} sm={12} md={12} sx={{maxWidth: 'calc(80%)' }}>
                <Grid item xs={6} sm={6} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
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
                <Grid item xs={6} sm={6} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
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
                <Grid item xs={6} sm={6} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
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
                <Grid item xs={6} sm={6} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
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
