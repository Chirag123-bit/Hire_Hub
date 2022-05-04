import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) =>
    lightBg ? "#F6F6FD" : "rgba(255,255,255,0.1)"};
  @media screen and (max-width: 768px) {
    padding: 6.25rem 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 700px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};
  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col2 col2' 'col1 col1'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  grid-area: col2;
`;

export const TopLine = styled.p`
  color: #423edd;
  font-size: 1rem;
  line-height: 1rem;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

export const Heading = styled.h1`
  margin-bottom: 1.5rem;
  font-size: 2.2rem;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#000" : "#010606")};
  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 580px) {
    font-size: 1.8rem;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 2.2rem;
  font-size: 1.125rem;
  line-height: 24px;
  text-align: justify;
  color: ${({ darkText }) => (darkText ? "#000" : "#303030")};
  @media screen and (max-width: 768px) {
    font-size: 1.12rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 500px;
  height: 100%;
  @media screen and (max-width: 768px) {
    //Center the img:
    text-align: center;
  }
`;

export const Img = styled.img`
  width: 90%;
  margin-bottom: 10px;
  //top right bottom left
  padding-right: 0;
  @media screen and (max-width: 768px) {
    width: 80%;
  }
  @media screen and (max-width: 480px) {
    width: 90%;
  }
`;
