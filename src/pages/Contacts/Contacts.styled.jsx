import styled from "styled-components";
import photo from '../../images/photo.jpeg';

export const Div = styled.div`
  padding: 42px;
  padding-top: 124px;
  background-image: linear-gradient(rgba(10,10,10,.8),rgba(10,10,10,.8)),url(${photo});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
`;