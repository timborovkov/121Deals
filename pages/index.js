import Map from "../components/Map";
import AddNew from "../components/AddNew";
import SearchBar from "../components/SearchBar";

export default function Home({ app }) {
  return (
    <div>
      <SearchBar />
      <Map />
      <AddNew />
    </div>
  );
}
