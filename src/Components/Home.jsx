import "./Home.css";
import { MdArrowOutward } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';
import Categories from "./Categories";
const Home = () => {
  return (
    <div
      className="container-fluid main-cont"
      style={{ height: "800px", backgroundColor: "rgb(255, 82, 0)" }}
    >
      <div
        className="container p-5"
      >
        <div className="row d-flex justify-content-between">
          <div className="col-md-6 p-0">
            <img
              src="Images\Swiggy_logo.png"
              alt="logo-img"
              style={{ height: "52px", width: "170px" }}
            />
          </div>
          <div className="col-md-6 p-0">
            <ul className="nav-items">
              <li>Swiggy Corporate</li>
              <li>Partner with us</li>
              <li>
                <button className="Gettheapp p-3">
                  {" "}
                  Get the App <MdArrowOutward size={20} />
                </button>
              </li>
              <li>
                {/* <button className=" SignIn p-3">Sign In</button>
                <Link type=button to="/">Sign In </Link> */}
                <Link to="/login" className="SignIn p-3">Sign In</Link>

              </li>
            </ul>
          </div>
        </div>
        <div className="mt-5 p-4">
          <p className="text">
            Order food & groceries. Discover best restaurants. Swiggy it!
          </p>
          <div className="mt-5 d-flex justify-content-center">
            <button className="search  d-flex align-items-center justify-content-center gap-2">
              <span>
                <SlLocationPin size={20} color="rgb(255, 82, 0)" />
              </span>
              <p className="m-0">Enter your delivery location</p>
              <span>
                <RiArrowDropDownLine size={30} />
              </span>
            </button >
            <button className="btn-right d-flex align-items-center justify-content-between gap-2">
              <p className="m-0">Search for restaurant, item or more</p>
              <span><CiSearch size={25} /></span>
            </button>
          </div>
        </div>
        <div className="images-card d-flex justify-content-between">
          <div className=""><img src="Images\card1.png" style={{height:"350px",width:"300px"}}/></div>
          <div className=""><img src="Images\card2.png" style={{height:"350px",width:"300px"}}/></div>
          <div className=""><img src="card3.png" style={{height:"350px",width:"300px"}}/></div>
          <div className=""><img src="Images\card4.png" style={{height:"350px",width:"300px"}}/></div>
        </div>
      </div>
      <Categories/>
    </div>
  );
};

export default Home;
