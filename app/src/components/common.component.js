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
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

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
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
            <Avatar variant="square" src="/assets/img/logo.png" className={classes.avatar} />
          </Grid>
          <Grid item md={3}>
            <Button color="primary" variant="outlined" onClick={handleClick} className={classes.link}>
              {props.userData.nombre}
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={()=> history.push("/profile", props)}>Perfil</MenuItem>
              <MenuItem onClick={()=> history.push("/misdonaciones", props)}>Mis Donaciones</MenuItem>
              <MenuItem onClick={()=> history.push("/mispedidos", props)}>Mis Pedidos</MenuItem>
              <MenuItem onClick={()=> history.push("/sign-in", props)}>Salir</MenuItem>
            </Menu>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}