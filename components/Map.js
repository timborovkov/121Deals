import Head from "next/head";

const Map = () => {
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
                mapOptions.center = {t: 48.856613, lng: 2.352222};
                mapOptions.zoom = 8;
                mapOptions.language='ENG';
                // Set sourceType to raster.
                mapOptions.sourceType = 'raster';
                var map = new HWMapJsSDK.HWMap(document.getElementById('map'), mapOptions);
                map.setPresetStyleId("night");
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
