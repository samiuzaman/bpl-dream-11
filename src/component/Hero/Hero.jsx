import Background from "../../assets/backgroud.png";
import BannerImg from "../../assets/banner.png";

const Hero = () => {
  const custom = {
    background: `url(${Background})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <div
      style={custom}
      className="bg-no-repeat bg-center bg-contain rounded-2xl text-center flex lg:flex-col justify-center items-center py-32 my-8"
    >
      <img className="w-28 h-28 mb-6" src={BannerImg} alt="Cricket Image" />
      <h2 className="text-4xl text-white font-bold mb-4">
        Assemble Your Ultimate Dream 11 Cricket Team
      </h2>
      <p className="text-2xl text-lightBlack-0 font-normal font-Inter mb-6">
        Beyond Boundaries Beyond Limits
      </p>
      <div className="border border-btnBg-0 p-1 rounded-xl">
        <button className="btn">Claim Free Credit</button>
      </div>
    </div>
  );
};

export default Hero;
