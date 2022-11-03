import logo from "./logo.svg";
import "./App.css";
import Login from "./Components/Login";
import Lab from "./Components/Lab";
import RightDoar from "./Components/RightDoar";
import Doar from "./Components/Doar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Doar />
      <RightDoar />
      <Login />
      <Lab />

      {/* <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/lab" element={<Lab />} />
      </Routes> */}
    </Router>
  );
}

export default App;
