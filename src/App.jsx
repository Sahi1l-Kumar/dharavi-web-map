import { APIProvider } from "@vis.gl/react-google-maps";
import "./App.css";
import { BaseMap } from "./components/BaseMap/BaseMap";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Industries from "./pages/Industries";
import WaterDrainage from "./pages/WaterDrainage";
import History from "./pages/History";
import Diseases from "./pages/Diseases";
import Covid from "./pages/Covid";
import GarbageDisposal from "./pages/GarbageDisposal";
import LivingCondition from "./pages/LivingCondition";
import Redevelopment from "./pages/Redevelopment";
import Layout from "./components/Layout";
import Header from "./components/Header";
import SatelliteImages from "./components/SatelliteImages";
import Layers from "./components/Layers";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <>
              <Header>
                <div id="map-container" className="map-container">
                  <BaseMap />
                </div>

                <div className="content-below">
                  <SatelliteImages />
                  <Layers />
                </div>
              </Header>
            </>
          ),
        },
        { path: "industries", element: <Industries /> },
        { path: "water-drainage", element: <WaterDrainage /> },
        { path: "history", element: <History /> },
        { path: "diseases", element: <Diseases /> },
        { path: "covid", element: <Covid /> },
        { path: "living", element: <LivingCondition /> },
        { path: "redevelopment", element: <Redevelopment /> },
        { path: "garbage", element: <GarbageDisposal /> },
      ],
    },
  ]);

  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <RouterProvider router={router} />
    </APIProvider>
  );
}

export default App;
