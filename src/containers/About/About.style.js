import styled, { css } from 'styled-components'

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 480
}

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `
  return acc
}, {})

export const Header = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  padding: 0em 1em;
`

export const AboutText = styled.div`
  line-height: 1.5em;
  overflow-wrap: break-word;
  word-wrap: break-word;
`

export const PortfolioImage = styled.div `
  height: 50vh;
  display: flex;
  align-items: center;
  padding: 0em 1em;
`

export const TopWrapper = styled.div`
  width: 100%;
  height: 40%;
  padding-top: 2em;
  display: flex;
  flex-flow: row wrap;
  ${media.phone`justify-content: center;`}

`

export const IconsBlock = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  padding-top: 2em;
`
