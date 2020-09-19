import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/NavBar";
import { useRoutes } from "hookrouter";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const routs = {
  "/": () => <Home />,
  "/about": () => <About />,
  "/contact/:uid": (uid) => <Contact uid={uid} />,
};

function App() {
  const match = useRoutes(routs);
  return (
    <Wrapper>
      <Navbar />
      {match || <NotFound />}
    </Wrapper>
  );
}

export default App;
