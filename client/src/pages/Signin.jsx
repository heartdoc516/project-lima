import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

const Signin = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-stone-900 w-screen h-screen">
      <h1 className="text-5xl text-white">Fusion Monsters</h1>
      <div className="flex flex-row gap-4 mt-6">
        <a href="#" className="text-white bg-red-300 rounded-lg px-5 py-2.5">
          Log in
        </a>
        <a href="#" className="text-white bg-red-300 rounded-lg px-5 py-2.5">
          Sign up
        </a>
      </div>
    </div>
  );
};

export default Signin;
