import { useState } from "react";
import { Navbar, Welcome, Footer, Services, Transactions } from "./components";

const App = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar></Navbar>
      <Welcome></Welcome>
    </div>
    <Services></Services>
    <Transactions></Transactions>
    <Footer></Footer>
  </div>
);

export default App;
