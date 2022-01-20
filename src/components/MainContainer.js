import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [sortBy, setSortBy] = useState("");

  const [filterBy, setFilterBy] = useState("Tech");
  
  const [allStocks, setAllStocks] = useState([]);
  const [stocksLoaded, setStocksLoaded] = useState(false);

  const [ownedStocks, setOwnedStocks] = useState([]);

  useEffect(()=> {
    fetch("http://localhost:3001/stocks")
      .then((r)=>r.json())
      .then((stocks) => setAllStocks(stocks))
      .then(()=>setStocksLoaded(true))   
      }, [])

  function onChangeSortBy(value) {
    setSortBy(value);
  }

  function changeFilterBy(value) {
    setFilterBy(value);
  }

  function buyStock(stock) {
    const stockAlreadyOwned = ownedStocks.find(o => o.id === stock.id);
    if(!stockAlreadyOwned) {
      const newOwnedStockList = [...ownedStocks, stock];
      setOwnedStocks(newOwnedStockList);
    }
  }

  function sellStock(stock) {
    const newOwnedStocks = ownedStocks.filter((ownedStock) => ownedStock.id !== stock.id);
    setOwnedStocks(newOwnedStocks);
  }

  const filteredStocks = allStocks.filter((stock)=>stock.type == filterBy);
  
  if(sortBy === "Alphabetically") {
    filteredStocks.sort((a, b)=> {
      if(a.ticker < b.ticker){
        return -1;
        }
      else {
        return 1;
      }
    }
    )}
  else if(sortBy === "Price") {
    filteredStocks.sort((a, b)=> {
      if(a.price < b.price){
        return -1;
        }
      else {
        return 1;
      }
    }
  )}

  return (
    <div>
      <SearchBar sortBy = {sortBy} changeSortBy = {onChangeSortBy} filterBy = {filterBy} changeFilterBy = {changeFilterBy}/>
      <div className="row">
        <div className="col-8">
          <StockContainer allStocks = {filteredStocks} stocksLoaded = {stocksLoaded} buyStock = {buyStock} />
        </div>
        <div className="col-4">
          <PortfolioContainer ownedStocks = {ownedStocks} sellStock = {sellStock} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
