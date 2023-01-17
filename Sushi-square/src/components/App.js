import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

const App = () => {
  const [sushi, setSushi] = useState([]);

  const [wallet, setWallet] = useState(100);

  useEffect(() => {
    fetch(API)
      .then((resp) => resp.json())
      .then((sushis) => {
        const updatedSushis = sushis.map((sushi) => {
          return { ...sushi, eaten: false };
        });
        setSushi(updatedSushis);
      });
  }, []);

  const addMoney = (money) => {
    setWallet(wallet + money);
  };

  const handleEat = (eatenSushi) => {
    if (wallet >= eatenSushi.price) {
      const updatedSushis = sushi.map((sushi) => {
        if (sushi.id === eatenSushi.id) return { ...sushi, eaten: true };
        return sushi;
      });
      setSushi(updatedSushis);
      setWallet(wallet - eatenSushi.price);
    } else {
      alert("Not enough funds");
    }
  };
  // return sushi that are eaten or returns a truthy value
  const eatenSushis = sushi.filter((sushi) => sushi.eaten);

  return (
    <div className="app">
      <SushiContainer sushi={sushi} onEatSushi={handleEat} />
      <Table wallet={wallet} addMoney={addMoney} plates={eatenSushis} />
    </div>
  );
};

export default App;
