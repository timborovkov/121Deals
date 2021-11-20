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
    </div>
  );
}
