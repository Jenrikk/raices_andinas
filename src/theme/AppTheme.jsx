import { CssBaseline, ThemeProvider } from "@mui/material"
import { raicesTheme } from "./raicesTheme"


export const AppTheme = ({children}) => {
  return (
    <ThemeProvider theme={ raicesTheme}>

        <CssBaseline />

        {children}

    </ThemeProvider>
  )
}
