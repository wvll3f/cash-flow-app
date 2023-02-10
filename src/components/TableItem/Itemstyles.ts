import styled from "styled-components";

export const TableLine = styled.tr`

`;

export const TableColumn = styled.td`
font-size: 18px;
padding: 10px 8px;

`;

export const TableColor = styled.div`
display:flex;
margin: 5px 0;
font-weight: bold;
padding: 5px 15px;
color: white;
border-radius: 30px;
margin-right: 15px;

background-color: ${props => props.color};

`;

export const ValueColor = styled.div<{ color: string }>`
color: ${props => props.color};

`;