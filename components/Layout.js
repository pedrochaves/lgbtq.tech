import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import RainbowBar from '../components/RainbowBar';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from 'next/link'

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  root: {
    flexGrow: 1,
    padding: `${theme.spacing.unit * 4}px ${theme.spacing.unit * 2}px`
  },
  appBar: {
    position: 'relative'
  },
  barTitle: {
    flex: 1
  }
});

const Layout = (props) => {
  const { classes } = props;
  return (
    <div>
      <AppBar position="static" color="primary" className={classes.appBar}>
        <RainbowBar/>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap className={classes.barTitle}>
            LGBTQ+
          </Typography>
          <Link href="/quem-somos"><Button color="inherit">Quem somos?</Button></Link>
          <Link href="/quero-ajudar"><Button color="inherit">Quero ajudar</Button></Link>
        </Toolbar>
      </AppBar>
      <section className={classes.root}>
        {props.children}
      </section>
    </div>
  );
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Layout);
