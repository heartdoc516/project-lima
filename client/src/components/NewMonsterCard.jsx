import { useState } from "react";
import { MonsterEnvironmentDropdown, MonsterTypeDropdown } from "../components";
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

  function handleType() {}

  return (
    <form className={` bg-stone-700 rounded-lg p-3 ${className}`}>
      <div className="flex flex-row justify-between">
        <MonsterEnvironmentDropdown
          className={""}
          monsterProperties={MonsterProperties}
          handleGroup={handleGroup}
        />
        <MonsterTypeDropdown
          className={""}
          MonsterProperties={MonsterProperties}
          handleType={handleType}
          group={group}
        />
      </div>

      <div className="bg-gray-200 h-96 w-full mt-3"></div>

      <div className="p-4">
        <div className="flex flex-row justify-center">
          <input type="text" placeholder="name" onChange={handleName} />
        </div>
      </div>
    </form>
  );
}

export default NewMonsterCard;
