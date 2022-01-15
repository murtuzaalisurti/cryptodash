import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { DashWrapper } from "../styledComponents/DashboardElements";
import LeftBar from "../components/LeftBar";
import axios from "axios";
const Dashboard = () => {
  const [coins, setCoins] = useState([]);
  const getCoins = async () => {
    let data = await axios.get("https://api.coingecko.com/api/v3/coins");
    console.log(data.data);
    setCoins(data.data);
    // console.log(data.data[1].market_data.current_price.usd);
    // console.log(new Date(data.data[1].last_updated));
    // console.log(data.data[1].name);
    // console.log(typeof coins);
    // coins.map((coin) => console.log(coin));
    // coins.forEach((e) => console.log(e));
    // coins.filter((coin) => coin.name !== "bitcoin");
    // console.log(data.data[1].)
  };
  useEffect(() => {
    getCoins();
  }, []);

  // console.log(coins);
  const getCoinObj = () => {
    coins.forEach((coin) => console.log(coin));
  };
  return (
    <DashWrapper>
      <Header title={"Dashboard"} />
      <LeftBar />
      <div className="Center">
        <h1 className="Name">Hey, Person-1</h1>
        <div className="cards">
          {coins.map((coin, id) => {
            return (
              <>
                <div className="card" key={id}>
                  <div className="left">
                    <h1>{coin.market_data.current_price.usd.toFixed(2)}</h1>
                    <h4>{`${new Date(coin.last_updated).toLocaleString()}`}</h4>
                  </div>
                  <p>{coin.name}</p>
                  <div className="right">
                    <img src={coin.image.small} alt="" />
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </DashWrapper>
  );
};

export default Dashboard;
