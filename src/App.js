import React from "react";
import "./App.css";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/NavBar";
import { useRoutes } from "hookrouter";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const routes = {
  "/": () => <Home />,
  "/about*": () => <About />,
  "/contact/:uid": ({uid}) => <Contact uid={uid} />,
};

function App() {
  const match = useRoutes(routes);

  return (
    <Wrapper>
      <Navbar />
      {match || <NotFound />}
    </Wrapper>
  );
}

export default App;
