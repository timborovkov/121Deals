import { Container, Typography } from "@mui/material";

const Title = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "20px",
        width: "100%",
        zIndex: 999,
      }}
    >
      <Container maxWidth="sm">
        <Typography
          variant="h1"
          component="div"
          fontSize="26px"
          style={{ textAlign: "center", fontWeight: "bold" }}
        >
          121 Deals <br /> Your local blockchain buy and sell
        </Typography>
      </Container>
    </div>
  );
};

export default Title;
