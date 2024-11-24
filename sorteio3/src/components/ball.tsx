import styled from "styled-components";

export const Sld = styled.div`
    font-size: 18px;
    font-weight: bold;
    padding: 10px;
    border-radius: 25px;
    color:${(props)=>props.theme.color};
    background-color: ${(props)=>props.theme.background};
`