import { Toolbar } from '@mui/material'
import { Box } from '@mui/system'
import { Footer, NavBar } from '../components'

export const RaicesLayout = ({children}) => {
  return (
    <Box  sx={{ display: 'flex' }}  className='animate__animated animate__fadeIn animate__faster'>

        {/* NavBar */}
        <NavBar />

        {/* MAIN */}
        <Box
            component='main'
            sx={{ flexGrow: 1, p: 0 }}
            // maxWidth={false}
            // disableGutters
        >
            <Toolbar />

            {children}

            <Footer />

        </Box>

        {/* Footer */}
        {/* <Footer /> */}

    </Box>
  )
}
