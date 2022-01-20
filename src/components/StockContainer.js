import React from "react";
import Stock from "./Stock";

function StockContainer( {allStocks, stocksLoaded, buyStock} ) {
  return (
    <div>
      <h2>Stocks</h2>
      {stocksLoaded ? allStocks.map((stock) => <Stock key = {stock.id} stock = {stock} processStock = {buyStock} />) : <p>Loading...</p>}
    </div>
  );
}

export default StockContainer;
