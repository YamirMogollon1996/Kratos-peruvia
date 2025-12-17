import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import Userapi from "./features/users/api/Userapi";
import Userlist from "./features/users/component/Userlist";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Userlist></Userlist>
    </>
  );
}

export default App;
