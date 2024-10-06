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
                  <h2>More Details About Dharavi</h2>
                  <p>
                    Dharavi spans an area of approximately 2.1 square kilometers
                    and is home to a large population. The area is known for
                    small-scale industries such as pottery, leather, textiles,
                    and recycling.
                  </p>
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
