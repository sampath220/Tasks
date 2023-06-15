import React from 'react'
import { Pie } from "react-chartjs-2";

export default function Piechart({ chartData }: any) {
    return (
        <div className="chart-container">
            <h2 className="text-lg text-center font-bold mb-2">International Runs</h2>
            <Pie
                data={chartData}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: "Virat Kohli International runs in various formats"
                        }
                    },
                }}
            />
        </div>
    );
}
