import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import CoffeeForm from "./components/CoffeeForm";
import Stats from "./components/Stats";
import History from "./components/History";
import { useAuth } from "./context/AuthContext";
// import './App.css'

function App() {
  const { globalData, globalUser, isLoading } = useAuth();

  const isAuthenticated = globalUser;
  const isData = globalData && !!Object.keys(globalData || {}).length;

  const authenticatedContent = (
    <>
      <Stats />
      <History />
    </>
  );

  return (
    <>
      <Layout>
        <Hero />
        <CoffeeForm isAuthenticated={isAuthenticated} />
        {isAuthenticated && isLoading && <p>Loading...</p>}
        {isAuthenticated && isData && authenticatedContent}
      </Layout>
    </>
  );
}

export default App;
