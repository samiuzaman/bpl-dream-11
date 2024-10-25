import Hero from "./component/Hero/Hero";
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
import Main from "./component/Main/Main";
import Newsletter from "./component/Newsletter/Newsletter";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Availabele from "./component/Availabele/Availabele";
import Selected from "./component/Selected/Selected";

function App() {
  const [money, setMoney] = useState(0);
  const [active, setActiive] = useState();
  const [selectedPlayer, setSelectedPlayer] = useState([]);

  const addToMoney = () => {
    const balance = 100000;
    setMoney(money + balance);
    toast("Credit Added to your Account");
  };

  // const handleToggleBtn = () => {
  //   console.log("Button is Clicked");
  // };

  const selectedPlayers = (player) => {
    if (selectedPlayer.length > 5) {
      return toast("Sorry! The maximum player can choose is 6");
    }
    if (money > player.bidding_price) {
      const playerExist = selectedPlayer.find(
        (prevPlayer) => prevPlayer.id === player.id
      );
      if (!playerExist) {
        setMoney(money - player.bidding_price);
        setSelectedPlayer([...selectedPlayer, player]);
        toast(`Congrates !! ${player.name} is now in your squad`);
      } else {
        toast("Player already selected");
      }
    } else {
      toast("Not enough money to buy this player. Claim some Credit");
    }
  };

  const deleteSelectedPlayer = (id) => {
    const newSelectedPlayer = selectedPlayer.filter(
      (player) => player.id !== id
    );
    setSelectedPlayer(newSelectedPlayer);
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
        <Main selectedPlayer={selectedPlayer}></Main>
        <div>
          <Availabele selectedPlayers={selectedPlayers}></Availabele>
          <Selected
            selectedPlayer={selectedPlayer}
            deleteSelectedPlayer={deleteSelectedPlayer}
          ></Selected>
        </div>
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
