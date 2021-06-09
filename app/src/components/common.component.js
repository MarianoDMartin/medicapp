import React from 'react';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    marginBottom: 20
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
}));

export function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Medicapp
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export function NavBar(props) {
  let history = useHistory();
  const classes = useStyles();

  return (
    <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <nav>
          <Link variant="button" color="textPrimary" onClick={ ()=> history.push("/pedidos", props)} className={classes.link}>
            Pedidos
          </Link>
          <Link variant="button" color="textPrimary" href="#" className={classes.link}>
            Donaciones
          </Link>
        </nav>
        <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
          MEDICAPP
        </Typography>
        
        <Button href="#" color="primary" variant="outlined" className={classes.link}>
          {props.nombre}
        </Button>
      </Toolbar>
    </AppBar>
  );
}