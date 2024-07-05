import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Corrected aliasing
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import Videos from "./components/Videos/Videos";
import List from "./components/List/List";
import NotFound from "./components/NotFound/NotFound";
import Airports from "./components/Airports/Airports";
import AirportInfo from "./components/AirportInfo/AirportInfo";

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/airports" element={<Airports/>} />
          <Route exact path="/airport/:id" element={<AirportInfo/>} />
          <Route exact path="/videos" element={<Videos />} />
          <Route exact path="/list/:id" element={<List/>} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </Router>
  );
}

export default App;
