import styled from "styled-components";

export const Table = styled.table`

width: 100%;
background-color: #FFF;
padding: 20px 0;
padding-left: 10px;
box-shadow: 0px 0px 8px #ccc;
border-radius: 10px;
margin-top: 20px;


`;

export const TableHeadColumn = styled.th<{width?: number}>`

width: ${props => props.width ? `${props.width}px` : 'auto'};
padding: 10px 10px;
text-align: left;


`;