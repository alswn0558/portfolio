/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import RadarChart from "./components/RadarChart";
import BarChart from "./components/BarChart";
import styled from "styled-components";

const ChartWrapper = styled.div`
  display: flex;
  flex-direction: center;
  justify-content: center;
  align-items: flex-start;
  height: 40vh;
`;

const ChartContainer = styled.div`
  display: flex;  
  flex: 1;
  width: 65%;
  height: 95%;
  padding: 1px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  color: black;
  font-weight: bold;
  font-size: 3rem;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px;
`;

const Name = styled.h2`
font-size: 2rem;
margin-bottom: 10px;
`;

const School = styled.p`
font-size: 1.2rem;
margin-bottom: 10px;
`;

const Link = styled.a`
font-size: 1.2rem;
`;

const App = () => {
  return (
    <div>
      <Title>Portfolio</Title>
      <ChartWrapper>
        <ChartContainer>
          <Information>
            <Name>Minju Yang</Name>
            <School>Kookmin University</School>
            <Link href="https://github.com/alswn0558">GitHub</Link>
            <Link href="https://www.linkedin.com/in/minju-yang-362614225/">LinkedIn</Link>
          </Information>
        </ChartContainer>
        <ChartContainer>
         <Image src="../mj.jpg" alt="Minju" />
        </ChartContainer>
      </ChartWrapper>
      <ChartWrapper>
        <ChartContainer>
        <RadarChart />
        </ChartContainer>
        <ChartContainer>
          <BarChart />
        </ChartContainer>
      </ChartWrapper>
    </div>
  );
};

export default App;
