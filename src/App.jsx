import { Outlet } from "react-router-dom";
import Navbar from "./assets/components/navbar/Navbar";
import Footer from "./assets/components/footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default App;
