import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const RadarChart = (props) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const myChartRef = chartRef.current.getContext("2d");
    console.log(myChartRef)

    const myChart = new Chart(myChartRef, {
      type: "radar",
      data: {
        labels: ["인문 역량", "소통 역량", "글로벌 역량", "창의 역량", "전문 역량"],
        datasets: [
          {
            label: "나의 역량",
            data: [70.56, 63.92, 61.31, 55.03, 62.98],  // 이 부분 DB에서 가져와야 됨 
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
          {
            label: "T점수 평균",
            data: [50, 50, 50, 50, 50],
            backgroundColor: "rgba(75, 137, 220, 0.2)",
            borderColor: "rgba(75, 137, 220, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          r: {
            angleLines: {
                display: false
            },
            suggestedMin: 0,
            suggestedMax: 80
        }
        },
      },
    });
    return () => {
      myChart.destroy(); // 이전 차트 파괴
    };
  }, []);

  return <canvas ref={chartRef} />;
};

export default RadarChart;
