import React from "react";
import DonutChart from "./components/DonutChart";
import BarChart from "./components/BarChart";
import styled from "styled-components";

const ChartWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ChartContainer = styled.div`
  flex: 1;
  width: 50%;
  height: 100%;
  padding: 20px;
`;

const Title = styled.h1`
  color: black;
  font-weight: bold;
  font-size: 3rem;
  text-align: center;
`;

const App = () => {
  return (
    <div>
      <Title>포트폴리오</Title>
      <ChartWrapper>
        <ChartContainer>
          <DonutChart />
        </ChartContainer>
        <ChartContainer>
          <BarChart />
        </ChartContainer>
      </ChartWrapper>
    </div>
  );
};

export default App;
