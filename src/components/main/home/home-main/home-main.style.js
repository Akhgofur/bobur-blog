import styled from "styled-components";

export const MainWrapper = styled.main` 
    display: flex;
    align-items: flex-start;
    justify-content: start;
    padding-top: 80px;
    @media (max-width: 900px) {
        flex-direction: column-reverse;
    }
`