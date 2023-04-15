import { ContactPhoneOutlined, LoginOutlined, LogoutOutlined, Search } from '@mui/icons-material'
import { AppBar, Grid, Button, Divider, IconButton, InputBase, Toolbar, Typography, styled } from '@mui/material'
import { Box, Stack } from '@mui/system'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'


const StyledStackYellow = styled(Stack)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    color: 'inherit',
    height: `calc(33%)`,
    marginTop: 0,
    alignSelf: 'flex-end',
}));
const StyledStackRed = styled(StyledStackYellow)(({ theme }) => ({
    backgroundColor: theme.palette.error.main,
    color: theme.palette.primary.main,
    height: `calc(33%)`,
    alignSelf: 'flex-end',
    // flexGrow: 1,
    justifyContent: 'flex-end'
}));

export const NavBar = () => {
    const {status, email} = useSelector( state => state.auth);
    const nombre = email.split('@')[0];
    // console.log(nombre);

    return (
        <AppBar
            position="fixed"
            sx={{ height: 130, width: '100%' }}
        >

            <Toolbar disableGutters
                sx={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
            >
                <Box
                    component="img"
                    sx={{ height: 125 }}
                    alt="Logo"
                    src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_e7b8a53bf9ee1f0023a60ce6644dd5f8/flaticon.jpg"
                />

                <Box component="div"
                    sx={{
                        // / flexGrow: 1,
                        height: '100%',
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                    }}
                >

                    <StyledStackYellow direction="row"
                        divider={<Divider orientation="vertical" flexItem />}
                        spacing={1}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', ml: 1 }}>
                            <Search />
                            <InputBase
                                sx={{ ml: 1, }}
                                placeholder="Buscador"
                            />
                        </Box>
                        <Button variant="text"
                            startIcon={<ContactPhoneOutlined />}
                            sx={{ backgroundColor: 'transparent', color: 'inherit' }}
                        >
                            Contacto
                        </Button>
                        <Button variant="text"
                            startIcon={(status === 'authenticated') ? <LogoutOutlined /> : <LoginOutlined />}
                            sx={{ backgroundColor: 'transparent', color: 'inherit' }}
                        >
                            {(status === 'authenticated') ? nombre : 'Acceso usuarios'}
                        </Button>
                    </StyledStackYellow>

                    <StyledStackRed direction="row"
                        divider={<Divider orientation="vertical" flexItem />}
                        spacing={1}
                    >
                        <Button component={Link} to='/' 
                            sx={{ backgroundColor: 'transparent', color: 'inherit' }}
                        >
                            Quiénes somos
                        </Button>
                        <Button component={Link} to='/' 
                            sx={{ backgroundColor: 'transparent', color: 'inherit' }}
                        >
                            Proyectos
                        </Button>
                        <Button component={Link} to='/' 
                            sx={{ backgroundColor: 'transparent', color: 'inherit' }}
                        >
                            Eventos 
                        </Button>
                        
                    </StyledStackRed>

                </Box>


            </Toolbar>

        </AppBar>
    )
}