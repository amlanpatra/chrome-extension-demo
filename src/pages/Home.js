import { Fragment } from "react";
import "../styling/Home.css";
import "../styling/utility.css";

const Home = () => {
  return (
    // <Fragment>
    <div className="container d-flex direction-column align-center justify-center">
      <h1 className="heading-1">JUST DO IT</h1>
      <span className="heading-2">What's your name ? </span>
      <input className="input" />
      {/* <div className="justdoit">
        <img src="/just_do_it.png" alt="just_do_it_img" />
      </div> */}
    </div>
    // </Fragment>
  );
};
export default Home;
