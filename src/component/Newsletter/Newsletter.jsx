const Newsletter = () => {
  const customBackground = {
    backgroundImage:
      "linear-gradient(to top right, #B9E9F7, white, white, #FADC9D)",
  };
  return (
    <div
      style={customBackground}
      className="w-11/12 lg:w-4/5 mx-auto absolute flex flex-col items-center py-12 rounded-xl text-center"
    >
      <h2 className="text-xl md:text-3xl font-bold text-dark1-0 mb-4">
        Subscribe to our Newsletter
      </h2>
      <p className="text-base text-dark3-0 font-medium font-Inter">
        Get the latest updates and news right in your inbox!
      </p>
      <div className="flex justify-center items-center gap-2 md:gap-4 mt-6">
        <input
          type="text"
          placeholder="Enter your email"
          className="input input-bordered w-48"
        />
        <button className="btn text-dark1-0 text-base font-bold bg-gradient-to-tr from-[#d67cb2e3] to-[#F8CE5C]">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
