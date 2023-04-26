import { useEffect, useState } from "react";
import { Card } from "../components";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/v1/post", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          setPosts(data.data.reverse());
        }
      } catch (error) {
        alert(error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <main className="bg-stone-300 h-screen">
      <section className="container mx-auto py-10">
        <h1 className="text-center text-3xl font-semibold">
          Icons From The Community
        </h1>
        <div className="w-2/3 flex lfex-row items-center justify-center mx-auto mt-10">
          <div className="grid grid-cols-6 gap-4">
            {posts.map((post) => (
              <Card post={post} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
