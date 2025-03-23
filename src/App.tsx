import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Functionalities from "./pages/Functionalities";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/functionalities" element={<Functionalities />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
