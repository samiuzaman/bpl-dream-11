import Hero from "./component/Hero/Hero";
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
import Main from "./component/Main/Main";
import Newsletter from "./component/Newsletter/Newsletter";
import { useState } from "react";

function App() {
  const [money, setMoney] = useState(0);

  const addToMoney = () => {
    const balance = 10000;
    setMoney(money + balance);
  };
  console.log(money);
  return (
    <>
      <header className="w-11/12 lg:w-4/5 mx-auto">
        <Navbar money={money}></Navbar>
        <Hero addToMoney={addToMoney}></Hero>
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
