import styled from "styled-components";

export const Container = styled.div `
background-color: white;
border-radius: 10px;
padding: 20px;
margin-top: -40px;
box-shadow: 0px 0px 5px #CCC;
display: flex;
align-items:center;

`
export const MonthArea = styled.div `
flex: 1;
display: flex;
align-items:center;
text-align: center;
`;

export const Monthtitle = styled.div `
flex: 1;
text-align: center;
font-weight: bold;
color: darkblue;

`;

export const MonthArrow = styled.div `
width: 40px;
font-weight: bold;
background-color: darkblue;
color: white;
font-size: 25px;
cursor: pointer;
border-radius: 20px;
border: solid 1px white

`;

export const ResumeArea = styled.div `
flex: 2;
display:flex;
padding-left: 20px;

`;