import React from "react";
import { useUser } from "../components/UserContext";
import { NewIconCard } from "../components";

const Dashboard = () => {
  const [user, setUser] = useUser();
  return (
    <main className="bg-stone-300 h-screen">
      <section className="container mx-auto py-10">
        <div>
          {user ? (
            <>
              <h1 className="text-center text-3xl font-semibold">
                Create a New Icon
              </h1>

              <NewIconCard className="w-2/3 mx-auto mt-4" />
            </>
          ) : (
            <>
              <section className="container mx-auto flex flex-row items-center justify-center">
                <div className="flex flex-col items-center mt-10">
                  <h1 className=" text-3xl text-center">
                    Sign In to Access Your Collection
                  </h1>
                  <button className="bg-cyan-600 text-white font-semibold w-30 rounded-full py-3 px-6 mt-6">
                    Sign In
                  </button>
                </div>
              </section>
            </>
          )}
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
