import React, { useEffect, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { NavBar, Copyright } from './common.component';
import Elemento from './elemento.component';
import IconButton from '@material-ui/core/IconButton';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  title:{
    textAlign: 'left'
  },
}));

export default function Donaciones(props) {
  const classes = useStyles();
  const { userData } = props.location.state;
  const [donaciones, setDonaciones] = useState([]);
  let history = useHistory();
  function misDonacionesCall(){
    fetch(`http://localhost:5000/api/donaciones?usuarioid=${userData.id}`) //TODO: modify request to get mis donaciones
      .then(res => res.json())
      .then(
        result => {
          setDonaciones(result);
        }
      );
  }

  useEffect(()=>{
    misDonacionesCall();
  },[]);

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <NavBar 
        userData={userData}
      />
      <div>
      <Typography variant="h4" gutterBottom className={classes.title}>
          Mis Donaciones 
          <IconButton color="primary" aria-label="upload picture" component="span" onClick={()=> history.push("/creardonacion", { userData })}>
            <AddCircleOutlineIcon/>
          </IconButton>
        </Typography>
        {donaciones.map(donacion => {
          return (
            <Elemento data={donacion}/>
          )
        })}
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}