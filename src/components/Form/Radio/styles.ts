import styled from 'styled-components'
import { fonts } from '../../../styles/fonts';

export const Container = styled.label`
    padding: 16px;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 12px;
    border-radius: 6px;
    border: 1px solid transparent;
    background-color: ${({ theme }) => theme['base-button']};
    color: ${({ theme }) => theme['base-text']};
    text-transform: uppercase;
    ${fonts.buttonM}
    transition: all 0.2s;

    &:hover {
        background-color: ${({ theme }) => theme['base-hover']};
    }

    &[data-state='true'] {
        background-color: ${({ theme }) => theme['purple-light']};
        border-color: ${({ theme }) => theme.purple};
    }

    input {
        display: none;
    }

    svg {
        color: ${({ theme }) => theme.purple};
    }
`