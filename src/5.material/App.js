import React, { Component, Fragment } from 'react';

import Button from '@material-ui/core/Button';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Grid from '@material-ui/core/Grid';


/**
 *  https://material-ui.com/getting-started/installation/
 *  위 주소로가서 설치하면 됨.
 * 
 *  npm 으로 아래 두개를 설치하고 
 *  pm install @material-ui/core
 *  npm install @material-ui/icons
 * 
 *  index.html에  head안에 아래 두줄을 적는다.
 *  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">
 *  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
 */


class App extends Component {

    handleChange = (e) => {

    }

    render() {
        return (<Fragment>
            <AppBar position="static">
                <Tabs onChange={this.handleChange}>
                    <Tab label="Item One" />
                    <Tab label="Item Two" />
                    <Tab label="Item Three" />
                </Tabs>
            </AppBar>

            <Grid container spacing={16} style={{ margin: "16px" }}>
                <Grid item xs={6}>
                    <Card >
                        <CardHeader
                            avatar={
                                <Avatar aria-label="Recipe">
                                    R
            </Avatar>
                            }
                            action={
                                <IconButton>
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            title="Shrimp and Chorizo Paella"
                            subheader="September 14, 2016"
                        />
                        <CardMedia
                            image="/static/images/cards/paella.jpg"
                            title="Paella dish"
                        />
                        <CardContent>
                            <Typography component="p">
                                This impressive paella is a perfect party dish and a fun meal to cook together with your
                                guests. Add 1 cup of frozen peas along with the mussels, if you like.
                     </Typography>
                        </CardContent>
                        <CardActions disableActionSpacing>
                            <IconButton aria-label="Add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                            <IconButton aria-label="Share">
                                <ShareIcon />
                            </IconButton>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Button variant="contained">Default</Button>
                    <Button variant="contained" color="primary" >Primary</Button>
                </Grid>
            </Grid>
        </Fragment>)
    }
}

export default App;