import React from "react";
import { useRouter } from "next/router";
import { Container, Typography } from "@mui/material";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import db from "../../firebase";

const DealPage = ({}) => {
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
        <Container style={{ paddingTop: 60, paddingBottom: 60 }} maxWidth="sm">
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
            {deal.title}
          </Typography>
          <Typography
            variant="h2"
            component="div"
            fontSize="22px"
            style={{ textAlign: "center" }}
            gutterBottom
          >
            {deal.price} tokens
          </Typography>
          <Typography
            variant="body1"
            component="div"
            fontSize="12px"
            style={{ textAlign: "center" }}
            gutterBottom
          >
            + network fees
          </Typography>
          <Typography
            variant="body1"
            fontSize="16px"
            style={{
              textAlign: "center",
              marginBottom: 20,
              marginTop: 20,
              maxWidth: 600,
              marginLeft: "auto",
              marginRight: "auto",
            }}
            gutterBottom
          >
            {deal.description}
          </Typography>
          <Typography
            variant="h3"
            component="div"
            fontSize="22px"
            style={{ textAlign: "center" }}
            gutterBottom
          >
            {deal.address}
          </Typography>
          {deal.images.map((image, key) => {
            console.log(image, key);
            if (key != 0) {
              return (
                <center>
                  <img
                    key={key}
                    src={image}
                    alt={deal.title}
                    style={{
                      width: "100%",
                      marginBottom: "20px",
                      maxWidth: 600,
                    }}
                  />
                </center>
              );
            }
          })}
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
