import Hero from "./component/Hero/Hero";
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
import Main from "./component/Main/Main";
import Newsletter from "./component/Newsletter/Newsletter";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [money, setMoney] = useState(0);

  const addToMoney = () => {
    const balance = 10000;
    setMoney(money + balance);
    toast("Credit Added to your Account");
  };

  return (
    <>
      <header className="w-11/12 lg:w-4/5 mx-auto">
        <div>
          <ToastContainer></ToastContainer>
        </div>
        <Navbar money={money} ToastContainer={ToastContainer}></Navbar>
        <Hero addToMoney={addToMoney} ToastContainer={ToastContainer}></Hero>
      </header>
      <main className="w-11/12 lg:w-4/5 mx-auto my-28">
        <Main></Main>
        <Newsletter></Newsletter>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}

export default App;

// import PropTypes from 'prop-types';
// Card.propTypes = {
//   addRecipeToQueue: PropTypes.func,
// };
