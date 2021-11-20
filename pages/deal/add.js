import React from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  FormGroup,
  FormControlLabel,
  Switch,
} from "@mui/material";

import Header from "../../components/Header";

import db from "../../firebase";

const AddPage = ({}) => {
  const [deal, setDeal] = React.useState({
    sold: false,
  });

  const save = () => {
    db.createDeal(deal);
    alert("Created");
    window.location.href = "/";
  };

  return (
    <div>
      <Header />
      <Container style={{ paddingTop: 100, paddingBottom: 100 }} maxWidth="sm">
        <Typography
          variant="h1"
          component="div"
          fontSize="26px"
          style={{ textAlign: "center" }}
          gutterBottom
        >
          Create new deal
        </Typography>
        <div>
          <FormGroup>
            <TextField
              id="outlined-basic"
              label="Contact email"
              variant="outlined"
              fullWidth
              autoFocus
              value={deal.title}
              style={{ marginBottom: 15 }}
              onChange={(e) => setDeal({ ...deal, title: e.target.value })}
            />
            <TextField
              id="outlined-basic"
              label="Address"
              variant="outlined"
              fullWidth
              autoFocus
              value={deal.address}
              style={{ marginBottom: 15 }}
              onChange={(e) => setDeal({ ...deal, address: e.target.value })}
            />
            <TextField
              id="outlined-basic"
              label="Description"
              variant="outlined"
              fullWidth
              autoFocus
              multiline
              maxRows={4}
              value={deal.description}
              style={{ marginBottom: 15 }}
              onChange={(e) =>
                setDeal({ ...deal, description: e.target.value })
              }
            />
            <TextField
              id="outlined-basic"
              label="Contact email"
              variant="outlined"
              fullWidth
              autoFocus
              value={deal.email}
              style={{ marginBottom: 15 }}
              onChange={(e) => setDeal({ ...deal, email: e.target.value })}
            />
            <TextField
              id="outlined-basic"
              label="Contact phone"
              variant="outlined"
              fullWidth
              autoFocus
              value={deal.phone}
              style={{ marginBottom: 15 }}
              onChange={(e) => setDeal({ ...deal, phone: e.target.value })}
            />
            <TextField
              id="outlined-basic"
              label="Price in tokens"
              variant="outlined"
              fullWidth
              autoFocus
              value={deal.price}
              style={{ marginBottom: 15 }}
              onChange={(e) => setDeal({ ...deal, price: e.target.value })}
            />
            <TextField
              id="outlined-basic"
              label="121 Token wallet"
              variant="outlined"
              fullWidth
              autoFocus
              value={deal.wallet}
              style={{ marginBottom: 15 }}
              onChange={(e) => setDeal({ ...deal, wallet: e.target.value })}
            />
          </FormGroup>
          <Button
            variant="contained"
            fullWidth
            onClick={save}
            style={{ marginBottom: 15 }}
          >
            Save
          </Button>
        </div>
      </Container>
    </div>
  );
};
export default AddPage;
