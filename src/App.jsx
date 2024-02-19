import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./componants/header/Header";
import Nav from "./componants/nav/Nav";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Nav/>
    </>
  );
}

export default App;
