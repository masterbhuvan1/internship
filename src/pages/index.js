import React from "react";
import Header from "./components/header";
import FirstSection from "./homePage/firstSection";
import Footer from "./components/footer";
import SecondSection from "./homePage/secondSection";
import ThirdSection from "./homePage/thirdSection";
import FourthSection from "./homePage/fourthSection";
import FifthSection from "./homePage/fifthSection";
import SixthSection from "./homePage/sixthSection";
import SeventhSection from "./homePage/seventhSection";

function index() {
  return (
    <div className="">
      <Header />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
      <Footer />
    </div>
  );
}
export default index;
