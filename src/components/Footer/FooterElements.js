import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const FooterContainer = styled.div ` 
background-color: #0d0909;
color: #fff;
`; 

export const FooterWrap = styled.div ` 
padding: 16px 24px;
display: flex; 
flex-direction: column; 
align-items: center; 
justify-content: center; 
max-width: 1300px; 
margin: 0 auto;
`

export const SocialMedia = styled.section ` 
max-width: 1300px; 
width: 100%; 
`;

export const SocialMediaWrap = styled.div ` 
display: flex; 
justify-content: space-between; 
align-items: center; 
`

export const SocialLogo = styled(Link) ` 
color: #fff; 
justify-self: start; 
cursor: pointer; 
text-decoration: none; 
font-size: 1.5rem; 
display: flex; 
align-items: center; 
margin-bottom: 16px; 
`; 

export const SocialIcons = styled.div ` 
display: flex;
  justify-content: space-between;
  align-items: center;
  width: 150px;
  font-size: 24px;
  cursor: pointer;
`;

export const SocialIconLink = styled.a ` 
  font-size: 24px;
  color: #fff;
`;