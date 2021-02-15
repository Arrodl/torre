import { Avatar, Card, CardContent, CardHeader, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    root: {

    },
    avatar: {
        height: theme.spacing(5),
        width: theme.spacing(5),
        cursor: 'pointer',
    },
    avatarGrid: {
        position: 'relative'
    }
}));

const Opportunity = ({ data, history }) => {
    const classes = useStyles();
    
    const organizations = data.organizations.map((org) => org.name);
    
    return (
        <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
            <Card variant="outlined">
                {data.compensation && data.compensation.visible && data.compensation.data && (
                    <CardHeader
                        title={<Typography color="primary" variant="caption">{data.compensation.data.currency} {data.compensation.data.minAmount} - {data.compensation.data.maxAmount}</Typography>}
                        subheader={<Typography color="primary" variant="inherit"> {data.compensation.data.periodicity.toUpperCase()}</Typography>}
                    />
                )}
                <CardContent>
                    <Typography variant="subtitle1" color="primary">
                        {data.objective}
                    </Typography>
                    <Typography variant="subtitle2" color="primary">
                        {organizations.join(' ')}
                    </Typography>
                </CardContent>
                <CardContent>
                    <Grid container>
                        {data.members.map((mem, index) => (
                            <Avatar
                                key={mem.username}
                                alt={mem.name}
                                src={mem.picture}
                                className={classes.avatar}
                                style={{
                                    left: index * 0.1,
                                    position: 'relative'
                                }}
                                onClick={() => history.push(`/${mem.username}`)}
                            />
                        ))}
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Opportunity;