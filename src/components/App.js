// import prepared components only

/*
 ** create a functional component
 ** create 1 component for 1 page
 ** if element is re-used 2 times on the page - create the component
 */

/*
 ** edit styles for index.js file
 ** edit styles for App.js file
 ** for each component create a separate css file
 ** add only basic styles for the components in the seperate file
 ** add individual styles for the components inline
 */

import React from "react";
import Header from "./typography/Header";
import Main from "./typography/Main";
import About from "./typography/About";
import Offer from "./typography/Offer";
import Contact from "./typography/Contact";
import Footer from "./typography/Footer";
import "../styles/App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <About />
      <Offer />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
