import "./App.css";
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";

// components
import LoginHandler from "./components/login/login";
import HomeHandler from "./components/home/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomeHandler />} />
        <Route exact path="/login" element={<LoginHandler />} />
      </Routes>
    </Router>
  );
}

export default App;
