import React from "react";
import "./App.css";
import NavBar from "./Components/Navbar/NavBar";
import Home from "./Components/Home/Home";
import Middle from "./Components/Middle/Middle";
import Destination from "./Components/Destinations/Destination";
import Portfolio from "./Components/Portfolio/Portfolio";
import Review from "./Components/Review/Review";
import Question from "./Components/Questions/Question";
import Subscribe from "./Components/Subscribes/Subscribe";
import Footer from "./Components/Footers/Footer";
// import SignIn from "./Components/SignUp/SignIn";
// import Login from "./Components/LogIn/Login";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Middle />
      <Destination />
      <Portfolio />
      <Review />
      <Question />
      <Subscribe />
      <Footer />

      {/* <SignIn />
      <Login /> */}
    </div>
  );
}

export default App;
