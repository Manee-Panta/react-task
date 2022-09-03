import React from "react";
import Task4 from "../task4";
import '../../style/task4.css'
import { Bubble, Line, Radar, PolarArea, Pie, Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const Skill = () => {
  const state = {
    labels: ["HTML", "CSS", "React", "PHP", "Bootstrap", "WordPress"],
    datasets: [
      {
        label: "Skills",
        backgroundColor: ["blue", "green", "grey", "pink", "purple", "red"],
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [80, 50, 70, 60, 55, 40],
      },
    ],
  };
  return (
    <div className="skill-main">
      <Task4 />
      <div className="portfolio-body-skill" style={{
        height:'20rem', width:'60rem', marginLeft:'50rem'
      }}>
        <Doughnut className="dot"
          data={state}
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: "top",
              },
              title: {
                display: true,
              },
            },
          }}
        />
      </div>
    </div>
  );
};
export default Skill;
