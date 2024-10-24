import { useEffect } from "react";
import { useState } from "react";
import { IoIosContact } from "react-icons/io";
import { FaFlag } from "react-icons/fa";
import Selected from "../Selected/Selected";

const Availabele = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("players.json")
      .then((response) => response.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6 mt-8">
        {cards.map((card) => (
          <div
            key={card.name}
            className="card card-compact bg-base-100 w-96 shadow-xl p-4 border-2"
          >
            <figure className="">
              <img
                className="h-72 w-full rounded-xl"
                src={card.image}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <div className="flex gap-2 items-center">
                <span className="text-3xl">
                  <IoIosContact></IoIosContact>
                </span>
                <h3 className="text-xl font-semibold text-dark1-0">
                  {card.name}
                </h3>
              </div>
              <div className="flex justify-between items-center border-b-2 pb-4">
                <p className="flex items-center gap-2 text-base text-dark3-0">
                  <FaFlag></FaFlag> {card.country}
                </p>
                <span className="p-2 text-sm font-medium text-dark1-0 bg-[#1313130D] rounded-md">
                  {card.role}
                </span>
              </div>
              <div className="flex justify-between items-end pt-3">
                <div>
                  <h6 className="text-base text-dark1-0 font-bold mb-3">
                    Rating
                  </h6>
                  <h6 className="text-base text-dark1-0 font-bold mb-3">
                    Left-Hand-Bat
                  </h6>
                  <h6 className="text-base text-dark1-0 font-bold">
                    Price: ${card.bidding_price}
                  </h6>
                </div>
                <div className="text-right">
                  <h6 className="mb-3">{card.batting_bowling_type}</h6>
                  <button className="border-2 p-2 rounded-lg">
                    Choose Player
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Selected cards={cards}></Selected>
    </div>
  );
};

export default Availabele;
