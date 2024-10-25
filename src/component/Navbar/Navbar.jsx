import Logo from "../../assets/logo.png";
import Coin from "../../assets/coin.png";
import PropTypes from "prop-types";

const Navbar = ({ money }) => {
  return (
    <div className="navbar justify-between bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>Home</li>
            <li>Fixture</li>
            <li>Teams</li>
            <li>Schedules</li>
          </ul>
        </div>
        {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
        <img className="w-16 h-16" src={Logo}></img>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-x-8">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Fixture</a>
          </li>
          <li>
            <a>Teams</a>
          </li>
          <li>
            <a>Schedules</a>
          </li>
        </ul>
      </div>
      <div className="min-w-44 border-2 px-3 py-2 flex justify-center gap-2 rounded-lg ml-4">
        <p className="text-base text-dark1-0 font-semibold"> {money} Coin</p>
        <img className="w-6 h-6" src={Coin}></img>
      </div>
      {/* <a className="btn ml-10">Button</a> */}
    </div>
  );
};

Navbar.propTypes = {
  money: PropTypes.number,
};

export default Navbar;
