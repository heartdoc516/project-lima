import { Dashboard, Home } from "./pages";
import { LoginModal, Logout } from "./components";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import { useUser } from "./components/UserContext";

function App() {
  const [user, setUser] = useUser();
  console.log(user);
  return (
    <>
      <header className="w-full h-20 bg-stone-800 flex flex-row items-center justify-between p-4">
        <div className="bg-indigo-400 w-10 h-10" />
        {!user ? (
          <LoginModal />
        ) : (
          <div className="flex flex-row items-center gap-5">
            <div className="text-white">{user.username}</div>
            <Logout />
          </div>
        )}
      </header>
    </>
  );
}

export default App;
