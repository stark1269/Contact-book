import styled from "styled-components";
import photo from '../../images/photo.jpeg';

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 224px;
  padding-bottom: 224px;
  background-image: linear-gradient(rgba(10,10,10,.7),rgba(10,10,10,.7)),url(${photo});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
`;

export const Wrapper = styled.div`
  padding: 72px;
  background-color: #000000ee;
  width: 100%;
  height: 100%;
`;
