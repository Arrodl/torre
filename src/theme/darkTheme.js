import { colors, createMuiTheme } from "@material-ui/core";

const darkTheme = createMuiTheme({
    overrides: {
        MuiInputBase: {
            root: {
                color: '#fff',
            },
            input: {
                color: '#fff',
            }
        },
        MuiOutlinedInput: {
            notchedOutline: {
                borderColor: '#fff'
            }
        },
        MuiFormLabel: {
            root: {
                color: '#fff'
            }
        },
        MuiFormControl: {
            root: {
                borderColor: '#fff'
            }
        }
    },
    palette: {
        background: {
            default: '#27292d'
        },
        primary: {
            light: '#FFFFFF',
            main: '#FFFFFF',
            contrastText: '#FFFFFF',
            dark: '#ffffff'
        },
        secondary: {
            light: '#cddc39',
            main: '#cddc39',
            dark: '#cddc39',
            contrastText: '#27292d',
        }
    }
});

export default darkTheme;