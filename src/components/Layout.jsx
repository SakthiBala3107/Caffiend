import React, { useState } from "react";

import Modal from "./Modal";
import Authentication from "./Authentication";
import { useAuth } from "../context/AuthContext";

const Layout = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  const { globalUser, logout } = useAuth();

  const header = (
    <header>
      <div>
        <h1 className="text-gradient">CAFFIEND</h1>
        <p>For Coffee Insatiates</p>
      </div>

      {globalUser ? (
        <button onClick={logout}>
          <p>Logout</p>
        </button>
      ) : (
        <button
          onClick={() => {
            setShowModal(true);
          }}
        >
          <p>Sign up for free</p>
          <i className="fa-solid fa-mug-hot"></i>
        </button>
      )}
    </header>
  );
  const footer = (
    <footer>
      <p>
        <span className="text-gradient">Caffiend </span>was made by{" "}
        <a target="_blank" href="https://github.com/SakthiBala3107/">
          Red
        </a>{" "}
        <br />
        using the{" "}
        <a target="_blank" href="https://www.fantacss.smoljames.com/">
          Fanta css
        </a>{" "}
        design Library
      </p>
    </footer>
  );

  // RENDERING STUFFS
  return (
    <>
      {/* MODAL-STUFFS */}

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
      {header}
      <main>{children}</main>
      {footer}
    </>
  );
};

export default Layout;
