import PropTypes from "prop-types";
import Background from "../../assets/backgroud.png";
import BannerImg from "../../assets/banner.png";

const Hero = ({ addToMoney }) => {
  const custom = {
    background: `url(${Background})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <div
      style={custom}
      className="bg-no-repeat bg-center bg-contain rounded-2xl text-center lg:flex lg:flex-col lg:justify-center lg:items-center py-32 my-8"
    >
      <div className="flex justify-center mb-6">
        <img className="w-28 h-28 " src={BannerImg} alt="Cricket Image" />
      </div>
      <h2 className="text-4xl text-white font-bold mb-4">
        Assemble Your Ultimate Dream 11 Cricket Team
      </h2>
      <p className="text-2xl text-lightBlack-0 font-normal font-Inter mb-6">
        Beyond Boundaries Beyond Limits
      </p>
      <div className="lg:border lg:border-btnBg-0 p-1 rounded-xl">
        <button onClick={addToMoney} className="btn myBtn btn-color">
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};

Hero.propTypes = {
  addToMoney: PropTypes.func,
};

export default Hero;
