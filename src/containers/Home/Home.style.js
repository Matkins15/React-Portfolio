import styled from 'styled-components'

export const Image = styled.img`
  width: 100vw;
  height: 80vh; 
 `

export const Nav = styled.div`
   width: 100vw;
   height: 10vh;
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
 `
export const LandingImage = styled.div`
  height: 100vh;
  background-image: url('${require('../../assets/music-store.jpg')}');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: red;
  font-size: 2em;
  
`
