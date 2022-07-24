import styled from "styled-components";

export const HeadSectionContainer = styled.div`
  height: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background: #010606; */
  /* background-color: rgb(255, 254, 254); */

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const ContentHolder = styled.div`
  position: absolute;
  width: 90%;
  margin: auto;
`;

export const HeadTitle = styled.div`
  padding: 0 2rem;
`;

export const HeadSubtitle = styled.div`
  margin-top: 0;
  padding: 1rem;
  color: "white";
`;
