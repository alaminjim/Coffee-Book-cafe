import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Nabbar/Navbar";
import { Toaster } from "react-hot-toast";

const Layouts = () => {
  return (
    <div>
      <Toaster></Toaster>
      <div className="h-16">
        <Navbar></Navbar>
      </div>
      <div className="min-h-[calc(100vh-232px)] container mx-auto px-10 py-10">
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Layouts;
