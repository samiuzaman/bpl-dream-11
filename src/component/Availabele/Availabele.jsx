import { useEffect } from "react";
import { useState } from "react";
import { IoIosContact } from "react-icons/io";
import { FaFlag } from "react-icons/fa";
import PropTypes from "prop-types";

const Availabele = ({ selectedPlayers, active }) => {
  const [carts, setCards] = useState([]);
  useEffect(() => {
    fetch("players.json")
      .then((response) => response.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <div className={active.availabele ? "pb-16 block" : "pb-16 hidden"}>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6 mt-8">
        {carts.map((cart) => (
          <div
            key={cart.name}
            className="cart cart-compact bg-base-100 shadow-xl w-[350px] max-w-96 p-4 border-2 rounded-xl"
          >
            <figure className="">
              <img
                className="h-60 w-full rounded-xl"
                src={cart.image}
                alt="Shoes"
              />
            </figure>
            <div className="cart-body">
              <div className="flex gap-2 items-center mt-4 mb-3">
                <span className="text-3xl">
                  <IoIosContact></IoIosContact>
                </span>
                <h3 className="text-xl font-semibold text-dark1-0">
                  {cart.name}
                </h3>
              </div>
              <div className="flex justify-between items-center border-b-2 pb-4">
                <p className="flex items-center gap-2 text-base text-dark3-0">
                  <FaFlag></FaFlag> {cart.country}
                </p>
                <span className="p-2 text-sm font-medium text-dark1-0 bg-[#1313130D] rounded-md">
                  {cart.role}
                </span>
              </div>
              <div className="flex justify-between items-end gap-3 pt-3">
                <div>
                  <h6 className="text-base text-dark1-0 font-bold mb-3">
                    Rating
                  </h6>
                  <h6 className="text-base text-dark1-0 font-bold mb-3">
                    Hand
                  </h6>
                  <h6 className="text-base text-dark1-0 font-bold py-1">
                    Price: ${cart.bidding_price}
                  </h6>
                </div>
                <div className="text-right">
                  <h6 className="mb-3">{cart.batting_bowling_type}</h6>
                  <button
                    onClick={() => selectedPlayers(cart)}
                    className="hover:bg-btnBg-0 border-2 p-2 rounded-lg"
                  >
                    Choose Player
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Availabele.propTypes = {
  selectedPlayers: PropTypes.func,
};

export default Availabele;
