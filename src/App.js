import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import ContentTable from "./components/ContentTable";
import DisplayJson from "./components/DisplayJson";
import "./App.css";

const App = () => {
  const [totalValuation, setTotalValuation] = useState([]);
  const [valuationOne, setValuationOne] = useState([]);
  const [valuationTwo, setValuationTwo] = useState([]);
  const [valuationThree, setValuationThree] = useState([]);
  const [valuationFour, setValuationFour] = useState([]);

  const handleValuationOne = (e) => {
    setValuationOne((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleValuationTwo = (e) => {
    setValuationTwo((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleValuationThree = (e) => {
    setValuationThree((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleValuationFour = (e) => {
    setValuationFour((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const addJSON = (e) => {
    e.preventDefault();
    setTotalValuation({
      aspek_penilaian_1: { ...valuationOne },
      aspek_penilaian_2: { ...valuationTwo },
      aspek_penilaian_3: { ...valuationThree },
      aspek_penilaian_4: { ...valuationFour },
    });
  };

  return (
    <div className="App">
      <Header />
      <ContentTable
        handleValuationOne={handleValuationOne}
        handleValuationTwo={handleValuationTwo}
        handleValuationThree={handleValuationThree}
        handleValuationFour={handleValuationFour}
        addJSON={addJSON}
      />
      <DisplayJson totalValuation={totalValuation} />
    </div>
  );
};

export default App;
