const Main = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2>Available Players</h2>
        <div className="">
          <button className="btn myBtn btn-color join-item">Available</button>
          <button className="btn border-2 text-dark4-0">Selected (0)</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
