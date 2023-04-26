import { Download } from "react-feather";

const Card = ({ post }) => {
  return (
    <div className="group relative">
      <img src={post.iconUrl} alt={post.title} className="rounded-md"></img>
      <div className="group-hover:flex hidden h-20 w-full flex-col items-center  justify-center absolute bottom-0 left-0 right-0 bg-black/75">
        <p className="text-white">By {post.author.username}</p>
        <button className="mt-2">
          <Download className="text-indigo-400" />
        </button>
      </div>
    </div>
  );
};

export default Card;
