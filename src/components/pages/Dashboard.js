import { CircularProgress, Container, makeStyles, Paper, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setGlobalAttribute } from '../../actions';
import { retrieveUser } from '../../actions/rest';

const useStyles = makeStyles((theme) => ({
    notRenderRoot: {
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
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

    if (info.error) {
        return (
            <div className={classes.notRenderRoot}>
                <Typography variant='subtitle1' color="error">
                    {info.error}
                </Typography>
            </div>
        );
    }

    return (
        <Container>

        </Container>
    );
};

export default Dashboard;