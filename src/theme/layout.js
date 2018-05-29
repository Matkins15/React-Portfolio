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

export const Container = styled.div`
  padding-left: 80px;
  padding-right: 80px;
  padding-top: 30px;
  ${'' /* ${media.tablet`justify-content: center;`}
  ${media.phone`justify-content: center;`} */}

`
