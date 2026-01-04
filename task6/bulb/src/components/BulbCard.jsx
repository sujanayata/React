import React, { useState } from "react";
import "./BulbCard.css";

const BulbCard = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="card">
      {/* <h2>Bulb ON / OFF</h2> */}

      <div className="bulb-wrapper">
        <img
          src={isOn ? "bulb2.png" : "bulb1.webp"}
          alt="Bulb"
          className={isOn ? "glow" : ""}
        />
      </div>

      <div className="buttons">
        <button
          className={isOn ? "active" : ""}
          onClick={() => setIsOn(true)}
        >
          ON
        </button>

        <button
          className={!isOn ? "active" : ""}
          onClick={() => setIsOn(false)}
        >
          OFF
        </button>
      </div>
    </div>
  );
};

export default BulbCard;
