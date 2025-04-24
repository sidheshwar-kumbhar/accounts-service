import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { useData } from "../utils/Data";
import BarChart from "./charts/BarChart";


Chart.register(CategoryScale);

const options = {
    scales: {
        x: {
            stacked: true,
        },
        y: {
            stacked: true,
        },
    },
};

export function EarningExpenses() {

    const { getDataCache } = useData();
    const Data = getDataCache();
    const [chartData] = useState({
        labels: Data.spentMoneyInYearDataList.map((data) => data.month),
        datasets: [
            {
                label: "Expenses",
                data: Data.spentMoneyInYearDataList.map((data) => data.expensesMoney),
                backgroundColor: [
                    "rgba(222, 52, 88, 0.47)"
                ],
                borderWidth: 1
            },
            {
                label: "Erning",
                data: Data.spentMoneyInYearDataList.map((data) => data.erningMoney),
                backgroundColor: [
                    "rgba(36, 93, 226, 0.61)"
                ],
                borderWidth: 1
            }
        ]
    });

    return (
        <div>
            <BarChart chartData={chartData} options={options} />
        </div>
    );
}

export default EarningExpenses;