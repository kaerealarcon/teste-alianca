import styled, { css } from "styled-components";

export const BoxItem = styled.div<{$border?: string;}>`
    background-color: #fff;
    width: 100%;
    color: #272727;
    padding: 1rem;
    border-radius: 0.5rem;

    ${(props) => {
        switch (props.$border) {
        case "CLOSED":
            return css`
                border-left: .5rem solid #00ffaa;
            `;
            default:
                return css`
                border-left: .5rem solid #b7b7b7;
            `;
        }
    }}
`;

export const StatusTitle = styled.h4<{$color?: string;}>`

    margin-bottom: .5rem;

    ${(props) => {
        switch (props.$color) {
            case "CLOSED":
                return css`
                color:#00ffaa;
            `;
            default:
                return css`
                color:#b7b7b7;
            `;
        }
    }}
`;

export const PriorityText = styled.span<{$color?: string;}>`

    font-size: .6rem;
    font-weight: bold;

    ${(props) => {
        switch (props.$color) {
            case "HIGH":
                return css`
                color:#FF006B;
            `;
            case "MEDIUM":
                return css`
                color:#FFAE1D;
            `;
            default:
                return css`
                color:#B073FF;
            `;
        }
    }}
`;

export const InfoText = styled.span<{$bold?: boolean}>`
    font-size: .6rem;
    font-weight: ${({ $bold }) => $bold ? "bold" : "initial"};
`;

export const DescriptionTitle = styled.h4`
    font-weight:bold;
`;

export const ButtonItem = styled.button<{$confirm?: boolean}>`
    background-color:transparent;
    border:none;
    cursor: pointer;

    color: ${({ $confirm }) => $confirm ? "#4BD3B3" : "#FF006B"};

    display:flex;
    gap: .5rem;
    align-items:center;
    font-weight: bold;

`;