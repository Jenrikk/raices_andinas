import { Copyright } from "@mui/icons-material"
import { Typography } from "@mui/material"
import { Box } from "@mui/system"



export const Footer = () => {
    return (
        <Box sx={{ bgcolor: 'secondary.main', p: 6, height: 160, width: '100%', mt: 1  }} component="footer">
            <Typography variant="h6" align="center" gutterBottom>
                Footer
            </Typography>
            <Typography
                variant="subtitle1"
                align="center"
                color="text.secondary"
                component="p"
            >
                Something here to give the footer a purpose!
            </Typography>
            <Copyright />
        </Box>
    )
}
