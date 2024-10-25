const Main = ({ selectedPlayer, handleToggleBtn, active }) => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h2 className="text-2xl text-dark1-0 font-bold">
          {active.availabele
            ? "Available Players"
            : `Selected Page (${selectedPlayer.length} / 6)`}
        </h2>
        {/* <h2>Selected Page {selectedPlayer.length} / 6</h2> */}
        <div className="join mt-5 md:mt-0">
          <button
            onClick={() => handleToggleBtn("availabele")}
            className={`${
              active.availabele
                ? "active btn border-2 text-dark4-0 join-item"
                : "btn border-2 text-dark4-0 join-item"
            }`}
          >
            Available
          </button>
          <button
            onClick={() => handleToggleBtn("selected")}
            className={`${
              active.availabele
                ? "btn border-2 text-dark4-0 join-item"
                : "active btn border-2 text-dark4-0 join-item"
            }`}
          >
            Selected ({selectedPlayer.length})
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
