import React, { useEffect, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { InputLabel } from '@material-ui/core';
import { NavBar, Copyright } from './common.component';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { useHistory } from 'react-router-dom';

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
  crear: {
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

export default function CrearDonacion(props) {
  const classes = useStyles();
  const { userData } = props.location.state;
  const [elementos, setElementos] = useState();
  const [elemento, setElemento] = useState();
  const [comentarios, setComentarios] = useState();
  let history = useHistory();

  function obtenerElementosCall(){
    fetch("http://localhost:5000/api/elementos")
      .then(res => res.json())
      .then(res => {
        setElementos(res)
      })
  }

  function crearDonacionCall(){
    const data = {
      usuarioId: userData.id,
      elementoId: elemento,
      comentarios
    }
    fetch("http://localhost:5000/api/donaciones", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(()=> history.push("/misDonaciones", { userData }));
  }

  useEffect(()=>{
    obtenerElementosCall();
  },[]);

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <NavBar 
        userData={userData}  
      />
      <div>
        <Typography variant="h4" gutterBottom className={classes.title}>
          Crear Donación
        </Typography>
        <Grid container alignItems='center' className={classes.grid}>
          <Grid item md={4}>
            <InputLabel
                id="nombrelbl"
                name="nombrelbl"
                className={classes.label}
                margin= 'dense'
              >
                Elemento
            </InputLabel>
          </Grid>
          <Grid item md={8}>
            <Select
              labelId="elementolbl"
              id="elementolbl"
              fullWidth
              value={elemento}
              onChange={(event) => setElemento(event.target.value)}
            >
              {elementos && elementos.map(item => {
                return (
                  <MenuItem value={item.id}>{item.descripcion}</MenuItem>
                )
              })}
            </Select>
          </Grid>
          <Grid item md={4}>
            <InputLabel
                id="nombrelbl"
                name="nombrelbl"
                className={classes.label}
                margin= 'dense'
              >
                Comentarios
            </InputLabel>
          </Grid>
          <Grid item md={8}>
            <TextField
                margin="normal"
                fullWidth
                id="comentarios"
                name="comentarios"
                onChange={(event) => {
                  const { value } = event.target;
                  setComentarios(value);
                }}
              />
          </Grid>
          <Grid item md={9}>
          </Grid>
          <Grid item md={3}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.crear}
              onClick={crearDonacionCall}
            >
              Crear
            </Button>
          </Grid>
        </Grid>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}