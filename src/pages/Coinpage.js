import React from "react";
import { useParams } from "react-router-dom";

const Coinpage = () => {
  const { id } = useParams();
  return <div>Coin pages {id}</div>;
};

export default Coinpage;
