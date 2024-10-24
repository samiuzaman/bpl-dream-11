import Hero from "./component/Hero/Hero";
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
import Main from "./component/Main/Main";

function App() {
  return (
    <>
      <header className="w-11/12 lg:w-4/5 mx-auto">
        <Navbar></Navbar>
        <Hero></Hero>
      </header>
      <main className="w-11/12 lg:w-4/5 mx-auto my-16">
      <Main></Main>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}

export default App;

// import PropTypes from 'prop-types';
// Card.propTypes = {
//   addRecipeToQueue: PropTypes.func,
// };
