import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const DonutChart = (props) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const myChartRef = chartRef.current.getContext("2d");
    console.log(myChartRef)

    const myChart = new Chart(myChartRef, {
      type: "doughnut",
      data: {
        // 차트 데이터 설정
        labels: ["Red", "Blue", "Yellow"],
        datasets: [
          {
            label: "My First Dataset",
            data: [300, 50, 100],
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            hoverOffset: 4,
          },
        ],
      },
    });
    return () => {
      myChart.destroy(); // 이전 차트 파괴
    };
  }, []);

  return <canvas ref={chartRef} />;
};

export default DonutChart;
