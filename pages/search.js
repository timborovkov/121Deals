import React from "react";
import SearchBar from "../components/SearchBar";
import AddNew from "../components/AddNew";
import Header from "../components/Header";
import Cards from "../components/Cards";

import db from "../firebase";

const SearchPage = () => {
  const [filteredDeals, setFilteredDeals] = React.useState([]);
  const [deals, setDeals] = React.useState([]);
  React.useEffect(async () => {
    const dbdeals = await db.getDeals();
    setDeals(dbdeals);
    setFilteredDeals(dbdeals);

    if (window.searchdata && window.searchdata.length >= 3) {
      const value = window.searchdata;
      if (value == "") {
        setFilteredDeals(deals);
      } else {
        // perform search
        var newdeals = [];
        deals.map((deal, key) => {
          if (deal.title?.includes(value) || deal.tags?.includes(value)) {
            newdeals.push(deal);
          }
        });
        setFilteredDeals(newdeals);
      }
    }
  }, []);

  const changesearch = (value) => {
    if (value == "") {
      setFilteredDeals(deals);
    } else {
      // perform search
      var newdeals = [];
      deals.map((deal, key) => {
        if (deal.title?.includes(value) || deal.tags?.includes(value)) {
          newdeals.push(deal);
        }
      });
      setFilteredDeals(newdeals);
    }
  };
  return (
    <div>
      <Header hideSearch={true} />
      <SearchBar change={changesearch} />
      <Cards deals={filteredDeals} />
      <AddNew />
    </div>
  );
};

export default SearchPage;
