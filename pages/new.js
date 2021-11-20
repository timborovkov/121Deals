import React from "react";
import Map from "../components/Map";

export default function Home() {
    return
    <div>
      <SearchBar />
      <Map deals={deals} />
      <AddNew />
    </div>
  );
}
