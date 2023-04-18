import { Dashboard, Home } from "./pages";
import { LoginModal } from "./components";
import "./index.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <header className="w-full h-20 bg-stone-800 flex flex-row items-center justify-between p-4">
        <div className="bg-indigo-400 w-10 h-10" />
        <LoginModal />
      </header>
    </>
  );
}

export default App;
