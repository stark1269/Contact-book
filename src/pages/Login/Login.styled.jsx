import styled from "styled-components";
import photo from '../../images/photo.jpeg';

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 18px;
  background-image: linear-gradient(rgba(10,10,10,.7),rgba(10,10,10,.7)),url(${photo});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
`;

export const Title = styled.h2`
color: whitesmoke;
font-size: 54px;
`;