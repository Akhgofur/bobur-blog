import styled from "styled-components";

export const MainHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    @media (max-width:600px) {
        flex-direction: column;
        align-items: flex-start;
    }
`