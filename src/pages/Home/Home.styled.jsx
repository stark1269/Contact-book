import styled from "styled-components";
import photo from '../../images/photo.jpeg';

export const Div = styled.div`
  position: relative;
  background-image: linear-gradient(rgba(10,10,10,.7),rgba(10,10,10,.7)),url(${photo});;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
`;

export const Title = styled.h1`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
color: whitesmoke;
font-size: 54px;
`;