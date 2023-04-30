import React, { useRef, useEffect, useState } from 'react';
import Chart from 'chart.js/auto';

const RadarChart = (props) => {
  const chartRef = useRef(null);
  const [data, setData] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/ability')
      .then(response => response.json())
      .then(data => {
        const { humanities, Communication, global, creative, specialty } = data;
        setData({ humanities, Communication, global, creative, specialty });
      }, [])
      .catch(error => {
        console.log(error)
      });
  }, []);

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
            data: [data.humanities, data.Communication, data.global, data.creative, data.specialty],  // 이 부분 DB에서 가져와야 됨 
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
  }, [data.humanities, data.Communication, data.global, data.creative, data.specialty]);

  return <canvas ref={chartRef} />;
};

export default RadarChart;
