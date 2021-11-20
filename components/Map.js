import { useRouter } from "next/router";

import Head from "next/head";
import React from "react";

const Map = ({ deals }) => {
  const router = useRouter();

  React.useEffect(() => {
    if (deals.length > 0) {
      setInterval(() => {
        deals.forEach((deal) => {
          const marker = new window.HWMapJsSDK.HWMarker({
            map: window.map,
            position: { lat: deal.location._lat, lng: deal.location._long },
            zIndex: 10,
            icon: {
              opacity: 0.9,
              scale: 0.8,
            },
          });
          marker.addListener("click", () => {
            window.deal = deal;
            router.push("/deal/" + deal.id);
          });
        });
      }, 1000);
    }
  }, [deals]);

  return (
    <div>
      <main>
        <div id="map"></div>
      </main>
    </div>
  );
};

export default Map;
