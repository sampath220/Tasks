import React from 'react'
import { Line } from "react-chartjs-2";

export default function Graph({ chartData }: any) {
    return (
        <div className="chart-container">
            <h2 className="text-lg text-center font-bold mb-2">Year Wise International Runs</h2>
            <Line
                data={chartData}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: "Virat Kohli year wise runs between 2008-2023"
                        },
                        legend: {
                            display: false
                        }
                    }
                }}
            />
        </div>
    )
}
