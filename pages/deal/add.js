import uploadcare from "uploadcare-widget/uploadcare.lang.en.min.js";
import { useRouter } from "next/router";

import React from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  FormGroup,
} from "@mui/material";

import Header from "../../components/Header";
import Vision from "../../components/Vision";

import db from "../../firebase";

const AddPage = ({}) => {
  const router = useRouter();

  const [deal, setDeal] = React.useState({
    sold: false,
    location: {
      _lat: 60.18847569,
      _long: 24.93900746,
    },
    images: [],
  });

  const [visionData, setVisionData] = React.useState(null);

  const save = () => {
    db.createDeal(deal);
    alert("Created");
    router.push("/");
  };

  React.useEffect(() => {
    const widget = uploadcare.Widget("#uploader", {
      publicKey: "ec84594e8303ed066cf2",
      imagesOnly: true,
      multiple: true,
    });
    widget.onUploadComplete((fileInfo) => {
      // get a CDN URL from the file info
      var imageLinks = [];
      for (let index = 0; index < fileInfo.count; index++) {
        imageLinks.push(fileInfo.cdnUrl + "nth/" + index + "/");
      }
      console.log(imageLinks);
      setDeal({ ...deal, images: imageLinks });

      Vision(imageLinks[0], (data) => {
        var newtags = "";
        data.responses[0].labelAnnotations.map((label, key) => {
          newtags += label.description + ", ";
        });

        setDeal({
          ...deal,
          title: data.responses[0].labelAnnotations[0].description,
        });
        setDeal({ ...deal, tags: newtags });

        setVisionData(data);
      });
    });
  }, []);

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
          <center>
            <input id="uploader" type="hidden" />
            {deal.images.length > 0 && (
              <img
                src={deal.images[0]}
                alt="product image preview"
                style={{ width: "100%" }}
                id="theimage"
              />
            )}
          </center>
          <FormGroup>
            <TextField
              id="outlined-basic"
              label="Title"
              variant="outlined"
              fullWidth
              style={{ marginBottom: 15 }}
              value={deal.title}
              onChange={(e) => setDeal({ ...deal, title: e.target.value })}
              autoFocus
            />
            <TextField
              id="outlined-basic"
              label="Pin"
              variant="outlined"
              fullWidth
              style={{ marginBottom: 15 }}
              onChange={(e) => setDeal({ ...deal, pin: e.target.value })}
            />
            <TextField
              id="outlined-basic"
              label="Tags"
              variant="outlined"
              fullWidth
              style={{ marginBottom: 15 }}
              value={deal.tags}
              onChange={(e) => setDeal({ ...deal, tags: e.target.value })}
              autoFocus
            />
            <TextField
              id="outlined-basic"
              label="Address"
              variant="outlined"
              fullWidth
              style={{ marginBottom: 15 }}
              onChange={(e) => setDeal({ ...deal, address: e.target.value })}
            />
            <TextField
              id="outlined-basic"
              label="Latitude"
              variant="outlined"
              type="number"
              fullWidth
              style={{ marginBottom: 15 }}
              value={deal.location._lat}
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
              style={{ marginBottom: 15 }}
              value={deal.location._long}
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
              style={{ marginBottom: 15 }}
              onChange={(e) => setDeal({ ...deal, email: e.target.value })}
            />
            <TextField
              id="outlined-basic"
              label="Contact phone"
              variant="outlined"
              fullWidth
              style={{ marginBottom: 15 }}
              onChange={(e) => setDeal({ ...deal, phone: e.target.value })}
            />
            <TextField
              id="outlined-basic"
              label="Price in euros"
              variant="outlined"
              fullWidth
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
