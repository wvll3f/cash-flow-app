import styled from "styled-components";

export const Container = styled.div`
display:flex;
    align-items:center;
    justify-content:center;
    width: 100%;
    background-color: #FFF;
    padding: 20px 8px;
    box-shadow: 0px 0px 8px #ccc;
    border-radius: 10px;
    margin-top: 20px;

`;

export const LabelElement = styled.label`

    display:inline-block;
    margin: 0 5px;
    font-weight: bold;
    color: darkblue;
`;

export const InputElement = styled.input`
    
    margin: 0 5px;
    display:inline-block;
    padding: 3px;
    color: darkblue;
    width: 100px;
    height: 35px;
    border: 1px solid lightblue;
    border-radius: 5px;
    outline:0;
`;

export const InputDate = styled.input`
    
    margin: 0 5px;
    display:inline-block;
    padding: 3px 6px;
    color: darkblue;
    width: 140px;
    height: 35px;
    border: 1px solid lightblue;
    border-radius: 5px;
    outline:0;
`;

export const SelectElement = styled.select`

    margin: 0 5px;
    display:inline-block;
    color: darkblue;
    width: 140px;
    height: 35px;
    border: 1px solid lightblue;
    border-radius: 5px;
    
    option {
        color: darkblue;
        background: white;
        display: flex;
        white-space: pre;
        padding: 0px 2px 1px;
      }
`;

export const ButtonAdd = styled.button`

width: 120px;
color: white;
background-color: darkblue;
display: flex;
align-items: center;
justify-content:center;
border-radius: 7px;
height: 35px;
margin: 0 5px;
font-weight: bold;
cursor: pointer;
`;