import React from "react";
import {
  timeSinceConsumption,
  // getCaffeine,
  calculateCurrentCaffeineLevel,
  getCaffeineAmount,
} from "../utills";
import { useAuth } from "../context/AuthContext";

const History = () => {
  const { globalData } = useAuth();
  return (
    <>
      <div className="section-header">
        <i className="fa-solid fa-timeline" />
        <h2>History</h2>
      </div>
      <p>
        <i>Hover for More Information</i>
      </p>
      <div className="coffee-history">
        {Object.keys(globalData)
          .sort((a, b) => b - a)
          .map((utcTime, idx) => {
            const coffee = globalData[utcTime];
            const timeSinceConsume = timeSinceConsumption(utcTime);
            const originalAmount = getCaffeineAmount(coffee.name);
            const remainingAmount = calculateCurrentCaffeineLevel({
              [utcTime]: coffee,
            });

            const summary = `${coffee.name} | ${timeSinceConsume} | $g${coffee.cost} | ${remainingAmount}mg / ${originalAmount}mg `;
            //
            // const eachTitle = globalData[utcTime].name;
            return (
              <div key={idx} title={summary}>
                <i className="fa-solid fa-mug-hot" />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default History;
