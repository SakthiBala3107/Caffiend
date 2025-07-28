import React from "react";

const Layout = ({ children }) => {
  const header = (
    <header>
      <div>
        <h1 className="text-gradient">CAFFIEND</h1>
        <p>For Coffee Insatiates</p>
      </div>
      <button>
        <p>Sign up for free</p>
        <i className="fa-solid fa-mug-hot"></i>
      </button>
    </header>
  );
  const footer = (
    <footer>
      <p>
        <span className="text-gradient">Caffiend </span>was made by{" "}
        <a target="_blank" href="https://github.com/SakthiBala3107/">
          Red
        </a>{" "}
        using the{" "}
        <a target="_blank" href="https://www.fantacss.smoljames.com/">
          Fanta css
        </a>{" "}
        design Library
      </p>
    </footer>
  );

  return (
    <>
      {header}
      <main>{children}</main>
      {footer}
    </>
  );
};

export default Layout;
