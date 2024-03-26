import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <div>Footer</div>
    </>
  );
}

export default App;
