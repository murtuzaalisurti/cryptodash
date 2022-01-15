import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Fav = () => {
  const [coins, setCoins] = useState([]);
  const [ppd, sppd] = useState([]);
  const [favCoinsPrice, setfavCoinsPrice] = useState([]);
  const [curr, setCurr] = useState("bitcoin");
  const getCoins = async () => {
    let data = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${curr}/market_chart?vs_currency=inr&days=30&interval=daily`
    );
    let pricesForDays = [];
    data.data.prices.map((perPrice) => {
      pricesForDays.push(perPrice[1]);
      //   console.log(pricesForDays);
      sppd(pricesForDays);
    });
    setCoins(data.data);
  };
  useEffect(() => {
    getCoins();
  }, []);
  const favCryptos = ["eth", "btc", "sol"];
  const dataForPrices = [];
  const show = () => {
    dataForPrices.splice(0, dataForPrices.length);
    setfavCoinsPrice([]);
    // console.log(ppd);
    ppd.map((price, index) => {
      setfavCoinsPrice((prev) => [
        ...prev,
        { name: `Day:${index + 1}`, uv: price },
      ]);
    });
    console.log(favCoinsPrice);
  };

  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      //   amt: 2900,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      //   amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      //   amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      //   amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      //   amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      //   amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      //   amt: 2100,
    },
  ];
  return (
    <>
      <AreaChart
        width={730}
        height={250}
        data={favCoinsPrice}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          {/* <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient> */}
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="uv"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        {/* <Area
          type="monotone"
          dataKey="pv"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorPv)"
        /> */}
      </AreaChart>
      <button onClick={show}>Click</button>
    </>
  );
};

export default Fav;
