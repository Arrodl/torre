import { Button, Container, Divider, Grid, makeStyles, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        width: '100vw',
    },
    left: {
        backgroundColor: theme.palette.secondary.main,
    },
    right: {
        display: 'flex',
        padding: '10vw',
        margin: '0 -5px',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    textField: {
        color: 'white',
    },
    divider: {
        marginTop: 15,
        marginBottom: 15,
    },
    a: {
        color: theme.palette.secondary.main,
    }
}));

const Home = (props) => {
    const classes = useStyles();

    const [username, setUsername] = useState("");

    const searchUsernameOpportunities = (e) => {
        e.preventDefault();
        props.history.push(`/${username}`);
    };
    
    return (
        <Grid container className={classes.root}>
            <Grid item xs={false} sm={false} md={6} lg={6} xl={6} className={classes.left} />
            <Grid item xs={false} sm={false} md={6} lg={6} xl={6}
                className={classes.right}
            >
                <form onSubmit={searchUsernameOpportunities}>
                    <Typography variant="h4" color="primary">Trace job opportunities.</Typography>
                    <Divider className={classes.divider} />
                    <TextField
                        className={classes.textField}
                        autoComplete="on"
                        autoCapitalize
                        label="username"
                        variant="outlined"
                        fullWidth
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <Divider className={classes.divider} />
                    <Button color="secondary" type="submit" fullWidth>
                        Go!
                    </Button>
                    <Divider className={classes.divider} />
                    <Typography variant="body2" color="primary">
                        You must have and account at <a className={classes.a} href="https://torre.co">torre.co</a>
                    </Typography>
                </form>
            </Grid>
        </Grid>
    );
};

export default Home;