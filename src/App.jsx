import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Spinner from "./components/Spinner";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import Agb from "./pages/Agb";
import Termin from "./pages/Termin";

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
        <Route path="termin" element={<Termin />} />
        <Route path="impressum" element={<Impressum />} />
        <Route path="datenschutz" element={<Datenschutz />} />
        <Route path="agb" element={<Agb />} />
      </Routes>
    </>
  );
};

export default App;
