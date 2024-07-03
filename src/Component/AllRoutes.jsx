import { Route,Routes } from "react-router-dom"
import BoughtStocks from "../Pages/BoughtStocks"
import Holdings from "../Pages/Holdings"
import ProfitAndLoss from "../Pages/ProfitAndLoss"
import SoldStocks from "../Pages/SoldStocks"
import Home from "../Pages/Home"



function AllRoutes(){

    return (
        <div>
                <Routes>
                <Route path="/" element={<Home />}></Route>
                    <Route path="/boughtstocks" element={<BoughtStocks />}></Route>
                    <Route path="/soldstocks" element={<SoldStocks />}></Route>
                    <Route path="/profitandloss" element={<ProfitAndLoss />}></Route>
                    <Route path="/holdings" element={<Holdings />}></Route>

                </Routes>
        </div>
    )
}

export default AllRoutes