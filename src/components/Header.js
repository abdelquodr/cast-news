import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import backgroundImg from '../img/1626.jpg'

const useStyles = makeStyles((theme) => ({
    mainFeaturedPost: {
        position: 'relative',
        height: '85vh',
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        // backgroundImage: 'url()',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        fontFamily: 'Open Sans',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,.3)',
    },
    mainFeaturedPostContent: {
        position: 'relative',
        padding: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(6),
            paddingRight: 0,
        },
    },
}));


const post = {
    // title: 'NEWS CASTER',
    // date: 'Nov 12',
    // description: 'This is a news cast application capable of reporting verbally as it breaks.',
    // image: 'https://source.unsplash.com/random',
    // imageText: 'Image Text',
}

export default function Header(props) {
    const classes = useStyles();

    return (
        <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${backgroundImg})` }}>

            {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />}
            <div className={classes.overlay} />
            <Grid container>
                <Grid item md={6}>
                    <div className={classes.mainFeaturedPostContent}>
                        <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                            {post.title}
                        </Typography>
                        <Typography variant="h5" color="inherit" paragraph>
                            {post.description}
                        </Typography>
                        <Link variant="subtitle1" href="#">

                        </Link>
                    </div>
                </Grid>
            </Grid>
        </Paper>
    );
}

// MainFeaturedPost.propTypes = {
//     post: PropTypes.object,
// };

