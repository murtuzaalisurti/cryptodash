import React, { useState, useEffect, createContext } from "react";
import Header from "../components/Header";
import { DashWrapper } from "../styledComponents/DashboardElements";
import LeftBar from "../components/LeftBar";
import axios from "axios";

export const contextOfCoin = createContext()

const Dashboard = () => {
  const [coins, setCoins] = useState([]);
  const getCoins = async () => {
    let data = await axios.get("https://api.coingecko.com/api/v3/coins");
    console.log(data.data);
    setCoins(data.data);

  };
  useEffect(() => {
    getCoins();
  }, []);



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
                    <h1>$&nbsp;{coin.market_data.current_price.usd.toFixed(2)}</h1>
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
