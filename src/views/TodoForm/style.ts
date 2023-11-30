import styled from "styled-components";

export const Label = styled.label`
    display:flex;
    flex-direction:column;

    color: white;
    font-weight: bold;
    font-size: .8rem;
`

export const Input = styled.input`
    padding: .5rem;
    border: .125rem solid #838383;
    border-radius: .5rem;
`

export const Select = styled.select`
    padding: .5rem;
    border: .125rem solid #838383;
    border-radius: .5rem;
`

export const DisplayForForm = styled.form`
    display: grid;
    grid-template-columns: 3fr .5fr .5fr;
    gap: 2rem;
`