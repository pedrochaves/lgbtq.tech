import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import RainbowBar from '../components/RainbowBar';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: `${theme.spacing.unit * 4}px ${theme.spacing.unit * 2}px`
  }
});

const Layout = (props) => {
  return (
    <div>
      <RainbowBar/>
      <section className={props.classes.root}>
        {props.children}
      </section>
    </div>
  );
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Layout);
