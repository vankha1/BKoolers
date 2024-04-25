import { useRef } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer"

const App = () => {
  const scrollRef = useRef();

  return (
    <div ref={scrollRef}>
      <Header scrollRef={scrollRef}></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default App;