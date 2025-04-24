import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import PieChart from "./charts/PieChart";
import { useData } from "../utils/Data";


Chart.register(CategoryScale);

export function SpentMoney() {

    const { getDataCache } = useData();
    const Data = getDataCache();
    const [chartData] = useState({
        labels: Data.spentMoneyByCategoriesList.map((data) => data.categories),
        datasets: [
            {
                label: "Categories",
                data: Data.spentMoneyByCategoriesList.map((data) => data.spentMoney),
                borderWidth: 0
            }
        ]
    });

    return (
        <div>
            <PieChart chartData={chartData} />
        </div>
    );
}

export default SpentMoney;