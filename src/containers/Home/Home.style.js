import styled from 'styled-components'

export const Image = styled.img`
  width: 100vw;
  height: 80vh;
 `

export const CenterText = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  color: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: fadein 5s;

  @keyframes fadein {
      from {
          opacity:0;
      }
      to {
          opacity:1;
      }
  }
`
