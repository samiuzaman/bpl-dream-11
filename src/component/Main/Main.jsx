import Availabele from "../Availabele/Availabele";

const Main = () => {
  return (
    <div className="">
      <div className="flex flex-ro md:flex-row justify-between items-center">
        <h2 className="text-2xl text-dark1-0 font-bold">Available Players</h2>
        <div className="join mt-5 md:mt-0">
          <button className="btn myBtn btn-color join-item">Available</button>
          <button className="btn border-2 text-dark4-0 join-item">
            Selected (0)
          </button>
        </div>
      </div>
      <div>
        <Availabele></Availabele>
      </div>
    </div>
  );
};

export default Main;
