import PropTypes from "prop-types";
import { FaTrashAlt } from "react-icons/fa";
const Selected = ({ selectedPlayer, deleteSelectedPlayer }) => {
  return (
    <div className="pb-16">
      <h2>Selected Page</h2>
      {
        <div>
          {selectedPlayer.map((cart) => (
            <div
              key={cart.id}
              className=" flex justify-between items-center border-2 p-4 rounded-xl mb-6"
            >
              <div className="flex items-center gap-5">
                <img className="w-20 h-20 rounded-lg" src={cart.image}></img>
                <div>
                  <h2 className="text-xl font-bold text-dark1-0 mb-1">
                    {cart.name}
                  </h2>
                  <p className="text-base font-normal text-dark4-0">
                    {cart.batting_bowling_type}
                  </p>
                </div>
              </div>
              <button
                onClick={() => deleteSelectedPlayer(cart.id)}
                className="btn hover:bg-btnBg-0 text-red-600 text-2xl"
              >
                <FaTrashAlt></FaTrashAlt>
              </button>
            </div>
          ))}
          <div className="w-48 p-2 border-2 rounded-xl">
            <button className="w-full btn myBtn btn-color">
              Add More Player
            </button>
          </div>
        </div>
      }
    </div>
  );
};

Selected.propTypes = {
  selectedPlayer: PropTypes.array,
  deleteSelectedPlayer: PropTypes.func,
};

export default Selected;
