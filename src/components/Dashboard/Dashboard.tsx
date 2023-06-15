import React from 'react'
import { Data as pieChartData } from '../../utils/Piechart'
import { Data as graphChartData } from '../../utils/Graph'
import Piechart from './Piechart'
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import Graph from './Graph';

Chart.register(CategoryScale);

export default function Dashboard() {
    const chartData = {
        labels: pieChartData.map((data) => data.format),
        datasets: [
            {
                label: "Virat Kohli ",
                data: pieChartData.map((data) => data.runs),
                backgroundColor: [
                    'rgba(255, 0, 0, 0.6)',
                    'rgba(0, 255, 0, 0.6)',
                    'rgba(0, 0, 255, 0.6)'
                ],
                borderColor: "black",
                borderWidth: 2
            }
        ]
    }

    const graphData = {
        labels: graphChartData.map((data) => data.year),
        datasets: [
            {
                label: "Virat Kohli ",
                data: graphChartData.map((data) => data.runs),
                backgroundColor: [
                    'rgba(255, 0, 0, 0,0.8)'
                ],
                borderColor: "orange",
                borderWidth: 2
            }
        ]
    }

    return (
        <div className="container mx-auto">
            <h1 className="text-4xl font-bold mb-4 text-center">Virat Kohli Career </h1>
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 shadow-md">
                    <Piechart chartData={chartData} />
                </div>
                <div className="bg-white p-4 shadow-md">
                    <Graph chartData={graphData} />
                </div>
            </div>
        </div>
    )
}
