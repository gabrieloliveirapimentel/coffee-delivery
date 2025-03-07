import style from "styled-components"
import { fonts } from "../../styles/fonts"

export const Container = style.div`
    max-width: 1160px;
    padding: 32px 20px;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Box = style.div`
    display: flex;
    gap: 12px;

    div {
        display: flex;
        align-items: center;
        gap: 4px;

        border-radius: 8px;
        padding: 10px 8px;

        background-color: ${props => props.theme['purple-light']};

        svg {
            color: ${props => props.theme['purple']};
        }

        span {
            color: ${props => props.theme['base-text']};
        }
    }

    a {
        display: flex;
        align-items: center;

        padding: 8px;
        border-radius: 8px;

        background-color: ${props => props.theme['yellow-light']};
        color: ${props => props.theme['yellow']};

        position: relative;

        &[aria-disabled='true'] {
            pointer-events: none;
        }

        span {
            ${fonts.textS};
            font-weight: bold;

            color: ${props => props.theme.background};
            background-color: ${props => props.theme['yellow-dark']};

            border-radius: 50%;

            width: 20px;
            height: 20px;

            display: flex;
            justify-content: center;
            align-items: center;

            position: absolute;
            top: 0px;
            right: 0px;

            transform: translate(50%, -50%);
        }
    }
`

