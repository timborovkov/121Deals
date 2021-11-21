import { useRouter } from "next/router";

import {
  Container,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

const Cards = ({ deals }) => {
  const router = useRouter();

  return (
    <Container
      maxWidth="sm"
      style={{
        paddingTop: 150,
        height: "100vh",
        overflowY: "scroll",
        paddingBottom: 150,
      }}
    >
      {deals.map((deal, id) => (
        <Card style={{ marginBottom: 20 }} key={id}>
          {deal.images && (
            <CardMedia
              component="img"
              height="140"
              image={deal.images[0]}
              alt={deal.title}
            />
          )}
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {deal.title} – {deal.price} €
            </Typography>
            <Typography gutterBottom variant="body1" component="div">
              {deal.tags}
            </Typography>
            <Typography gutterBottom variant="body1" component="div">
              {deal.address}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              onClick={() => router.push("/deal/" + deal.id)}
            >
              View deal
            </Button>
          </CardActions>
        </Card>
      ))}
    </Container>
  );
};

export default Cards;
