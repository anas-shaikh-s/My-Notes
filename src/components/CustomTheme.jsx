import React from 'react'
import { createMuiTheme, ThemeProvider, Typography } from "@material-ui/core";
import { red, teal } from '@material-ui/core/colors';



const theme = createMuiTheme({
    palette: {
        primary: red,
        secondary: teal
    },
    typography: {
        fontFamily: "Quicksand",
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightBold: 700,
        h3: {
            fontSize: '2rem'
        }
    },
});

const CustomTheme = () => {
    return (
        <ThemeProvider theme={theme}>
            <div>
                <Typography variant='h3' color='primary'>
                    Custom Themed
            </Typography>
            </div>
        </ThemeProvider>
    )
}

export default CustomTheme
