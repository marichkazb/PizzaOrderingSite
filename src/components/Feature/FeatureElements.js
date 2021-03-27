import styled from 'styled-components'
import ImgBack from '../images/featured3.jpg'

export const FeatureContainer = styled.div ` 
height: 100vh; 
display: flex; 
justify-content: center;
align-items: center;
color: #fff;
background: linear-gradient(to right, rgba(0,0,0,0.7),
rgba(0,0,0,0.1)), 
url(${ImgBack});background-position: center;
background-size: cover;
`

export const FeatureItems = styled.div ` 
display: flex; 
flex-direction: column;
justify-content: center; 
align-items: center; 

@media screen and (max-width: 650px) {
   width: 100%;
}
`

export const FeatureH1 = styled.div ` 
font-size: clamp(3rem, 5vw, 5rem);
box-shadow: 3px 5px #e9ba23;
letter-spacing: 3px;
`

export const FeatureP = styled.p ` 
margin: 1rem;
font-size: clamp(1rem, 3vw, 2rem);

`
export const FeatureBtn = styled.button ` 
padding: 16px 80px;
font-size: 1.4rem; 
border: none; 
background: #e31837;
color: #fff; 
transition: 0.2s ease-out;

&:hover { 
   background: #ffc500; 
   transition: 0.2s ease-out;
   cursor: pointer; 
   color: #000; 
}

`

