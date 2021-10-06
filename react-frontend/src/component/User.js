import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container, Paper, Button } from "@mui/material";
import axios from "axios";

export default function UserValidation() {
  const paperStyle = { padding: "50px 20px", width: 450, margin: "20px auto" };
  const [name, setName] = useState([]);
  const [surname, setSurname] = useState([]);
  const [email, setEmail] = useState([]);
  const [number, setNumber] = useState([]);
  const [user, setUser] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    const user = { name, surname, email, number };
    console.log(user);

    fetch("http://localhost:8080/info/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then(() => {
      console.log("User Added! ");
    });
  };

  useEffect(() => {
    axios("http://localhost:8080/info/get").then((res) => setUser(res.data));
  }, [user]);

  return (
    <Container>
      <Paper elevation={5} style={paperStyle}>
        <h1>Add User</h1>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="on"
        >
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Surname"
            variant="outlined"
            fullWidth
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="E-Mail"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
            fullWidth
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <Button
            variant="contained"
            href="#contained-buttons"
            onClick={handleClick}
          >
            Submit
          </Button>
        </Box>
      </Paper>
      <Paper elevation={5} style={paperStyle}>
        {user.map((us) => (
          <Paper elevation={15} style={{ margin: "10px" }} key={us.id}>
            Name: {us.name}
            <br />
            Surname: {us.surname}
            <br />
            Email: {us.email}
            <br />
            Phone Number: {us.number}
          </Paper>
        ))}
      </Paper>
    </Container>
  );
}
