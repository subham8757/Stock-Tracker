import style from "./Home.module.css";
import { useState } from "react";

function Home() {
  const init = {
    title: "",
    buy: 0,
    sell: 0,
    quantity: 0,
    date: new Date().toLocaleDateString(),
  };

  const [stock, setStock] = useState(init);
  const [buyStockData, setBuyStockData] = useState(
    JSON.parse(localStorage.getItem("buy")) === null
      ? []
      : JSON.parse(localStorage.getItem("buy"))
  );
  const [sellStockData, setSellStockData] = useState(
    JSON.parse(localStorage.getItem("sell")) === null
      ? []
      : JSON.parse(localStorage.getItem("sell"))
  );

  const [add, setAdd] = useState(false);

  const handleChange = (e) => {
    setStock({ ...stock, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (stock.sell === 0) {
      let x = [...buyStockData, stock];

      let data = JSON.parse(localStorage.getItem("buy"));
      if (data === null) {
        data = [];
      }

      for (let i = 0; i < data.length; i++) {
        if (data[i].title === stock.title) {
          let existingData = data[i];

          let sum = 0;
          sum = Number(existingData.buy) * Number(existingData.quantity);

          let sum2 = 0;
          sum2 = Number(stock.buy) * Number(stock.quantity);

          let allquantity =
            Number(existingData.quantity) + Number(stock.quantity);
          existingData.quantity = allquantity;

          let avg = (sum + sum2) / allquantity;
          existingData.buy = Math.floor(avg);

          x = data;
        }
      }

      localStorage.setItem("buy", JSON.stringify(x));
      setBuyStockData(x);
      setStock(init);
      setAdd(true);
      setTimeout(() => {
        setAdd(false);
      }, 2000);
    } else if (stock.buy === 0) {

      let presentData=JSON.parse(localStorage.getItem("buy"))
      if(presentData===null){
        presentData=[]
      }

      for(let i=0; i<presentData.length; i++){
         if(presentData[i].title===stock.title && Number(presentData[i].quantity) >= Number(stock.quantity)){
            
                  /*******/
                    
                  let x = [...sellStockData, stock];

                  let data2 = JSON.parse(localStorage.getItem("buy"));
                  if (data2 === null) {
                    data2 = [];
                  }
            
                  for (let i = 0; i < data2.length; i++) {
                    if (data2[i].title === stock.title) {
                     let existingData = data2[i];
                      if(Number(existingData.quantity)>0 && Number(stock.quantity) <= Number(existingData.quantity)){ 
                        existingData.quantity= Number(existingData.quantity)- Number(stock.quantity)
                        stock.buy = existingData.buy;

                        if (existingData.quantity === 0) {
                          data2.splice(i, 1);
                        }
                      }
                      
                    }
                  }



                  localStorage.setItem("sell", JSON.stringify(x));
                  localStorage.setItem("buy", JSON.stringify(data2));
                  setSellStockData(x);
                  setStock(init);
                  setAdd(true);
                  setTimeout(() => {
                    setAdd(false);
                  }, 2000);
                }





                  /*******/

         }
      }

     
     
  };

  return (
    <div className={style.main}>
      <form className={style.myform} onSubmit={handleSubmit}>
        <div>
          <label>Stock Name </label>
          <input
            type="text"
            placeholder="Enter stock name"
            className={style.title}
            value={stock.title}
            onChange={handleChange}
            name="title"
          />
        </div>

        <div className={style.secpart}>
          <div>
            <label>Quantity </label>
            <input
              type="number"
              placeholder="Enter Quantity"
              className={style.allinput}
              value={stock.quantity}
              onChange={handleChange}
              name="quantity"
            />
          </div>
          <div>
            <label>Buy Price </label>
            <input
              type="number"
              placeholder="Buy price"
              className={style.allinput}
              value={stock.buy}
              onChange={handleChange}
              name="buy"
            />
          </div>
          <div>
            <label>Sell Price </label>
            <input
              type="number"
              placeholder="Sell price"
              className={style.allinput}
              value={stock.sell}
              onChange={handleChange}
              name="sell"
            />
          </div>
        </div>

        <div>
          <input type="submit" value="Add Records" className={style.record} />
        </div>

        <div>{add ? "Stock has been added" : ""}</div>
      </form>
    </div>
  );
}
export default Home;
