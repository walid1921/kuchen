import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Spinner from "./components/Spinner";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import Agb from "./pages/Agb";
import { Toaster } from "react-hot-toast";

const Gallery = lazy(() => import("./pages/Gallery"));

const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route
          path="gallery"
          element={
            <Suspense fallback={<Spinner />}>
              <Gallery />
            </Suspense>
          }
        />
        <Route path="impressum" element={<Impressum />} />
        <Route path="datenschutz" element={<Datenschutz />} />
        <Route path="agb" element={<Agb />} />
      </Routes>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: { duration: 3000 },
          error: { duration: 5000 },
          style: {
            fontSize: "14px",
            maxWidth: "400px",
            padding: "14px 20px",
            backgroundColor: "#10121b92",
            color: "#fff",
          },
        }}
      />
    </>
  );
};

export default App;
