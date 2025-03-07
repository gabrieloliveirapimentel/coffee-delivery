import styled from "styled-components"
import { fonts } from "../../../styles/fonts"

export const Box = styled.div`
    display: flex;
    flex-direction: column;

    gap: 8px;
`

export const LabelContainer = styled.label`
    display: flex;
    align-items: center;
    justify-content: space-between;

    border-radius: 6px;
    border: 1px solid ${props => props.theme["base-button"]};

    background-color: ${props => props.theme["base-input"]};
    transition: all 0.2s;

    &[data-state="focused"] {
        border-color: ${props => props.theme["yellow-dark"]};
    }

    &[data-state="blurred"] {
        border-color: ${props => props.theme["base-button"]};
    }

    span {
        ${fonts.textS};
        font-style: italic;

        color: ${props => props.theme["base-label"]};
        padding-right: 12px;
    }
`

export const Input = styled.input`
    width: 100%;
    background-color: transparent;
    
    color: ${props => props.theme["base-text"]};
    border: none;
    outline: none;

    padding: 12px;

    &::placeholder {
        color: ${props => props.theme["base-label"]};
    }
`

export const ErrorMessage = styled.p`
    ${fonts.textXS};
    color: red;
    font-weight: 400;
`