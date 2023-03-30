import { ContactPhone, ContactPhoneOutlined,  LoginOutlined, Search } from '@mui/icons-material'
import { AppBar, Button, Divider, IconButton, InputBase, Toolbar, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'

const inputCSS = {
    width: '100%',
    fontSize: '14px',
    border: '1px solid red',
    borderColor: 'red'
}

export const NavBar = () => {
    return (
        <AppBar
            position="fixed"
            sx={{ height: 126, width: '100%'}}
        >
            <Toolbar 
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                }}
            >
                <Stack direction="row" 
                    divider={<Divider orientation="vertical" flexItem />} 
                    spacing={1}
                    sx={{
                        backgroundColor: 'secondary.main', 
                        color: 'inherit',
                        height: `calc(100% - 22px)`,
                        marginTop: 0,
                     }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', ml: 1 }}>
                        <Search />
                        <InputBase
                            sx={{ ml: 1, }}
                            placeholder="Cinco marzada"
                        />
                    </Box>
                    <Button variant="outlined" 
                        startIcon={<ContactPhoneOutlined />}
                        sx={{ backgroundColor: 'transparent', color: 'inherit' }}
                    >
                        Contacto
                    </Button>
                    <Button variant="outlined" 
                        startIcon={<LoginOutlined />}
                        sx={{ backgroundColor: 'transparent', color: 'inherit' }}
                    >
                        Acceso usuarios
                    </Button>
                </Stack>


                <Stack direction="row" 
                    divider={<Divider orientation="vertical" flexItem />} 
                    spacing={1}
                    sx={{
                        backgroundColor: 'secondary.main', 
                        color: 'inherit',
                        height: `calc(100% - 22px)`,
                        marginTop: '-22px',
                     }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', ml: 1 }}>
                        <Search />
                        <InputBase
                            sx={{ ml: 1, }}
                            placeholder="Cinco marzada"
                        />
                    </Box>
                    <Button variant="outlined" 
                        startIcon={<ContactPhoneOutlined />}
                        sx={{ backgroundColor: 'transparent', color: 'inherit' }}
                    >
                        Contacto
                    </Button>
                    <Button variant="outlined" 
                        startIcon={<LoginOutlined />}
                        sx={{ backgroundColor: 'transparent', color: 'inherit' }}
                    >
                        Acceso usuarios
                    </Button>
                </Stack>
            </Toolbar>

        </AppBar>
    )
}
