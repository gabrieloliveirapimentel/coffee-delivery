import styled from "styled-components"
import { fonts } from "../../styles/fonts"

export const Container = styled.div`
    position: relative;

    img#background {
        position: absolute;
        top: 0;
        left: 0;
        max-height: 544px;
        width: 100vw;
        object-fit: cover;
    }
`

export const Content = styled.div`
    max-width: 1160px;
    padding: 92px 20px;
    margin: 0 auto;

    display: flex;
    gap: 56px;
    align-items: flex-start;
    justify-content: space-between;

    > div {
        display: flex;
        flex-direction: column;
        gap: 66px;
    }
`

export const Heading = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`

export const Title = styled.h1`
    ${fonts.titleXL}
    color: ${props => props.theme['base-title']};
`

export const Subtitle = styled.span`
    ${fonts.textL}
    color: ${props => props.theme['base-subtitle']};
`

export const InfoList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 20px;

  > div {
    display: flex;
    align-items: center;
    gap: 12px;

    svg {
      padding: 8px;
      border-radius: 999px;
    }
  }
`

export const CoffeeList = styled.div`
    max-width: 1160px;
    padding: 32px 20px 150px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    gap: 54px;

    > h2 {
        ${fonts.titleL}
        color: ${props => props.theme['base-subtitle']};
    }

    > div {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-row-gap: 40px;
        grid-column-gap: 32px;
    }
`

