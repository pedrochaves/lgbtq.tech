import { withStyles } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';
import indigo from '@material-ui/core/colors/indigo';
import orange from '@material-ui/core/colors/orange';
import purple from '@material-ui/core/colors/purple';
import red from '@material-ui/core/colors/red';
import yellow from '@material-ui/core/colors/yellow';

const colorTone = 500;

const styles = theme => ({
  '@keyframes rainbow': {
      '0%': { backgroundColor: purple[colorTone] },
      '14%': { backgroundColor: indigo[colorTone] },
      '28%': { backgroundColor: blue[colorTone] },
      '56%': { backgroundColor: green[colorTone] },
      '70%': { backgroundColor: yellow[colorTone] },
      '84%': { backgroundColor: orange[colorTone] },
      '100%': { backgroundColor: red[colorTone] },
  },
  rainbow: {
    width: '100%',
    height: theme.spacing.unit,
    animation: 'rainbow 35s forwards linear infinite'
  },
});

const RainbowBar = (props) => (<div className={props.classes.rainbow}></div>);

export default withStyles(styles)(RainbowBar);
