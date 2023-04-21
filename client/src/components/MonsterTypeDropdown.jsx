import React, { useState } from "react";
import { MonsterProperties } from "../utils/MonsterProperties";

const MonsterTypeDropdown = ({
  className,
  monsterProperties,
  handleType,
  group,
}) => {
  return (
    <div className={`border-2 ${className}`}>
      <select name="types" id="type-select" onChange={handleType}>
        <option value="">Type</option>
        {group &&
          MonsterProperties[group].map((item) => (
            <option key={item}>{item}</option>
          ))}
      </select>
    </div>
  );
};

export default MonsterTypeDropdown;
