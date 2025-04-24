import React from "react";
import { Pie } from "react-chartjs-2";

function PieChart({ chartData }) {
    return (
        <div className="justify-content-center">
            <div className="card">
                <div className="text-center card-body">
                    <div className="chart-container w-75  h-75 d-inline-block">
                        <Pie
                            data={chartData}
                            options={{
                                plugins: {
                                    title: {
                                        display: true,
                                        text: "Spent money by categories"
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
export default PieChart;