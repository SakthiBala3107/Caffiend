import React, { useState } from "react";
import { coffeeOptions } from "../utills";
import Modal from "./Modal";
import Authentication from "./Authentication";

const CoffeeForm = ({ isAuthenticated }) => {
  const [selectedCoffee, setSelectedCoffee] = useState(null); // displays  (first 6) coffees
  const [showCoffeeTypes, setShowCoffeeTypes] = useState(false); // for other coffee-types
  const [cost, setCost] = useState(0); //cost
  const [hour, setHour] = useState(0); //hour
  const [minutes, setMinutes] = useState(0); //minutes
  const [showModal, setShowModal] = useState(false); //minutes

  // FUNTIONS
  const handleSubmit = () => {
    if (!isAuthenticated) {
      setShowModal(true);
    }
    console.log(selectedCoffee, showCoffeeTypes, cost, hour, minutes);
  };

  //RENDERING STUFFS//
  return (
    <>
      {showModal && (
        <Modal
          handleCloseModal={() => {
            setShowModal(false);
          }}
        >
          <Authentication
            handleCloseModal={() => {
              setShowModal(false);
            }}
          />
        </Modal>
      )}

      {/* actual-thing */}
      <div className="section-header">
        <i className="fa-solid fa-pencil" />
        <h2>Start Tracking Today</h2>
      </div>

      {/* coffee types */}
      <h4>Select Coffee Type</h4>
      <div className="coffee-grid">
        {coffeeOptions.slice(0, 5).map((option, idx) => (
          <button
            key={idx}
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
            setSelectedCoffee(null);
            // setShowModal(true);
          }}
        >
          <h4>Other</h4>
          <p>n/a</p>
        </button>
      </div>

      {/* coffee-options */}
      {showCoffeeTypes && (
        <select
          name="coffee-list"
          id="coffee-list"
          onChange={(e) => {
            setSelectedCoffee(e.target.value);
          }}
        >
          <option value={null}>Select type</option>

          {coffeeOptions.map((option, idx) => (
            <option key={idx} value={option.name}>
              {option.name} ({option.caffeine}mg)
            </option>
          ))}
        </select>
      )}

      <h4>Add the cost ($)</h4>
      <input
        type="number"
        placeholder="4.50"
        className="w-full"
        value={cost}
        onChange={(e) => {
          setCost(e.target.value);
        }}
      />

      <h4>Time since consumption</h4>
      <div className="time-entry">
        {/* Hours */}
        <div>
          <h6>Hours</h6>
          <select
            id="hours-select"
            onChange={(e) => {
              setHour(e.target.value);
            }}
          >
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
          <select
            id="mins-select"
            onChange={(e) => {
              setMinutes(e.target.value);
            }}
          >
            {[0, 5, 10, 15, 30, 45].map((mins, idx) => (
              <option key={idx} value={mins}>
                {mins}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button onClick={handleSubmit}>
        <p>Add entry</p>
      </button>
    </>
  );
};

export default CoffeeForm;
