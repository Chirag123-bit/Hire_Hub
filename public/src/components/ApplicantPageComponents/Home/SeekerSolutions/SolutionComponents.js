import { FcAdvertising } from "react-icons/fc";
import styled from "styled-components";

export const SolutionsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 5rem;
  /* backdrop-filter: blur(100px); */

  @media screen and (max-width: 768px) {
    /* height: 1100px; */
    justify-content: center;
  }

  @media screen and (max-width: 480px) {
    /* height: 1300px; */
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  margin: auto;
  padding: 1rem 0;
  padding-bottom: 0;
  border-radius: 1.2rem;
  font-family: "Source Sans Pro", sans-serif;
  @media screen and (max-width: 768px) {
    /* height: 1100px; */
    justify-content: center;
  }
`;
export const FcAdvertisment = styled(FcAdvertising)`
  font-size: 3rem;
  cursor: pointer;
`;
export const CategoryCard = styled.div`
  width: 30%;
  justify-content: space-between;
  padding: 1.5rem;
  text-align: center;
  margin: 1rem 0;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  /* background: rgba(66, 62, 221, 0.6); */
  border: 2px solid #fff;
  border-radius: 10px;
  z-index: 1;
  position: relative;
  backdrop-filter: blur(20px);

  background-clip: border-box;

  .box1 {
    grid-column-start: image-row;
    width: max-content;
    margin: auto;
    /* From https://css.glass */
    background: transparent;
    /* transition: all 0.2s ease-in-out; */
  }
  .box2 {
    grid-column-start: context;
    /* From https://css.glass */
    background: transparent;
    width: max-content;
    margin: auto;
    p {
      /* From https://css.glass */
      background: transparent;

      font-size: 14px;
      width: max-content;
      margin: auto;
      color: white;
    }
    h6 {
      /* From https://css.glass */
      background: transparent;
      width: max-content;
      margin: auto;
      color: white;
    }
  }
`;
