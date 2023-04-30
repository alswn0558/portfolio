import React, { useRef, useEffect, useState } from 'react';
import Chart from 'chart.js/auto';

const BarChart = (props) => {
  const chartRef = useRef(null);
  const [data, setData] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/mbti')
      .then(response => response.json())
      .then(data => {
        const { m, b, t, i } = data;
        setData({ m, b, t, i });
      }, [])
      .catch(error => {
        console.log(error)
      });
  }, []);

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
            data: [data.m, data.b, data.t, data.i],  // 여기 DB에서 가져와야 됨
            backgroundColor: "#FFC0CB",
          },
          {
            label: "Other MBTI",
            data: [100-data.m, 100-data.b, 100-data.t, 100-data.i],
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
  }, [data.m, data.b, data.t, data.i]);

  return <canvas ref={chartRef} />;
};

export default BarChart;
