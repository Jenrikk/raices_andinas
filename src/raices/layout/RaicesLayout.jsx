import { Toolbar } from '@mui/material'
import { Box } from '@mui/system'
import { NavBar } from '../components'

export const RaicesLayout = ({children}) => {
  return (
    <Box  sx={{ display: 'flex' }}>

        {/* NavBar */}
        <NavBar />

        <Box
            component='main'
            sx={{ flexGrow: 1, p: 3 }}
        >
            <Toolbar />

            {children}

        </Box>

    </Box>
  )
}
