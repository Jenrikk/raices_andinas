import { ContactPhone, ContactPhoneOutlined,  LoginOutlined, Search } from '@mui/icons-material'
import { AppBar, Grid, Button, Divider, IconButton, InputBase, Toolbar, Typography } from '@mui/material'
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
            sx={{ display: 'flex', alignItems: 'flex-end', height: 126, width: '100%'}}
        >
            <Toolbar 
                sx={{
                    height: '100%',
                    width: '66%',
                    padding: '0px 0px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    // flexDirection: 'column',
                    justifyContent: 'flex-end',
                    // alignItems: 'flex-end',
                    alignContents: 'space-between',
                }}
            >
                
                <Stack direction="row" 
                    divider={<Divider orientation="vertical" flexItem />} 
                    spacing={1}
                    sx={{
                        backgroundColor: 'secondary.main', 
                        color: 'inherit',
                        height: `calc(33%)`,
                        marginTop: 0,
                     }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', ml: 1 }}>
                        <Search />
                        <InputBase
                            sx={{ ml: 1, }}
                            placeholder="algo"
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
                        height: `calc(33%)`,
                        marginTop: 0,
                        alignSelf: 'flex-end'
                     }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', ml: 1 }}>
                        <Search />
                        <InputBase
                            sx={{ ml: 1, }}
                            placeholder="algo"
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
