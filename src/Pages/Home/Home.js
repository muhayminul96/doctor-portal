import React from "react";
import Banner from "./Banner";
import Contact from "./Contract";
import Footer from "./Footer";
import Info from "./Info";
import MakeApponment from "./MakeApponment";
import Services from "./Services";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div className=" px-12">
      <p> this is home </p>
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <MakeApponment></MakeApponment>
      <Testimonials></Testimonials>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
