import styled from "styled-components"
import { fonts } from "../../../styles/fonts"

export const Container = styled.div`
    display: flex;
    gap: 4px;
    
    background-color: ${props => props.theme["base-button"]};
    padding: 8px;
    border-radius: 6px;

    button {
        background-color: transparent;
        display: flex;
        align-items: center;
    }

    button svg {
        color: ${props => props.theme['purple']};

        transition: all 0.2s;

        &:hover {
            color: ${props => props.theme['purple-dark']};
        }
    }

    span {
        padding-top: 2px;
        
        ${fonts.textM}
        color: ${props => props.theme['base-title']};
    }
` 