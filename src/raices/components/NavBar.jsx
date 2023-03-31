import { ContactPhoneOutlined, LoginOutlined, Search } from '@mui/icons-material'
import { AppBar, Grid, Button, Divider, IconButton, InputBase, Toolbar, Typography, styled } from '@mui/material'
import { Box, Stack } from '@mui/system'
import { raicesTheme } from '../../theme/raicesTheme'

const StyledStackYellow = styled(Stack)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    color: 'inherit',
    height: `calc(33%)`,
    marginTop: 0,
    alignSelf: 'flex-start'
}));
const StyledStackRed = styled(StyledStackYellow)(({ theme }) => ({
    backgroundColor: theme.palette.error.main,
    color: theme.palette.primary.main,
    height: `calc(33%)`,
    alignSelf: 'flex-end',
    flexGrow: 1,
    justifyContent: 'flex-end'
}));

export const NavBar = () => {
    return (
        <AppBar
            position="fixed"
            sx={{
                display: 'flex',
                flexDirection: 'row',
                // alignItems: 'flex-end',
                justifyContent: 'space-between',
                height: 126,
                width: '100%'
            }}
        >
            {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Raices Andinas
            </Typography> */}
            
            {/* <AppBar position="static">
                <Toolbar>
                    <Box
                        component="img"
                        sx={{
                            height: 64,
                        }}
                        alt="Your logo."
                        src={Logo}
                    />
                    ...
                </Toolbar>
            </AppBar> */}
            <Box
                component="img"
                sx={{ height: 125 }}
                alt="Logo"
                src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_e7b8a53bf9ee1f0023a60ce6644dd5f8/flaticon.jpg"
            />

            <Toolbar disableGutters
                sx={{
                    height: '100%',
                    width: '66%',
                    pl: 0,
                    display: 'flex',
                    flexWrap: 'wrap',
                    // flexDirection: 'column',
                    justifyContent: 'flex-end',
                    // alignItems: 'flex-end',
                    alignContents: 'space-between',
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
                            placeholder="algo"
                        />
                    </Box>
                    <Button variant="text"
                        startIcon={<ContactPhoneOutlined />}
                        sx={{ backgroundColor: 'transparent', color: 'inherit' }}
                    >
                        Contacto
                    </Button>
                    <Button variant="text"
                        startIcon={<LoginOutlined />}
                        sx={{ backgroundColor: 'transparent', color: 'inherit' }}
                    >
                        Acceso usuarios
                    </Button>
                </StyledStackYellow>

                <StyledStackRed direction="row"
                    divider={<Divider orientation="vertical" flexItem />}
                    spacing={1}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', ml: 1 }}>
                        <Search />
                        <InputBase
                            sx={{ ml: 1, }}
                            placeholder="algo"
                        />
                    </Box>
                    <Button variant="text"
                        startIcon={<ContactPhoneOutlined />}
                        sx={{ backgroundColor: 'transparent', color: 'inherit' }}
                    >
                        Contacto
                    </Button>
                    <Button variant="text"
                        startIcon={<LoginOutlined />}
                        sx={{ backgroundColor: 'transparent', color: 'inherit' }}
                    >
                        Acceso usuarios
                    </Button>
                </StyledStackRed>


            </Toolbar>

        </AppBar>
    )
}