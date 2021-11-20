import React from "react";
import { useRouter } from "next/router";
import {
  Container,
  Typography,
  TextField,
  Button,
  FormGroup,
  FormControlLabel,
  Switch,
} from "@mui/material";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

import db from "../../../firebase";

const DealPage = ({}) => {
  const router = useRouter();
  const { id } = router.query;

  const [deal, setDeal] = React.useState(null);
  const [pin, setPin] = React.useState("");
  const [editActive, setEditActive] = React.useState(false);

  const checkPin = () => {
    if (pin == deal.pin) {
      setEditActive(true);
    } else {
      alert("Wrong pin");
      setEditActive(false);
    }
  };

  const save = () => {
    db.updateDeal(id, deal);
    alert("Saved");
  };

  React.useEffect(async () => {
    const thedeal = await db.getDeal(id);
    setDeal(thedeal);
  }, [id]);

  if (deal) {
    return (
      <div>
        <Header />
        <Container style={{ paddingTop: 60, paddingBottom: 100 }} maxWidth="sm">
          <center>
            <img
              src={deal.images[0]}
              alt={deal.title}
              style={{
                width: "100%",
                marginBottom: "20px",
                maxWidth: 600,
              }}
            />
          </center>
          <Typography
            variant="h1"
            component="div"
            fontSize="26px"
            style={{ textAlign: "center" }}
            gutterBottom
          >
            Edit: {deal.title}
          </Typography>
          {editActive ? (
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
                  onChange={(e) =>
                    setDeal({ ...deal, address: e.target.value })
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
                <FormControlLabel
                  control={
                    <Switch
                      onChange={(e) =>
                        setDeal({ ...deal, sold: e.target.checked })
                      }
                    />
                  }
                  label="Sold"
                  style={{ marginBottom: 15 }}
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
          ) : (
            <div>
              <TextField
                id="outlined-basic"
                label="Insert a pin to edit"
                variant="outlined"
                fullWidth
                style={{ marginBottom: 15 }}
                onChange={(e) => {
                  setPin(e.target.value);
                }}
              />
              <Button variant="contained" fullWidth onClick={checkPin}>
                Enter
              </Button>
            </div>
          )}
        </Container>
        <Footer deal={deal} />
      </div>
    );
  } else {
    return (
      <div>
        <Header />
        <Container style={{ paddingTop: 60 }}>
          <Typography
            variant="h1"
            component="div"
            fontSize="26px"
            style={{ textAlign: "center" }}
            gutterBottom
          >
            Loading
          </Typography>
        </Container>
      </div>
    );
  }
};
export default DealPage;
