import { RaicesLayout } from "../layout/RaicesLayout"
import { IconButton, Typography } from '@mui/material'
import { LoadingView, MainView } from "../views"
import { ArrowDropUp, KeyboardDoubleArrowUp, UpcomingOutlined } from "@mui/icons-material"


export const RaicesPage = () => {
  return (
    <RaicesLayout>


      {/* <LoadingView /> */}


      <MainView />

      <IconButton 
        size="large" 
        sx={{
            color: 'white', 
            backgroundColor: 'error.main',
            ':hover': {backgroundColor: 'error.main', opacity: 0.8},
            position: 'fixed',
            right: 50,
            bottom: 50
        }}>

          <KeyboardDoubleArrowUp sx={{ fontSize: 30 }} />

      </IconButton>
      

    </RaicesLayout>
  )
}
