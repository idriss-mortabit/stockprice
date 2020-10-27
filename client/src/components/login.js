import React , { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';



const useStyles = makeStyles((theme) => ({
  div: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: '10px',
   boxShadow: '-3px -3px 7px #ffffff73, 2px 2px 5px rgba(94,104,121,0.5)'
  },
  form: {
    width: '90%', 
    margin: theme.spacing(5),
  },
  logo: {
    width: theme.spacing(8),
    height: theme.spacing(7),
    margin: theme.spacing(2)
  },
}));
async function App() {
  const [msg, setmsg] = useState("");
  const classes = useStyles();
  function submit(e){
    e.preventDefault();
    let res = await axios.post('/api/auth', {
        data: {
            username: e.target.email.value,
            password: e.target.password.value
        }
      })
    if(res.date==="valid"){
      setmsg('Valid User')
    }else{
      setmsg('Invalid User')
    }
  
  }
  return (
    <Container maxWidth="xs" style={{position: 'absolute', top: '50%', left:'50%', msTransform : 'translate(-50%, -50%)', transform: 'translate(-50%, -50%)'}} >
    <CssBaseline />
    <div className={classes.div} >
    <form className={classes.form} onSubmit= {(event) => submit(event)}>
    <Grid container alignItems="center">
      <Grid item xs={3} >
        <Avatar variant="square" src="https://www.kidsloop.net/wp-content/uploads/2020/03/kidsloop_logo.png" className={classes.logo}/>
      </Grid>
      <Grid item xs={3}>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
      </Grid>
    </Grid>
      
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Enter an email"
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
          label="Enter your password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <Typography variant="body2" color="red" align="left" >
        {msg}
        </Typography>
    <Grid container alignItems="center" style={{marginTop:'20px'}}>
      <Grid item xs={6} >
        <Link href="#" variant="body2">
          Create an account
        </Link>
        </Grid>
        <Grid item xs={6} align='right' >
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="medium"
        >
          LOGIN
        </Button>
        </Grid>
        </Grid>
      </form>
    </div>
    <Box mt={1}>
      <Typography variant="body2" color="textSecondary" align="left">
        Idriss Mortabit -> Calm Island Limited Test v0.01 a.
      </Typography>
    </Box>
  </Container>
  );
}

export default App;
