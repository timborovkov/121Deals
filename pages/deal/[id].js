import React from "react";
import { useRouter } from "next/router";
import { Container, Typography } from "@mui/material";

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
      <Container>
        <img
          src={deal.images[0]}
          alt={deal.title}
          style={{ width: "100%", marginBottom: "20px" }}
        />
        <Typography
          variant="h1"
          component="div"
          fontSize="24px"
          style={{ textAlign: "center" }}
          gutterBottom
        >
          {deal.title}
        </Typography>
        <Typography
          variant="body1"
          fontSize="16px"
          style={{ textAlign: "center" }}
          gutterBottom
        >
          {deal.description}
        </Typography>
      </Container>
    );
  } else {
    return <h1>Loading</h1>;
  }
};
export default DealPage;
