import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import withAuth from '../../components/withAuth';
import { useNavigate } from 'react-router-dom';
import { get } from '../../services/assinantes';



const theme = createTheme();

const Dashboard = () => {
  const [assinante, setAssinante] = React.useState(null);
  const navigate = useNavigate()
  const signOut = () => {
    localStorage.removeItem("token");
    navigate('/')
  }
  
  React.useEffect(() => {
    (async function() {
        try {
          const response = await get();
          setAssinante(response.data);
        } catch (e) {
            console.error(e);
        }
    })();
}, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Mini Mundo Sinaf
          </Typography>
          
          <Typography variant="h6" color="inherit" noWrap onClick={signOut} sx={{ml: 3}}>
              Logout
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
              <Grid item key={1} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <h3>Nome: {assinante ? assinante.nome : 'Nome ficticio' }</h3>
                    <Typography gutterBottom variant="h5" component="h2">
                      Benefícios
                    </Typography>
                    <Typography>
                      10% na farmacia x
                    </Typography>
                    <Typography>
                      20% na VIVO
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
          </Grid>
        </Container>
      </main>
     
    </ThemeProvider>
  );
}

export default withAuth(Dashboard);