import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const BarChart = (props) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const myChartRef = chartRef.current.getContext("2d");

    const myChart = new Chart(myChartRef, {
      type: "bar",
      data: {
        // 차트 데이터 설정
        // 차트 데이터 설정
        labels: ["외향/내향", "직관/현실", "사고/감정", "계획/탐색"],
        datasets: [
          {
            label: "My MBTI",
            data: [48, 73, 82, 55],  // 여기 DB에서 가져와야 됨
            backgroundColor: "#FFC0CB",
          },
          {
            label: "Other MBTI",
            data: [100-48, 100-73, 100-82, 100-55],
            backgroundColor: "#87CEFA",
          },
        ],
      },
      options: {
        scales: {
          x: {
            stacked: true,
            max: 100,
          },
          y: {
            stacked: true,
          },
        },
        indexAxis: 'y',
      },
    });
    return () => {
      myChart.destroy(); // 이전 차트 파괴
    };
  }, []);

  return <canvas ref={chartRef} />;
};

export default BarChart;
