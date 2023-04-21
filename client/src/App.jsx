import { Dashboard, Home } from "./pages";
import { LoginModal, Logout } from "./components";
import "./index.css";
import { Route, Routes, Link } from "react-router-dom";
import { useUser } from "./components/UserContext";

function App() {
  const [user, setUser] = useUser();
  console.log(user);
  return (
    <>
      <header className="w-full h-20 bg-stone-800 flex flex-row items-center justify-between p-4">
        <Link to="/" className="bg-indigo-400 w-10 h-10" />
        {!user ? (
          <LoginModal />
        ) : (
          <div className="flex flex-row items-center gap-5">
            <div className="text-white">{user.username}</div>
            <Link to="/dashboard" className="text-white bg-blue-600 px-6 py-3">
              My collection
            </Link>
            <Logout />
          </div>
        )}
      </header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </>
  );
}

export default App;
