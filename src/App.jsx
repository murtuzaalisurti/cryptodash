import Home from "./pages/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Fav from "./pages/Fav";
import News from "./pages/News";
function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/news" element={<News />} />
          <Route path="/fav" element={<Fav />} />
          <Route path="*" element={<div>404 page not found</div>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
