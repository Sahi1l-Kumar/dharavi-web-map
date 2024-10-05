import { APIProvider } from "@vis.gl/react-google-maps";
import "./App.css";
import { BaseMap } from "./components/BaseMap/BaseMap";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <div className="app-container">
        <Sidebar setDrawerOpen={setDrawerOpen} />{" "}
        {/* Pass state setter to Sidebar */}
        <div
          className={`main-content`}
          style={{
            marginLeft: drawerOpen ? "240px" : "0",
            transition: "margin 0.3s ease",
          }}
        >
          {/* Content about Dharavi above the map */}
          <div className="content-above">
            <h1>Dharavi Overview</h1>
            <p>
              Dharavi is a locality in Mumbai, known as one of the largest slums
              in the world. It has a thriving informal economy and rich cultural
              diversity.
            </p>
          </div>

          {/* Base map in the center */}
          <div className="map-container">
            <BaseMap />
          </div>

          {/* Content about Dharavi below the map */}
          <div className="content-below">
            <h2>More Details About Dharavi</h2>
            <p>
              Dharavi spans an area of approximately 2.1 square kilometers and
              is home to a large population. The area is known for small-scale
              industries such as pottery, leather, textiles, and recycling.
            </p>
          </div>
        </div>
      </div>
    </APIProvider>
  );
}

export default App;
