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

export const Container = styled.div`
  padding: 30px 80px 0px 80px;
  ${media.tablet`padding: 30px 50px 0px 50px;`}
  ${media.phone`padding: 30px 20px 0px 20px;`}

`

export const Name = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 2em;
  font-size: 2em;
  letter-spacing: .5em;
  font-weight: 700;
  ${media.tablet`font-size: 1.5em;`}
  ${media.phone`font-size: 1em;
    letter-spacing: .25em;
    `}
`
