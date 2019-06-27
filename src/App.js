import React, { Component } from "react";
import styled from "styled-components";
import dogImg from "./images/dog.jpeg";
import wolfImg from "./images/wo.jpg";
import wallbg from "./images/1.jpg";

const Wrapper = styled.div`
height:100vh;
background : #333
padding: 200px;
`;

const Icon = styled.svg`
  width: 18px;
  height: 20px;
  margin-left: 10px;
  cursor: pointer;
`;

const Cardwrapper = styled.div`
  display: flex;
  width: 800px;
  padding: 100px;
  margin: 0 auto;
  height: 700px;
  background-image: url(${wallbg});
`;
const Card = styled.section`
  width: 350px;
  height: 600px;
  display: flex;
  flex-direction: column;
  margin-right: 100px;
  box-shadow: 5px 10px 20px 5px #4545;
  background: white;
`;

const Img = styled.div`
  background-image: url(${wolfImg});
  background-size: cover;
  background-position: center;
  width: 350px;
  height: 300px;
`;
const Img1 = styled.div`
  background-image: url(${dogImg});
  background-size: cover;
  background-position: center;
  width: 350px;
  height: 300px;
`;

const Title = styled.div`
  font-size: 20px;
  letter-spacing: 2px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  padding: 20px;

  &::after {
    content: "";
    display: both;
    width: 17%;
    padding-top: 50px;
    border-bottom: ${props =>
      props.primary ? "5px solid lightblue" : "5px solid red"};
    position: relative;
    right: 80px;
  }
`;

const Description = styled.table`
  width: 80%;
  margin: 0 auto;
  letter-spacing: 2px;
  line-height: 1.5;

  & th {
    height: 5px;
    text-align: left;
    color: gray;
    opacity: 0.6;
  },
  & tr {
    color: black;
    font-weight: 600;
  }
`;

const Button = styled.button`
  width: 100%;
  background: white;
  height: 100px;
  border: none;
  border-top: 1px solid lightgrey;
  font-size: 18px;
  font-weight: 900;
  cursor: pointer;
  margin-top: 50px;
  margin-bottom: 0;

  &: hover {
    color: ${props => (props.primary ? "black" : "white")};
    background: ${props => (props.primary ? "lightblue" : "deeppink")};
    opacity: 0.4;
    z-index: 2;
  }
`;

class App extends Component {
  render() {
    return (
      <Wrapper className="App">
        <Cardwrapper>
          <Card>
            <Img />
            <Title>
              Jagoo
              <Icon viewBox="0 0 1152 1792">
                <path
                  d="M1152 576q0 221-147.5 384.5T640 1148v260h224q14 0 23 9t9
                  23v64q0 14-9 23t-23 9H640v224q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-224H288q-14 
                  0-23-9t-9-23v-64q0-14 9-23t23-9h224v-260q-150-16-271.5-103t-186-224T2 529q11-134 80.5-249t182-188T510
                   4q170-19 319 54t236 212 87 306zm-1024 0q0 185 131.5 316.5T576 1024t316.5-131.5T1024 576 892.5 259.5 576 128 259.5 259.5 128 576z"
                  fill="red"
                />
              </Icon>
            </Title>
            <Description>
              <tr>
                <th>ID</th>
                <th>Age</th>
                <th>Registry</th>{" "}
              </tr>
              <tr>
                <td>21024</td>
                <td>3 years</td>
                <td>AKC</td>
              </tr>
            </Description>
            <Button>View more </Button>
          </Card>
          <Card>
            <Img1 />
            <Title primary>
              Nitty
              <Icon viewBox="0 0 1536 1536">
                {" "}
                <path
                  d="M1472 0q26 0 45 19t19 45v416q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23V218l-382 383q126 
                  156 126 359 0 117-45.5 223.5t-123 184-184 123T576 1536t-223.5-45.5-184-123-123-184T0 960t45.
                  5-223.5 123-184 184-123T576 384q203 0 359 126l382-382h-261q-14 0-23-9t-9-23V32q0-14 9-23t23-9h416zM576 
                  1408q185 0 316.5-131.5T1024 960 892.5 643.5 576 512 259.5 643.5 128 960t131.5 316.5T576 1408z"
                  fill="skyblue"
                />
              </Icon>
            </Title>
            <Description>
              <tr>
                <th>ID</th>
                <th>Age</th>
                <th>Registry</th>{" "}
              </tr>
              <tr>
                <td>30244</td>
                <td>3 years</td>
                <td>AKC</td>
              </tr>
            </Description>
            <Button primary>View more </Button>
          </Card>
        </Cardwrapper>
      </Wrapper>
    );
  }
}

export default App;
