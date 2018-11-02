import { withStyles } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';
import indigo from '@material-ui/core/colors/indigo';
import orange from '@material-ui/core/colors/orange';
import purple from '@material-ui/core/colors/purple';
import red from '@material-ui/core/colors/red';
import yellow from '@material-ui/core/colors/yellow';

const styles = theme => ({
  '@keyframes rainbow': {
      '0%, 100%': { backgroundColor: red[300] },
      '8.33%, 91.63%': { backgroundColor: orange[300] },
      '16.66%, 83.3%': { backgroundColor: yellow[300] },
      '24.99%, 74.97%': { backgroundColor: green[300] },
      '33.32%, 66.64%': { backgroundColor: blue[300] },
      '41.65%, 58.31%': { backgroundColor: indigo[300] },
      '49.98%': { backgroundColor: purple[300] },
  },
  rainbow: {
    width: '100%',
    height: theme.spacing.unit,
    animation: 'rainbow 10s forwards linear infinite'
  },
});

const RainbowBar = (props) => (<div className={props.classes.rainbow}></div>);

export default withStyles(styles)(RainbowBar);
