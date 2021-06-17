import React from 'react';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { useHistory } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

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
  avatar: {
    margin: theme.spacing(1),
    height: 50,
    width: 200
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
        <Grid container alignItems='center' className={classes.grid}>
          <Grid item md={5}>
            <nav>
              <Link variant="button" color="textPrimary" onClick={ ()=> history.push("/pedidos", props)} className={classes.link}>
                Pedidos
              </Link>
              <Link variant="button" color="textPrimary" onClick={ ()=> history.push("/donaciones", props)}className={classes.link}>
                Donaciones
              </Link>
            </nav>
          </Grid>
          <Grid item md={4}>
            <Avatar variant="square" src="/assets/img/logo.png" className={classes.avatar} onClick={ ()=> history.push("/sign-in", props)}/>
          </Grid>
          <Grid item md={3}>
            <Button color="primary" variant="outlined" onClick={ ()=> history.push("/profile", props)} className={classes.link}>
              {props.userData.nombre}
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}