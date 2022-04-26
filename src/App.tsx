import { useState } from "react";
import "./App.css";
import Search from "./components/Search/Search";

function App() {
  const [theam, setTheam] = useState<boolean>(true);
  return (
    <div className="d-flex">
      <div
        className={
          "d-flex justify-content-center " + (theam ? "App-white" : "App-dark")
        }
      >
        <div className="search-container w-75">
          <Search />
        </div>
      </div>
      <button
        className="position-absolute end-0 me-3 mt-3"
        onClick={() => setTheam((prevState) => !prevState)}
      >
        Change Theam
      </button>
    </div>
  );
}

export default App;
