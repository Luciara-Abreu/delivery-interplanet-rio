import styled from 'styled-components';

export const BannerContainer = styled.form`
  width: 100%;
  height: 80vh;
  display: flex;  
  flex-direction: column;
  align-items: center;


  h1{
    padding-top: 15%;

  }

  p{
    padding-top: 1%;
    font-size: 30px;
    color: #000;
  }

  background-image: linear-gradient(rgba(86, 109, 143, 0.8), rgba(86, 109, 143, 0.8)), 
  url(https://businessofanimation.com/wp-content/uploads/2022/02/how-to-start-an-animation-studio.gif);
  background-size: auto, cover;

`;

