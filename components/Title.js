import { Container, Typography } from "@mui/material";

const Title = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "40px",
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
        ></Typography>
      </Container>
    </div>
  );
};

export default Title;
