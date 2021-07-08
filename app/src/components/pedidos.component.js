import React, { useEffect, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { NavBar, Copyright } from './common.component';
import Elemento from './elemento.component';

const useStyles = makeStyles((theme) => ({
  title:{
    textAlign: 'left'
  },
}));

export default function Pedidos(props) {
  const classes = useStyles();
  const { userData } = props.location.state;
  const [pedidos, setPedidos] = useState([]);

  function pedidosCall(){
    fetch("http://localhost:5000/api/pedidos")
      .then(res => res.json())
      .then(
        result => {
          setPedidos(result);
        }
      );
  }

  useEffect(()=>{
    pedidosCall();
  },[]);
  
  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <NavBar 
        userData={userData}
      />
      <div>
        <Typography variant="h4" gutterBottom className={classes.title}>
          Pedidos
        </Typography>
        {pedidos.map(pedido => {
          return (
            <Elemento data={pedido}/>
          )
        })}
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}