import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { NavBar, Copyright } from './common.component'

const useStyles = makeStyles((theme) => ({
  title:{
    textAlign: 'left'
  },
}));

export default function Pedidos(props) {
  const classes = useStyles();
  const { nombre } = props.location.state;
  const pedidos = [
      {
          id: 55,
          elemento: "Muletas",
          fechaInicio: "27/09/2020",
          comentarios: "necesito 2 muletas urgente",
          imagen: "https://www.farmaciasrp.com.ar/4291-thickbox_default/muletas-de-aluminio-regulable-ch-med-gde-el-par.jpg",
          usuario: {
            id: 123,
            nombre: "Pablo",
            apellido: "Perez",
            provincia: "CABA - Buenos Aires"
          }
      },
      {
        id: 55,
        elemento: "Muletas",
        fechaInicio: "27/09/2020",
        comentarios: "necesito 2 muletas urgente",
        imagen: "https://www.farmaciasrp.com.ar/4291-thickbox_default/muletas-de-aluminio-regulable-ch-med-gde-el-par.jpg",
        usuario: {
          id: 123,
          nombre: "Pablo",
          apellido: "Perez",
          provincia: "CABA - Buenos Aires"
        }
    }
  ]
  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <NavBar 
        nombre={nombre}
      />
      <div>
        <Typography variant="h4" gutterBottom className={classes.title}>
          Pedidos
        </Typography>
        {JSON.stringify(pedidos)}
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}