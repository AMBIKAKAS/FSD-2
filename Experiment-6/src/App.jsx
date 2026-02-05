import { TextField, Button, Container, Typography, Box, Paper } from '@mui/material';
import { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    let temp = {};
    if (!email.includes('@'))
      temp.email = 'Please enter a valid email address';
    if (password.length < 6)
      temp.password = 'Password must be at least 6 characters';

    setErrors(temp);
    return Object.keys(temp).length === 0;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate())
      alert('Welcome back! Login successful 🚀');
  }

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        background: "linear-gradient(120deg, #0f2027, #203a43, #2c5364)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >

      <Container maxWidth="sm">

        <Paper
          elevation={10}
          sx={{
            padding: "40px",
            borderRadius: "16px",
            background: "rgba(255,255,255,0.95)",
            backdropFilter: "blur(10px)",
            transition: "0.3s ease-in-out",
            "&:hover": {
              transform: "translateY(-5px)"
            }
          }}
        >

          <Typography
            variant="h4"
            gutterBottom
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              color: "#203a43",
              mb: 3
            }}
          >
            Welcome Back
          </Typography>

          <Typography
            variant="body2"
            sx={{
              textAlign: "center",
              color: "gray",
              mb: 4
            }}
          >
            Sign in to continue to your dashboard
          </Typography>

          <form onSubmit={handleSubmit}>

            <TextField
              fullWidth
              margin="normal"
              label="Email Address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              error={Boolean(errors.email)}
              helperText={errors.email}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px"
                }
              }}
            />

            <TextField
              fullWidth
              margin="normal"
              type="password"
              label="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              error={Boolean(errors.password)}
              helperText={errors.password}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px"
                }
              }}
            />

            <Button
              variant="contained"
              type="submit"
              sx={{
                marginTop: "20px",
                width: "100%",
                padding: "12px",
                fontSize: "16px",
                fontWeight: "bold",
                borderRadius: "10px",
                background: "linear-gradient(90deg, #203a43, #2c5364)",
                transition: "0.3s",
                "&:hover": {
                  background: "linear-gradient(90deg, #2c5364, #203a43)",
                  transform: "scale(1.02)"
                }
              }}
            >
              Login
            </Button>

            <Typography
              variant="body2"
              sx={{
                textAlign: "center",
                marginTop: "15px",
                color: "gray",
                cursor: "pointer",
                "&:hover": {
                  textDecoration: "underline"
                }
              }}
            >
              Forgot Password?
            </Typography>

          </form>

        </Paper>

      </Container>

    </Box>
  );
}

export default App;
