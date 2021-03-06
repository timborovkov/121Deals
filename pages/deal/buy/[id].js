import React from "react";
import { useRouter } from "next/router";
import { Container, Typography, TextField, Button } from "@mui/material";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

import db from "../../../firebase";

const BuyPage = ({}) => {
  const router = useRouter();
  const { id } = router.query;

  const [deal, setDeal] = React.useState(null);

  React.useEffect(async () => {
    const thedeal = await db.getDeal(id);
    setDeal(thedeal);
  }, [id]);

  if (deal) {
    return (
      <div>
        <Header />
        <Container
          style={{ paddingTop: 200, paddingBottom: 100 }}
          maxWidth="sm"
        >
          <center>
            <img
              src={deal.images[0]}
              alt={deal.title}
              style={{
                marginBottom: "20px",
                maxWidth: 600,
                maxHeight: 200,
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
            Buy {deal.title} - {deal.price} €
          </Typography>
          <Typography
            variant="h2"
            component="div"
            fontSize="22px"
            style={{ textAlign: "center" }}
          >
            Contact the seller
          </Typography>
          <Typography
            variant="p"
            component="div"
            fontSize="16px"
            style={{ textAlign: "center" }}
          >
            Email: {deal.email}
          </Typography>
          <Typography
            variant="p"
            component="div"
            fontSize="16px"
            style={{ textAlign: "center" }}
          >
            Phone: {deal.phone}
          </Typography>
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
export default BuyPage;
