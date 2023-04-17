import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Home, Dashboard } from "./pages";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <header className="w-full h-20 bg-stone-500">
        <div className="w-full h-full px-8 flex flex-row items-center justify-between ">
          <div>Fusion Monsters</div>
          <a href="#">Login</a>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
