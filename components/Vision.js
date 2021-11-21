var axios = require("axios");

export default async function Vision(imageurl, callback) {
  var data = JSON.stringify({
    requests: [
      {
        image: {
          source: {
            imageUri: imageurl,
          },
        },
        features: [
          {
            type: "LABEL_DETECTION",
            maxResults: 5,
          },
        ],
      },
    ],
  });
  var config = {
    method: "post",
    url: "https://vision.googleapis.com/v1/images:annotate?key=AIzaSyD4HE_pvk79yvtVFxvSyhw8Sfjhh0cz5sQ",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      callback(response.data);
    })
    .catch(function (error) {
      console.log(error);
      callback(error);
    });
}
