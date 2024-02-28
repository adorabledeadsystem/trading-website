import Footer from "components/general/Footer";
import Header from "components/general/Header";
import Hero from "components/landing/Hero";
import About from "components/landing/About";
import Steps from "components/landing/Steps";
import Why from "components/landing/Why";

import Market from "components/landing/Market";
import Reviews from "components/landing/Reviews";

const Main = () => {
  
  return (
    <>
      <Header />
      <Hero />
      <Market />
      <About />
      <Steps />
      <Why />
      <Reviews />
      <Footer />
    </>
  );
};

export default Main;
