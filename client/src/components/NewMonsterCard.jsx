import { heart, monster } from "../assets";
import { useState } from "react";
import { MonsterTypeDropdown } from "../components";
import { MonsterProperties } from "../utils/MonsterProperties";

function NewMonsterCard({ className }) {
  const [group, setGroup] = useState(null);
  const [name, setName] = useState("");
  console.log(name, group);

  function handleGroup(e) {
    setGroup(e.target.value);
  }

  function handleName(e) {
    setName(e.target.value);
  }

  return (
    <div
      className={`border border-red-600 bg-gray-800 rounded-lg p-1 ${className}`}
    >
      <img src={monster} alt="monster" className="w-full rounded-t-lg" />
      <form>
        <div className="p-4">
          <div className="flex flex-row justify-between">
            <input type="text" placeholder="name" onChange={handleName} />

            <MonsterTypeDropdown
              className={""}
              monsterProperties={MonsterProperties}
              handleGroup={handleGroup}
            />
          </div>

          <h2 className="text-white mt-4">Type</h2>
          <div className="flex flex-row flex-wrap gap-4 mt-4">
            {group &&
              MonsterProperties[group].map((item) => (
                <div
                  className="flex-none text-white bg-gray-500 rounded-full px-4"
                  key={item}
                >
                  {item}
                </div>
              ))}
          </div>
          <h2 className="text-white mt-4">Fusion Bonus</h2>
          <div className="w-4 h-4 bg-purple-600 rounded-full"></div>
        </div>
      </form>
    </div>
  );
}

export default NewMonsterCard;
