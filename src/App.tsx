import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Functionalities from "./pages/Functionalities";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/functionalities" element={<Functionalities />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
