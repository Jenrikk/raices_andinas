import { DeleteOutline, EditOutlined } from '@mui/icons-material';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startDeletingEntry } from '../../store/entries/thunks';
import { useConfirm } from "material-ui-confirm";

export const EntryItemComponent = ({entry}) => {
    const confirm = useConfirm();

    const { status } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const newDescription = useMemo(() => {
        return entry.description.length > 190
                ? entry.description.substring(0, 190) + '...'
                : entry.description;

    }, [entry.description])

    const onEdit = (id) => {
        console.log(`editando ${id}`);
    };

    const onDelete = (id) => {
        confirm({
            title: "Estás seguro de que quieres BORRAR esta entrada?",
            description: "Esta acción será permanente!",
            confirmationButtonProps: { color: 'error', variant: 'outlined' },
            cancellationButtonProps: {  color: 'error', variant: 'outlined' },
        })
            .then(() => {
                dispatch(startDeletingEntry(id));
            })
            .catch(() => {
                /* ... */
            });
        
    };

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
                    <Typography variant="h6" color="text.secondary">
                        {newDescription}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color='inherit'>Share</Button>
                    <Button size="small" color='inherit'>Learn More</Button>
                    <Box display={(status === 'authenticated') ? '' : 'none'}>
                        <Button size="small" color='info' onClick={() => onEdit(entry.id)} >
                            <EditOutlined />
                            Editar
                        </Button>
                        <Button size="small" color='error' onClick={() => onDelete(entry.id)} >
                            <DeleteOutline />
                            Borrar
                        </Button>
                    </Box>
                    
                </CardActions>
            </Card>
        </Grid>
    )
}
