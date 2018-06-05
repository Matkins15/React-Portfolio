import styled, { css } from 'styled-components'

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 500
}

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `
  return acc
}, {})

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 2em;
  margin-bottom: 2em;
`

export const Content = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  padding: 0em 5em;
`

export const Description = styled.div`
  display: flex;
  width: 50%;
`

export const Technologies = styled.div`
  flex: 1;
  text-align: center;
  width: 50%;
  p { margin: 0px; }
`

export const PortfolioContainer = styled.div`
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 30px;
`
