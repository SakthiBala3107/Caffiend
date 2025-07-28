import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import CoffeeForm from "./components/CoffeeForm";
import Stats from "./components/Stats";
import History from "./components/History";
// import './App.css'

function App() {
  const isAuthenticated = false;

  const authenticatedContent = (
    <>
    <Stats/>
    <History/>
    </>
  )

  return (
    <>
      <Layout>
        <Hero />
        <CoffeeForm />
        {isAuthenticated && authenticatedContent}
      </Layout>
    </>
  );
}

export default App;
