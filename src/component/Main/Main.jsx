import Availabele from "../Availabele/Availabele";

const Main = () => {
  return (
    <div className="">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl text-dark1-0 font-bold">Available Players</h2>
        <div className="">
          <button className="btn myBtn btn-color join-item">Available</button>
          <button className="btn border-2 text-dark4-0">Selected (0)</button>
        </div>
      </div>
      <div>
        <Availabele></Availabele>
      </div>
    </div>
  );
};

export default Main;
