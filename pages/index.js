import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Layout from '../components/Layout';

const styles = theme => ({
  card: { height: 460 },
  gif: { height: 345 }
});

const Index = (props) => {
    return (
      <Layout>
        <Grid container direction="row" justify="center" alignItems="center" spacing={16}>
          <Grid item xs={6}>
            <Card className={props.classes.card}>
              <CardActionArea>
                <CardMedia
                  className={props.classes.gif}
                  image="https://media.giphy.com/media/1dBJg6SYP0na8/giphy.gif"
                  title="So gay"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Apoio a pessoas LGBTQ+
                  </Typography>
                  <Typography component="p">
                    Em breve
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Layout>
    );
};

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Index);
