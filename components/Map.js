import Head from "next/head";
import React from "react";

const Map = ({ deals }) => {
  React.useEffect(() => {
    deals.forEach((deal) => {
      new window.HWMapJsSDK.HWMarker({
        map: window.map,
        position: { lat: deal.location._lat, lng: deal.location._long },
        zIndex: 10,
        icon: {
          opacity: 0.9,
          scale: 0.8,
        },
      });
    });
    window.addEventListener("load", function () {});
  }, [deals]);

  return (
    <div>
      <Head>
        <script
          async
          src="https://mapapi.cloud.huawei.com/mapjs/v1/api/js?callback=initMap&key=CwEAAAAASFIKNP7sIH7XojHEkc/pzoBR5JFaabwOJEeh06Sk8Fs3dsKKIXiBP81xc6X3BsgOjhJo3vdAEqkfPGZeH497scGXgT0="
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            function initMap() {
                var mapOptions = {};
                mapOptions.center = {lat: 60.18574466774271, lng: 24.937634178088686};
                mapOptions.zoom = 8;
                mapOptions.language='ENG';
                // Set sourceType to raster.
                mapOptions.sourceType = 'raster';
                window.map = new HWMapJsSDK.HWMap(document.getElementById('map'), mapOptions);
                window.map.setPresetStyleId("night");
                window.HWMapJsSDK = HWMapJsSDK;
            }
            `,
          }}
        />
      </Head>
      <main>
        <div id="map"></div>
      </main>
    </div>
  );
};

export default Map;
