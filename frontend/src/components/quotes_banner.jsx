/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./quotes_banner.css";

export function QuotesBanner() {
  const [quote, setquote] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    axios.get("https://type.fit/api/quotes").then((response) => {
      let index = Math.floor(Math.random() * response.data.length);
      setquote(response.data[index]);
    });
  }, []);

  return (
    <div className="h-[200px] relative  bg-black text-white my-4" style={{marginLeft:"250px"}}>
      <div className="relative bubbles flex">
        <span style={{ "--i": 11 }} className=""></span>
        <span style={{ "--i": 12 }} className=""></span>
        <span style={{ "--i": 24 }} className=""></span>
        <span style={{ "--i": 10 }} className=""></span>
        <span style={{ "--i": 14 }} className=""></span>
        <span style={{ "--i": 23 }} className=""></span>
        <span style={{ "--i": 18 }} className=""></span>
        <span style={{ "--i": 16 }} className=""></span>
        <span style={{ "--i": 19 }} className=""></span>
        <span style={{ "--i": 20 }} className=""></span>
        <span style={{ "--i": 22 }} className=""></span>
        <span style={{ "--i": 25 }} className=""></span>
        <span style={{ "--i": 18 }} className=""></span>
        <span style={{ "--i": 21 }} className=""></span>
        <span style={{ "--i": 15 }} className=""></span>
        <span style={{ "--i": 13 }} className=""></span>
        <span style={{ "--i": 26 }} className=""></span>
        <span style={{ "--i": 17 }} className=""></span>
        <span style={{ "--i": 13 }} className=""></span>
        <span style={{ "--i": 18 }} className=""></span>

        <span style={{ "--i": 11 }} className=""></span>
        <span style={{ "--i": 12 }} className=""></span>
        <span style={{ "--i": 24 }} className=""></span>
        <span style={{ "--i": 10 }} className=""></span>
        <span style={{ "--i": 14 }} className=""></span>
        <span style={{ "--i": 23 }} className=""></span>
        <span style={{ "--i": 18 }} className=""></span>
        <span style={{ "--i": 16 }} className=""></span>
        <span style={{ "--i": 19 }} className=""></span>
        <span style={{ "--i": 20 }} className=""></span>
        <span style={{ "--i": 22 }} className=""></span>
        <span style={{ "--i": 25 }} className=""></span>
        <span style={{ "--i": 18 }} className=""></span>
        <span style={{ "--i": 21 }} className=""></span>
        <span style={{ "--i": 15 }} className=""></span>
        <span style={{ "--i": 13 }} className=""></span>
        <span style={{ "--i": 26 }} className=""></span>
        <span style={{ "--i": 17 }} className=""></span>
        <span style={{ "--i": 13 }} className=""></span>
        <span style={{ "--i": 18 }} className=""></span>

        <span style={{ "--i": 11 }} className=""></span>
        <span style={{ "--i": 12 }} className=""></span>
        <span style={{ "--i": 24 }} className=""></span>
        <span style={{ "--i": 10 }} className=""></span>
        <span style={{ "--i": 14 }} className=""></span>
        <span style={{ "--i": 23 }} className=""></span>
        <span style={{ "--i": 18 }} className=""></span>
        <span style={{ "--i": 16 }} className=""></span>
        <span style={{ "--i": 19 }} className=""></span>
        <span style={{ "--i": 20 }} className=""></span>
        <span style={{ "--i": 22 }} className=""></span>
        <span style={{ "--i": 25 }} className=""></span>
        <span style={{ "--i": 18 }} className=""></span>
        <span style={{ "--i": 21 }} className=""></span>
        <span style={{ "--i": 15 }} className=""></span>
        <span style={{ "--i": 13 }} className=""></span>
        <span style={{ "--i": 26 }} className=""></span>
        <span style={{ "--i": 17 }} className=""></span>
        <span style={{ "--i": 13 }} className=""></span>
        <span style={{ "--i": 18 }} className=""></span>

        <span style={{ "--i": 11 }} className=""></span>
        <span style={{ "--i": 12 }} className=""></span>
        <span style={{ "--i": 24 }} className=""></span>
        <span style={{ "--i": 10 }} className=""></span>
        <span style={{ "--i": 14 }} className=""></span>
        <span style={{ "--i": 23 }} className=""></span>
        <span style={{ "--i": 18 }} className=""></span>
        <span style={{ "--i": 16 }} className=""></span>
        <span style={{ "--i": 19 }} className=""></span>
        <span style={{ "--i": 20 }} className=""></span>
        <span style={{ "--i": 22 }} className=""></span>
        <span style={{ "--i": 25 }} className=""></span>
        <span style={{ "--i": 18 }} className=""></span>
        <span style={{ "--i": 21 }} className=""></span>
        <span style={{ "--i": 15 }} className=""></span>
        <span style={{ "--i": 13 }} className=""></span>
        <span style={{ "--i": 26 }} className=""></span>
        <span style={{ "--i": 17 }} className=""></span>
        <span style={{ "--i": 13 }} className=""></span>
        <span style={{ "--i": 18 }} className=""></span>

        <span style={{ "--i": 11 }} className=""></span>
        <span style={{ "--i": 12 }} className=""></span>
        <span style={{ "--i": 24 }} className=""></span>
        <span style={{ "--i": 10 }} className=""></span>
        <span style={{ "--i": 14 }} className=""></span>
        <span style={{ "--i": 23 }} className=""></span>
        <span style={{ "--i": 18 }} className=""></span>
        <span style={{ "--i": 16 }} className=""></span>
        <span style={{ "--i": 19 }} className=""></span>
        <span style={{ "--i": 20 }} className=""></span>
        <span style={{ "--i": 22 }} className=""></span>
        <span style={{ "--i": 25 }} className=""></span>
        <span style={{ "--i": 18 }} className=""></span>
        <span style={{ "--i": 21 }} className=""></span>
        <span style={{ "--i": 15 }} className=""></span>
        <span style={{ "--i": 13 }} className=""></span>
        <span style={{ "--i": 26 }} className=""></span>
        <span style={{ "--i": 17 }} className=""></span>
        <span style={{ "--i": 13 }} className=""></span>
        <span style={{ "--i": 18 }} className=""></span>

        <span style={{ "--i": 11 }} className=""></span>
        <span style={{ "--i": 12 }} className=""></span>
        <span style={{ "--i": 24 }} className=""></span>
        <span style={{ "--i": 10 }} className=""></span>
        <span style={{ "--i": 14 }} className=""></span>
        <span style={{ "--i": 23 }} className=""></span>
        <span style={{ "--i": 18 }} className=""></span>
        <span style={{ "--i": 16 }} className=""></span>
        <span style={{ "--i": 19 }} className=""></span>
        <span style={{ "--i": 20 }} className=""></span>
        <span style={{ "--i": 22 }} className=""></span>
        <span style={{ "--i": 25 }} className=""></span>
        <span style={{ "--i": 18 }} className=""></span>
        <span style={{ "--i": 21 }} className=""></span>
        <span style={{ "--i": 15 }} className=""></span>
        <span style={{ "--i": 13 }} className=""></span>
        <span style={{ "--i": 26 }} className=""></span>
        <span style={{ "--i": 17 }} className=""></span>
        <span style={{ "--i": 13 }} className=""></span>
        <span style={{ "--i": 18 }} className=""></span>
      </div>
      <h1 className="text-4xl text-center h-full  flex z-10 justify-center items-center  ">
        {quote.text}
      </h1>
    </div>
  );
}
