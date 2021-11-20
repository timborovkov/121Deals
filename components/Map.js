import { useRouter } from "next/router";

import Head from "next/head";
import React from "react";

const Map = ({ deals }) => {
  const router = useRouter();

  React.useEffect(() => {
    var mapOptions = {};
    mapOptions.center = { lat: 60.18574466774271, lng: 24.937634178088686 };
    mapOptions.zoom = 8;
    mapOptions.language = "ENG";
    // Set sourceType to raster.
    mapOptions.sourceType = "raster";
    window.map = new HWMapJsSDK.HWMap(
      document.getElementById("map"),
      mapOptions
    );
    window.HWMapJsSDK = HWMapJsSDK;
  }, []);
  React.useEffect(() => {
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
