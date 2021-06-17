import React from 'react';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import Moment from 'moment';

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
    color: 'blue',
    textDecoration: 'underline',
    borderBottom: "1px solid rgba(0, 0, 0, 0.1)"
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 200,
    height: 200,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  element: {
    backgroundColor: 'white',
    borderRadius: '15px',
    marginTop: 20,
    textAlign: 'left',
  },
  borderBottom: {
    borderBottom: "1px solid rgba(0, 0, 0, 0.1)"
  }
}));


export default function Elemento(props) {
  let history = useHistory();
  const classes = useStyles();
  const {data} = props;

  return (
    <Grid container spacing={2} className={classes.element} border={1}>
        <Grid item>
            <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src="https://www.farmaciasrp.com.ar/4291-thickbox_default/muletas-de-aluminio-regulable-ch-med-gde-el-par.jpg" />
            </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
            <Grid item xs container spacing={2}>
                <Grid item md={9} className={classes.borderBottom}>
                    <Typography variant="subtitle1">
                        {data.elemento}
                    </Typography>
                </Grid>
                <Grid item md={3} className={classes.link}>
                    <Typography variant="subtitle1">
                        {data.usuario.nombre + ' ' + data.usuario.apellido}
                    </Typography>
                </Grid>
                <Grid item md={6} className={classes.borderBottom}>
                    <Typography variant="subtitle1">
                        Fecha de publicación
                    </Typography>
                </Grid>
                <Grid item md={6} className={classes.borderBottom}>
                    <Typography variant="body1" color="textSecondary">
                        {Moment(data.fechaInicio).format("DD/MM/YYYY")}
                    </Typography>
                </Grid>
                <Grid item md={6} className={classes.borderBottom}>
                    <Typography variant="subtitle1">
                        Detalles
                    </Typography>
                </Grid>
                <Grid item md={6} className={classes.borderBottom}>
                    <Typography variant="body1" color="textSecondary">
                        {data.comentarios}
                    </Typography>
                </Grid>
                <Grid item md={6}>
                    <Typography variant="subtitle1">
                        Ubicación
                    </Typography>
                </Grid>
                <Grid item md={6}>
                    <Typography variant="body1" color="textSecondary">
                        {data.usuario.provincia}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
  );
}