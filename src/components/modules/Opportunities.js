import { Button, makeStyles, Grid, Typography, CircularProgress } from '@material-ui/core';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { retrieveOpportunities } from '../../actions';
import Opportunity from './Opportunity';

const useStyles = makeStyles((theme) => ({
    loadingRoot: {
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
}));

const Opportunities = (props) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const opportunities = useSelector((state) => state.opportunities);
    const [size] = useState(30);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        dispatch(retrieveOpportunities({ offset, size }));
    }, [size, offset]);

    return (
        <>
            <Typography variant="h4" color="primary">Who works on the companies?</Typography>
            <Grid container spacing={2} style={{ marginTop: 15 }}>
                {opportunities.data.map((opportunity) => (<Opportunity key={opportunity.id} history={props.history} data={opportunity} />))}
                {/* {opportunities.loading && (
                )} */}
                <div className={classes.loadingRoot}>
                    <CircularProgress color="secondary" />
                </div>
                {opportunities.error && (
                    <Grid item xs={12}>
                        <Typography variant="subtitle2" color="error">{opportunities.error}</Typography>
                    </Grid>
                )}
                <Grid item xs={12} style={{ marginTop: 15, marginBottom: 25 }}>
                    <Button
                        fullWidth
                        variant="contained"
                        color="secondary"
                        onClick={() => setOffset(offset + 1)}
                    >
                        Load more...
                    </Button>
                </Grid>
            </Grid>
        </>
    );
};

export default Opportunities;