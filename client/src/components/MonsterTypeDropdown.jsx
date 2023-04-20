import React, { useState } from "react";

const MonsterTypeDropdown = ({ className, monsterProperties, handleGroup }) => {
  return (
    <div className={`border-2 ${className}`}>
      <select name="pets" id="pet-select" onChange={handleGroup}>
        <option value="">Group</option>
        {Object.keys(monsterProperties).map((key, index) => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MonsterTypeDropdown;
