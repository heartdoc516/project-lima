import React, { useState } from "react";

const MonsterEnvironmentDropdown = ({
  className,
  monsterProperties,
  handleGroup,
}) => {
  return (
    <select
      className="bg-stone-600 p-3 rounded-full"
      name="pets"
      id="pet-select"
      onChange={handleGroup}
    >
      <option className="rounded-full p-3" value="">
        Environment
      </option>
      {Object.keys(monsterProperties).map((key, index) => (
        <option key={key} value={key} className="rounded-full p-3">
          {key}
        </option>
      ))}
    </select>
  );
};

export default MonsterEnvironmentDropdown;
