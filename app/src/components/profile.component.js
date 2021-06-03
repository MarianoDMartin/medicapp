import React from 'react';
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
import { InputLabel } from '@material-ui/core';
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
    alignItems: 'left'
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
  },
  label:{
    textAlign: 'left',
    color: 'black',
    marginBottom:10
  },
  title:{
    textAlign: 'left'
  },
  grid:{
    backgroundColor: 'white',
    padding: 20,
  }
}));

export default function Profile(props) {
  const classes = useStyles();
  const { userData } = props.location.state;

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <div>
        <Typography variant="h4" gutterBottom className={classes.title}>
          Mi Perfil
        </Typography>
        <Grid container alignItems='center' className={classes.grid}>
          <Grid item md={4}>
            <InputLabel
                margin="normal"
                id="nombrelbl"
                name="nombrelbl"
                className={classes.label}
                margin= 'dense'
              >
                Nombre y apellido
            </InputLabel>
          </Grid>
          <Grid item md={8}>
            <TextField
                margin="normal"
                fullWidth
                id="nombre"
                label={userData.nombre + ' ' + userData.apellido}
                name="nombre"
                disabled
              />
          </Grid>
          <Grid item md={4}>
            <InputLabel
                margin="normal"
                id="nombrelbl"
                name="nombrelbl"
                className={classes.label}
                margin= 'dense'
              >
                E-mail
            </InputLabel>
          </Grid>
          <Grid item md={8}>
            <TextField
                margin="normal"
                fullWidth
                id="nombre"
                label={userData.email}
                name="nombre"
                disabled
              />
          </Grid>
          <Grid item md={4}>
            <InputLabel
                margin="normal"
                id="nombrelbl"
                name="nombrelbl"
                className={classes.label}
                margin= 'dense'
              >
                Domicilio
            </InputLabel>
          </Grid>
          <Grid item md={8}>
            <TextField
                margin="normal"
                fullWidth
                id="nombre"
                label={userData.calle + ' ' + userData.numero + ' CP. ' + userData.codigoPostal + ' ' + userData.provincia}
                name="nombre"
                disabled
              />
          </Grid>
          <Grid item md={4}>
            <InputLabel
                margin="normal"
                id="nombrelbl"
                name="nombrelbl"
                className={classes.label}
                margin= 'dense'
              >
                Teléfono
            </InputLabel>
          </Grid>
          <Grid item md={8}>
            <TextField
                margin="normal"
                fullWidth
                id="nombre"
                label={userData.telefono}
                name="nombre"
                disabled
              />
          </Grid>
          <Grid item md={4}>
            <InputLabel
                margin="normal"
                id="nombrelbl"
                name="nombrelbl"
                className={classes.label}
                margin= 'dense'
              >
                Telefono alternativo
            </InputLabel>
          </Grid>
          <Grid item md={8}>
            <TextField
                margin="normal"
                fullWidth
                id="nombre"
                label={userData.telefono2}
                name="nombre"
                disabled
              />
          </Grid>
        </Grid>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}