import styled from "styled-components"
import { fonts } from "../../styles/fonts"

export const Container = styled.div`
    background-color: ${props => props.theme["base-card"]};
    padding: 0 20px 20px;
    border-radius: 6px 36px;

    width: 256px;

    display: flex;
    flex-direction: column;
    text-align: center;
`

export const CoffeeImg = styled.img`
    width: 120px;
    height: 120px;

    margin-top: -20px;
    align-self: center;
`

export const Tags = styled.div`
    display: flex;
    align-items: center;
    align-self: center;

    gap: 4px;
    margin-top: 12px;
    
    span {
        ${fonts.tag};
        text-transform: uppercase;
        
        padding: 4px 8px;
        border-radius: 50px;

        background-color: ${props => props.theme["yellow-light"]};
        color: ${props => props.theme["yellow-dark"]};
    }
`

export const Title = styled.h2`
    margin-top: 16px;
    
    ${fonts.titleS};
    color: ${props => props.theme["base-title"]};
`

export const Description = styled.span`
    margin-top: 8px;
    width: 100%;

    ${fonts.textS};
    color: ${props => props.theme["base-label"]};
`

export const Control = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 32px;
`

export const Price = styled.div`
    display: flex;
    align-items: baseline;
    gap: 2px;

    span:first-child {
        ${fonts.textS};
        color: ${props => props.theme["base-text"]};
    }

    span:last-child {
        ${fonts.titleM};
        color: ${props => props.theme["base-text"]};
    }
`

export const Order = styled.div<{ $itemAdded?: boolean }>`
    display: flex;
    align-items: center;
    gap: 8px;

    > button {
        background-color: ${({ theme, $itemAdded }) =>
            $itemAdded ? theme['yellow-dark'] : theme['purple-dark']};
        border-radius: 6px;
        padding: 8px;
        display: flex;

        transition: background-color 0.2s;

        &:hover {
            background-color: ${({ theme, $itemAdded }) =>
                $itemAdded ? theme.yellow : theme.purple};
        }
    }
`