import { Avatar, Divider, makeStyles, Typography, Grid, LinearProgress } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    avatar: {
        width: theme.spacing(20),
        height: theme.spacing(20),
    },
    divider: {
        margin: 10
    },
    a: {
        color: theme.palette.secondary.main,
        marginLeft: 2,
        marginRight: 2,
        textDecoration: 'none'
    }
}));

const Profile = ({ data }) => {
    const classes = useStyles();

    const {
        person,
        personalityTraitsResults = { analyses: [] },
    } = data;

    return (
        <>
            <Avatar alt={person.name} src={person.picture} className={classes.avatar} />
            <Divider className={classes.divider} />
            <Typography variant="h5" color="primary">{person.name}</Typography>
            <Typography variant="h6" color="primary">{person.professionalHeadline}</Typography>
            <Divider className={classes.divider} />
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Grid container direction="row" spacing={2} justify="center">
                        {(person.links || []).map((li) => (
                            <Typography key={li.id} variant="subtitle2"><a href={li.address} className={classes.a}>{li.name.toUpperCase()}</a></Typography>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
            <Divider className={classes.divider} />
            <Typography variant="body2" align="justify" color="primary">{person.summaryOfBio}</Typography>
            <Divider className={classes.divider} />
            <Typography variant="h5" align="justify" color="primary">Traits</Typography>
            <Divider className={classes.divider} />
            {personalityTraitsResults.analyses.map((ptr) => {
                const title = ptr.groupId.replace(/-/g, ' ').toUpperCase();

                return (
                    <Grid key={title} style={{ width: '100%' }}>
                        <Typography variant="body2" color="primary">{title}</Typography>
                        <LinearProgress variant="determinate" color="secondary" value={ptr.analysis * 10} />
                    </Grid>
                )
            })}
        </>
    );
}

export default Profile;