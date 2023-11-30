import styled from "styled-components";

export const ButtonTab = styled.div<{$actived:boolean}>`
    background: rgb(255,36,199);
    background: ${props => props.$actived ? "linear-gradient(90deg, rgba(255,36,199,1) 0%, rgba(255,174,29,1) 100%)" : "#3E3E3E"};
    
    color:  ${props => props.$actived ? "white" : "#959595"};
    font-weight: bold;

    cursor: pointer;

    padding: .5rem 3rem;
    border-radius: 2rem;

    &:hover:not(:active){
        background: rgb(255,36,199);
        background: linear-gradient(90deg, rgba(255,36,199,1) 0%, rgba(255,174,29,1) 100%);

        color: white;

        transition: .2s ease;
    }
`
