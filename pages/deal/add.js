import React from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  FormGroup,
} from "@mui/material";

import Header from "../../components/Header";

import db from "../../firebase";

const AddPage = ({}) => {
  const [deal, setDeal] = React.useState({
    sold: false,
    location: {
      _lat: 0,
      _long: 0,
    },
  });

  const save = () => {
    db.createDeal(deal);
    alert("Created");
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
              label="Title"
              variant="outlined"
              fullWidth
              autoFocus
              style={{ marginBottom: 15 }}
              onChange={(e) => setDeal({ ...deal, title: e.target.value })}
            />
            <TextField
              id="outlined-basic"
              label="Pin"
              variant="outlined"
              fullWidth
              autoFocus
              style={{ marginBottom: 15 }}
              onChange={(e) => setDeal({ ...deal, pin: e.target.value })}
            />
            <TextField
              id="outlined-basic"
              label="Tags"
              variant="outlined"
              fullWidth
              autoFocus
              style={{ marginBottom: 15 }}
              onChange={(e) => setDeal({ ...deal, tags: e.target.value })}
            />
            <TextField
              id="outlined-basic"
              label="Contact email"
              variant="outlined"
              fullWidth
              autoFocus
              style={{ marginBottom: 15 }}
              onChange={(e) => setDeal({ ...deal, title: e.target.value })}
            />
            <TextField
              id="outlined-basic"
              label="Address"
              variant="outlined"
              fullWidth
              autoFocus
              style={{ marginBottom: 15 }}
              onChange={(e) => setDeal({ ...deal, address: e.target.value })}
            />
            <TextField
              id="outlined-basic"
              label="Latitude"
              variant="outlined"
              type="number"
              fullWidth
              autoFocus
              style={{ marginBottom: 15 }}
              onChange={(e) =>
                setDeal({
                  ...deal,
                  location: { ...deal.location, _lat: e.target.value },
                })
              }
            />
            <TextField
              id="outlined-basic"
              label="Longitude"
              variant="outlined"
              type="number"
              fullWidth
              autoFocus
              style={{ marginBottom: 15 }}
              onChange={(e) =>
                setDeal({
                  ...deal,
                  location: { ...deal.location, _long: e.target.value },
                })
              }
            />
            <TextField
              id="outlined-basic"
              label="Description"
              variant="outlined"
              fullWidth
              autoFocus
              multiline
              maxRows={4}
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
              style={{ marginBottom: 15 }}
              onChange={(e) => setDeal({ ...deal, email: e.target.value })}
            />
            <TextField
              id="outlined-basic"
              label="Contact phone"
              variant="outlined"
              fullWidth
              autoFocus
              style={{ marginBottom: 15 }}
              onChange={(e) => setDeal({ ...deal, phone: e.target.value })}
            />
            <TextField
              id="outlined-basic"
              label="Price in euros"
              variant="outlined"
              fullWidth
              autoFocus
              style={{ marginBottom: 15 }}
              onChange={(e) => setDeal({ ...deal, price: e.target.value })}
            />
          </FormGroup>
          <Button
            variant="contained"
            fullWidth
            onClick={save}
            style={{ marginBottom: 15 }}
          >
            Publish
          </Button>
        </div>
      </Container>
    </div>
  );
};
export default AddPage;
