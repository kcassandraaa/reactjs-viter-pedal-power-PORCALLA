import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/pages/home/Home";
import PageNotFound from "./components/partials/PageNotFound";
import RoadBiking from "./components/pages/roadbiking/RoadBiking";
import MountainBiking from "./components/pages/mountainbiking/MountainBiking";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/road-biking" element={<RoadBiking />} />
          <Route path="/mountain-biking" element={<MountainBiking />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
