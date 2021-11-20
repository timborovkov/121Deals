import Script from "next/script";

import React from "react";
import Map from "../components/Map";
import AddNew from "../components/AddNew";
import SearchBar from "../components/SearchBar";
import Title from "../components/Title";

import db from "../firebase";

export default function Home() {
  const [deals, setDeals] = React.useState([]);
  React.useEffect(async () => {
    const dbdeals = await db.getDeals();
    setDeals(dbdeals);
  }, []);
  return (
    <div>
      <Title />
      <SearchBar />
      <Map deals={deals} />
      <AddNew />
      <Script
        strategy="beforeInteractive"
        src="https://mapapi.cloud.huawei.com/mapjs/v1/api/js?callback=initMap&key=CwEAAAAASFIKNP7sIH7XojHEkc/pzoBR5JFaabwOJEeh06Sk8Fs3dsKKIXiBP81xc6X3BsgOjhJo3vdAEqkfPGZeH497scGXgT0="
      />

      <script
        dangerouslySetInnerHTML={{
          __html: `
            function initMap() {
              setInterval(()=>{
                var mapOptions = {};
                mapOptions.center = {lat: 60.18574466774271, lng: 24.937634178088686};
                mapOptions.zoom = 10;
                mapOptions.language='ENG';
                // Set sourceType to raster.
                mapOptions.sourceType = 'raster';
                window.map = new HWMapJsSDK.HWMap(document.getElementById('map'), mapOptions);
                window.HWMapJsSDK = HWMapJsSDK;
              }, 1000)
            }
            `,
        }}
      />
    </div>
  );
}
