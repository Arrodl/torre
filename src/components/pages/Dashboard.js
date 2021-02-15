import { CircularProgress, Container, Drawer, makeStyles, Paper, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setGlobalAttribute } from '../../actions';
import { retrieveUser } from '../../actions/rest';
import { Profile } from '../modules';

const drawerWidth = 400;

const useStyles = makeStyles((theme) => ({
    notRenderRoot: {
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    root: {
        display: 'flex',
    },
    drawer: {
        width: drawerWidth,
    },
    content: {
        marginRight: -drawerWidth,
    },
    drawerPaper: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        paddingTop: theme.spacing(5),
        justifyContent: 'flex-start',
        width: drawerWidth,
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        // backgroundColor: theme.palette.background.paper
    }
}));

const Dashboard = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const { info } = useSelector((state) => state.global);

    useEffect(() => {
        const username = props.match.params.username;

        if (username !== "") {
            dispatch(setGlobalAttribute({ key: 'username', value: username }));
            dispatch(retrieveUser(username));
        }
    }, []);
    
    if (info.loading) {
        return (
            <div className={classes.notRenderRoot}>
                <CircularProgress color="secondary" />
            </div>
        );
    }

    if (info.error || !info.data) {
        return (
            <div className={classes.notRenderRoot}>
                <Typography variant='subtitle1' color="error">
                    {info.error}
                </Typography>
            </div>
        );
    }

    return (
        <div className={classes.root}>
            <main className={classes.content}>
            </main>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                anchor="right"
                open
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <Profile data={info.data} />
            </Drawer>
        </div>
    );
};

export default Dashboard;