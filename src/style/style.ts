import styled from "styled-components";


//Text Styles ==================

export const Title = styled.h1`
    font-size: 1.5rem;
    color: #FFF;
`;

export const SubTitle = styled.p`
    color: #7847ef;
`;

export const DateTitle = styled.h2`
    border-bottom: .2rem solid #fff;
    padding-bottom: 1rem;
    margin-bottom: 2rem;
`

//Display Styles ================

export const Display = styled.div<{ $content?: string; $gap?: string; $align?: string; $direction?: string }>`
    display: flex;
    justify-content: ${props => props.$content || "initial"};
    align-items: ${props => props.$align || "start"};

    flex-direction: ${props => props.$direction || "row"};

    gap: ${props => props.$gap || "1rem"};

    flex-wrap: wrap;
`;

export const Box = styled.div`
    background-color: #303030;
    width: 100%;
    padding: 2rem;

    color: #fff;
    border-radius: 1rem;

    min-height: 50vh;
`;

export const DisplayForTabs = styled.div`
    display:grid;
    gap: 3rem;
`

//Button styles

export const ButtonForm = styled.button`
    background: rgb(83,183,242);
    background: linear-gradient(90deg, rgba(83,183,242,1) 0%, rgba(121,66,239,1) 100%);

    border:none;
    border-radius: .5rem;

    padding: .5rem 2rem;

    font-weight: bold;
    color: white;

    display:flex;
    align-items:center;
    gap: .5rem;

    min-height: 2.6rem;   

    cursor:pointer;

    &:hover{
        background: linear-gradient(90deg, rgba(121,66,239,1) 0%, rgba(83,183,242,1) 100%);
    }
`

