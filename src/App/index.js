import React from "react";
import { Link } from "react-router-dom";

export default () => {
  const fetchMyData = async () => {
    const data = await fetch("/bonk", { method: "POST" });
    console.log(data);
  };
  return (
    <>
      <div>Hi</div>
      <Link to="/about">Go to About</Link>
      <button onClick={fetchMyData}>fetch my data</button>
    </>
  );
};
