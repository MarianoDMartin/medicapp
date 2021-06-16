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
    margin: theme.spacing(1, 1.5),
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
    //order: "1px solid grey",
    borderRadius: '15px',
    marginTop: 20
  }
}));


export default function Elemento(props) {
  let history = useHistory();
  const classes = useStyles();
  const {data} = props;

    debugger;
  return (
    <Grid container spacing={2} className={classes.element} border={1}>
        <Grid item>
            <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src="https://www.farmaciasrp.com.ar/4291-thickbox_default/muletas-de-aluminio-regulable-ch-med-gde-el-par.jpg" />
            </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
            <Grid item xs container spacing={2}>
                <Grid item md={9}>
                    <Typography gutterBottom variant="subtitle1">
                        {data.elemento}
                    </Typography>
                </Grid>
                <Grid item md={3}>
                    <Typography gutterBottom variant="subtitle1">
                        {data.elemento}
                    </Typography>
                </Grid>
                <Grid item md={9}>
                    <Typography gutterBottom variant="subtitle1">
                        {data.elemento}
                    </Typography>
                </Grid>
                <Grid item md={3}>
                    <Typography gutterBottom variant="subtitle1">
                        {data.elemento}
                    </Typography>
                </Grid>
                    
                    {/* <Grid container>
                        <Grid item>
                            <Typography variant="body2" gutterBottom>
                                Fecha de publicación
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body2" color="textSecondary">
                                {Moment(data.fechaInicio).format("DD/MM/YYYY")}
                            </Typography>
                        </Grid>
                    </Grid> */}
                    
            </Grid>
        </Grid>
    </Grid>
  );
}