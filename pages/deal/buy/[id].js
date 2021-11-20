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
        <Container style={{ paddingTop: 60, paddingBottom: 100 }} maxWidth="sm">
          <center></center>
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
