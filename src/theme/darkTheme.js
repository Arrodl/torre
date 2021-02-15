import { colors, createMuiTheme } from "@material-ui/core";

const darkTheme = createMuiTheme({
    overrides: {
        MuiInputBase: {
            root: {
                color: '#EBEBEB',
            },
            input: {
                color: '#EBEBEB',
            }
        },
        MuiOutlinedInput: {
            notchedOutline: {
                borderColor: '#EBEBEB'
            }
        },
        MuiFormLabel: {
            root: {
                color: '#EBEBEB'
            }
        },
        MuiFormControl: {
            root: {
                borderColor: '#EBEBEB'
            }
        }
    },
    palette: {
        background: {
            default: '#27292d',
            paper: '#1F2124'
        },
        primary: {
            light: '#EBEBEB',
            main: '#EBEBEB',
            contrastText: '#EBEBEB',
            dark: '#EBEBEB'
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