import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'

export const EntryItemComponent = ({entry}) => {


    return (
        <Grid item key={entry.id} >
            <Card>
                <CardMedia
                    component="img"
                    alt={entry.title}
                    height="140"
                    image={entry.cover_img}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {entry.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {entry.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color='inherit'>Share</Button>
                    <Button size="small" color='inherit'>Learn More</Button>
                </CardActions>
            </Card>
        </Grid>
    )
}
