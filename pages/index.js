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
    </div>
  );
}
