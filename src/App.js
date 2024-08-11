import { useEffect, useState } from "react";
import "./App.css";
import BreweryCard from "./components/BreweryCard";

function App() {
  const [listOfBreweries, setListOfBreweries] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.openbrewerydb.org/v1/breweries?by_city=austin&per_page=50"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setListOfBreweries(data);
      });
  }, []);

  if (listOfBreweries == 0) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="App">
      <h1>List of Breweries:</h1>
      {listOfBreweries.map((brewery) => (
        <BreweryCard brewery={brewery} />
      ))}
    </div>
  );
}

export default App;
