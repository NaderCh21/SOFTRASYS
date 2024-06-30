import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
} from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

const StyledPaper = styled(Paper)({
  padding: "40px 50px",
  borderRadius: "8px",
  backgroundColor: "#f8f8f8",
  boxShadow: "0 0 10px #bbb",
  width: "350px",
  height: "auto",
  textAlign: "center",
  border: "1px solid #ddd",
});

const StyledButton = styled(Button)({
  marginTop: "20px",
  width: "100%",
  padding: "10px",
  backgroundColor: "#4a148c",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#370e6c",
  },
});

const LoginForm = () => {
  const [company, setCompany] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Company:", company);
    console.log("Username:", username);
    console.log("Password:", password);
    navigate("/dashboard");
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: "url(/path/to/your/background/image.png)", // Use the actual path to your background image
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <StyledPaper>
        <Typography
          variant="h4"
          component="h1"
          sx={{ marginBottom: "20px", color: "#3b1974", fontSize: "32px" }}
        >
          Login To <strong>Eye Manager</strong>
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
        
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
            <Typography
              sx={{ minWidth: "100px", textAlign: "left", marginTop: "0px" }}
            >
              Company:
            </Typography>
            <TextField
              placeholder="Optional"
              variant="outlined"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              sx={{ width: "65%", margin: "15px 0" , marginRight:'5%', marginLeft:'5%' , backgroundColor:'#fff'  }}
              InputProps={{
                sx: { padding: '2px' },
                inputProps: { style: { padding: 0, height: "30px" } },
              }}
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
            <Typography
              sx={{ minWidth: "100px", textAlign: "left", marginTop: "10px" }}
            >
              User Name
            </Typography>
            <TextField
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              sx={{ width: "65%", margin: "15px 0" , marginRight:'5%', marginLeft:'5%' , backgroundColor:'#fff' }}
              InputProps={{
                sx: { padding: '2px' },
                inputProps: { style: { padding: 0, height: "30px" } },
              }}
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
            <Typography
              sx={{ minWidth: "100px", textAlign: "left", marginTop: "10px" }}
            >
              Password
            </Typography>
            <TextField
              type="password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{width: "65%", margin: "15px 0" , marginRight:'5%', marginLeft:'5%' , backgroundColor:'#fff' }}
              InputProps={{
                sx: { padding: '2px' },
                inputProps: { style: { padding: 0, height: "30px" } },
              }}
            />
          </Box>
          <Box sx={{ textAlign: "center", width: "35%", marginLeft: "55%" }}>
            <StyledButton type="submit" onClick={handleSubmit}>Login</StyledButton>
          </Box>
        </Box>
      </StyledPaper>
    </Container>
  );
};

export default LoginForm;
