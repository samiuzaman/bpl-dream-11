import Footerlogo from "../../assets/logo-footer.png";
const Footer = () => {
  return (
    <div className="bg-footerBg-0 pt-36">
      <div className="flex justify-center">
        <img src={Footerlogo}></img>
      </div>
      <div
        className="w-11/12 lg:w-4/5 mx-auto  md:grid 
      md:grid-cols-2 lg:grid-cols-3 md:justify-items-center py-16"
      >
        <nav className="mb-8 md:mb-0">
          <h6 className="f-title">About Us</h6>
          <p className="text-lightBlack2-0">
            We are an enthusiastic team committed to giving our clients the
            greatest services possible.
          </p>
        </nav>
        <nav className="flex flex-col mb-8 md:mb-0">
          <h6 className="f-title">Quick Links</h6>
          <ul className="list-disc ml-6 text-lightBlack2-0">
            <li className="link link-hover mb-2">Home</li>
            <li className="link link-hover mb-2">Services</li>
            <li className="link link-hover mb-2">About</li>
            <li className="link link-hover mb-2">Contact</li>
          </ul>
        </nav>
        <form>
          <h6 className="f-title">Subscribe</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text text-base font-normal text-lightBlack2-0 mb-5">
                Subscribe to our newsletter for the latest updates.
              </span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="Enter your email"
                className="input input-bordered join-item"
              />
              <button className="btn myBtn btn-color join-item bg-gradient-to-r from-[#F0CA69] to-[#D05A71] shadow-inner">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </div>
      <div className="py-5 border-t border-lightBlack2-0 text-center">
        <p className="text-base font-normal text-lightBlack2-0">
          @2024 Your Company All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
