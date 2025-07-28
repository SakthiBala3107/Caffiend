import React, { useState } from "react";
import { coffeeOptions } from "../utills";

const CoffeeForm = () => {
  const [selectedCoffee, setSelectedCoffee] = useState(null); // displays  (first 6) coffees
  const [showCoffeeTypes, setShowCoffeeTypes] = useState(false); // for other coffee-types

  //RENDERING STUFFS//
  return (
    <>
      <div className="section-header">
        <i className="fa-solid fa-pencil" />
        <h2>Start Tracking Today</h2>
      </div>

      {/* coffee types */}
      <h4>Select Coffee Type</h4>
      <div className="coffee-grid">
        {coffeeOptions.slice(0, 5).map((option, idx) => (
          <button
            className={
              "button-card " +
              (option.name === selectedCoffee ? "coffee-button-selected" : "")
            }
            onClick={() => {
              setSelectedCoffee(option.name);
              setShowCoffeeTypes(false);
            }}
          >
            <h4>{option.name}</h4>
            <p>{option.caffeine} mg</p>
          </button>
        ))}

        {/* OTHER-OPTIONS */}
        <button
          className={
            "button-card " + (showCoffeeTypes ? "coffee-button-selected" : "")
          }
          onClick={() => {
            setShowCoffeeTypes(!showCoffeeTypes);
            setSelectedCoffee(null)
          }}
        >
          <h4>Other</h4>
          <p>n/a</p>
        </button>
      </div>

      {/* coffee-options */}
      {showCoffeeTypes && (
        <select name="coffee-list" id="coffee-list">
          <option value={null}>Select type</option>
          {coffeeOptions.map((option, idx) => (
            <option key={idx} value={option.name}>
              {option.name} ({option.caffeine}mg)
            </option>
          ))}
        </select>
      )}

      <h4>Add the cost ($)</h4>
      <input type="number" placeholder="4.50" className="w-full" />

      <h4>Time since consumption</h4>
      <div className="time-entry">
        {/* Hours */}
        <div>
          <h6>Hours</h6>
          <select id="hours-select">
            {[
              0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
              19, 20, 21, 22, 23,
            ].map((hours, idx) => (
              <option key={idx} value={hours}>
                {hours}
              </option>
            ))}
          </select>
        </div>

        {/* mins */}
        <div>
          <h6>Minutes</h6>
          <select id="mins-select">
            {[0, 5, 10, 15, 30, 45].map((mins, idx) => (
              <option key={idx} value={mins}>
                {mins}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button>
        <p>Add entry</p>
      </button>
    </>
  );
};

export default CoffeeForm;
