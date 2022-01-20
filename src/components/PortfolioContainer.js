import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ ownedStocks, sellStock} ) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {ownedStocks.length > 0 ? ownedStocks.map((stock) => <Stock key = {stock.id} stock = {stock} processStock = {sellStock} />) : <p>No stocks owned</p>}
    </div>
  );
}

export default PortfolioContainer;
