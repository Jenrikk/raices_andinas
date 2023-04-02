import { CircularProgress, Grid, Typography } from "@mui/material"
import { Box } from "@mui/system"



export const LoadingView = () => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: 'calc(100vh - 110px)', bgcolor: 'primary.main', }}
        >
            <Grid item xs={12}>
                <CircularProgress color="inherit" />
            </Grid>
            <Grid item xs={12}>
                <Typography variant='h5'>Cargando</Typography>
            </Grid>

        </Grid>
    )
}
