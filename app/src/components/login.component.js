import React, { useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom';
//import Image from "material-ui-image";

function Copyright() {
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

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    height: 200,
    width: 600
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#118ECB'
  },
  links: {
      color: '#118ECB',
  }
}));

export default function SignIn() {
  const classes = useStyles();
  let history = useHistory();
  
  const [loginData, setLoginData] = useState({});

  function loginCall(){
    const data = {
      email: "mariano.d.martin@gmail.com",
      password: "password"
    }
    fetch("http://localhost:5000/api/usuarios")
      .then(res => res.json())
      .then(
        result => {
          setLoginData({
            data: result,
            isSuccess: true
          });
        },
        error => {
          setLoginData({error})
        }
      );
  }

  useEffect(()=>{
    if(loginData.isSuccess){
      history.push("/profile", {userData:loginData.data[0]});
    }
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        {/* <Image src="/assets/img/logo.png"/> */}
        <Avatar variant="square" src="/assets/img/logo.png" className={classes.avatar} />
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Dirección de email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Recordarme"
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={loginCall}
          >
            Ingresar
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2" className={classes.links}>
                    Olvidó su contraseña?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2" className={classes.links}>
                {"Registrarse aquí"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}