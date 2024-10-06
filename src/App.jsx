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
import Layout from "./components/Layout"; // Import the new Layout component

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />, // Use the Layout for all routes
      children: [
        {
          index: true, // Default route when visiting '/'
          element: (
            <>
              {/* Content about Dharavi above the map */}
              <div className="content-above">
                <h1>Dharavi Overview</h1>
                <p>
                  Dharavi is a locality in Mumbai, known as one of the largest
                  slums in the world. It has a thriving informal economy and
                  rich cultural diversity.
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
                  Dharavi spans an area of approximately 2.1 square kilometers
                  and is home to a large population. The area is known for
                  small-scale industries such as pottery, leather, textiles, and
                  recycling.
                </p>
              </div>
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
      {/* RouterProvider used to render the routes */}
      <RouterProvider router={router} />
    </APIProvider>
  );
}

export default App;
