import React from "react";
import { Bar } from "react-chartjs-2";

function BarChart({ chartData }) {
    return (
        <div className="justify-content-center">
            <div className="card">
                <div className="text-center card-body">
                    <div className="chart-container w-100  h-50 d-inline-block">
                        <Bar
                            data={chartData}
                            options={{
                                plugins: {
                                    title: {
                                        display: true,
                                        text: "Last 1 YearEarning & ExpensesUsers"
                                    },
                                    legend: {
                                        display: false
                                    }
                                }
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default BarChart;