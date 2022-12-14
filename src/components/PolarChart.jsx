import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";

export function PolarChart({ value }) {
  ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

  const data = {
    labels: [
      "Red",
      "Blue",
      "Yellow",
      "Green",
      "Purple",
      "Orange",
      "Black",
      "Cyan",
    ],
    datasets: [
      {
        label: "# of Votes",
        data: value,
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
          "rgba(0, 0, 0, 0.5)",
          "rgba(0, 255, 255, .5)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
      <div className="chart-container">
        <PolarArea
          data={data}
          options={{
            scale: {
              ticks: {
                stepSize: 0.5, // the number of step
              }
            },
          }}
        />
        <button>Back</button>
      </div>
  );
}
