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
  const [active, setActiive] = useState({
    availabele: true,
    status: "active",
  });
  const [selectedPlayer, setSelectedPlayer] = useState([]);

  const addToMoney = () => {
    const balance = 100000;
    setMoney(money + balance);
    toast.success("Credit Added to your Account", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const handleToggleBtn = (status) => {
    if (status === "availabele") {
      setActiive({
        availabele: true,
        status: "active",
      });
    } else {
      setActiive({
        availabele: false,
        status: "active",
      });
    }
  };

  const selectedPlayers = (player) => {
    if (selectedPlayer.length > 5) {
      return toast.error("Sorry! The maximum player can choose is 6", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
    if (money > player.bidding_price) {
      const playerExist = selectedPlayer.find(
        (prevPlayer) => prevPlayer.id === player.id
      );
      if (!playerExist) {
        setMoney(money - player.bidding_price);
        setSelectedPlayer([...selectedPlayer, player]);
        toast.success(`Congrates !! ${player.name} is now in your squad`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else {
        toast.error("Player already selected", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } else {
      toast.error("Not enough money to buy this player. Claim some Credit", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const deleteSelectedPlayer = (id) => {
    const newSelectedPlayer = selectedPlayer.filter(
      (player) => player.id !== id
    );
    setSelectedPlayer(newSelectedPlayer);
    toast.error("Removed Player", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <>
      <div className="sticky top-0 backdrop-blur-md bg-white/40">
        <Navbar money={money} ToastContainer={ToastContainer}></Navbar>
      </div>
      <header className="w-11/12 lg:w-5/6 mx-auto">
        <div>
          <ToastContainer />
        </div>
        <Hero addToMoney={addToMoney} ToastContainer={ToastContainer}></Hero>
      </header>
      <main className="w-11/12 lg:w-5/6 mx-auto my-28">
        <Main
          selectedPlayer={selectedPlayer}
          handleToggleBtn={handleToggleBtn}
          active={active}
        ></Main>
        <div>
          <Availabele
            selectedPlayers={selectedPlayers}
            active={active}
          ></Availabele>
          <Selected
            selectedPlayer={selectedPlayer}
            deleteSelectedPlayer={deleteSelectedPlayer}
            active={active}
            handleToggleBtn={handleToggleBtn}
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
