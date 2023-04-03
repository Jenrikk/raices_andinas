import { Button, Grid, Typography } from "@mui/material"
import { Box, Container, Stack } from "@mui/system"



export const HeaderComponent = () => {
    return (
        <Grid item xs={12} sm={12} md={12}
            sx={{
                height: 320,
                backgroundImage: 'url(https://source.unsplash.com/random)',
                backgroundRepeat: 'no-repeat',
                backgroundColor: (t) =>
                    t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <Box
                sx={{
                    bgcolor: 'transparent',
                    pt: 8,
                    pb: 6,
                    maxHeight: '100%',
                }}
            >
                <Container maxWidth="md">
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="primary.main"
                        gutterBottom
                    >
                        Raices Andinas
                    </Typography>
                    <Typography sx={{ typography: { sm: 'h4', xs: 'h6' } }} align="center" color="primary.main" paragraph>
                        Something short and leading about the collection below—its contents,
                        the creator, etc. Make it short and sweet, but not too short so folks
                        don&apos;t simply skip over it entirely.
                    </Typography>
                </Container>
            </Box>

        </Grid>

    )
}
