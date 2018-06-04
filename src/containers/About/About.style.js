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

export const AboutText = styled.div`
  flex: 1;
  padding: 2em 4em;
  line-height: 1.5em;
  overflow-wrap: break-word;
  word-wrap: break-word;
  ${media.phone`
    justify-content: center;
    padding: 1em 0em;
    line-height: 1.5em;
    font-size: .8em;
  `}
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

export const Image = styled.img `
  height: 40vh;
  ${media.tablet`height: 30vh;`}
  ${media.phone`height: 20vh;`}
`

export const TopWrapper = styled.div`
  width: 100%;
  height: 40%;
  padding-top: 2em;
  display: flex;
  flex-flow: row wrap;
  ${media.tablet`justify-content: center;`}
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
