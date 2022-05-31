import { FcAdvertising } from "react-icons/fc";
import styled from "styled-components";

export const SolutionsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem 0;
  backdrop-filter: blur(100px);

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 75%;
  margin: 1rem 0;
  padding: 1rem 0;
  border-radius: 1.2rem;
  font-family: "Source Sans Pro", sans-serif;
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
  /* padding-left: 0; */
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.2);
  border: 0.1px solid transparent;
  border-radius: 10px;
  z-index: 1;
  position: relative;
  /* box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); */
  backdrop-filter: blur(100px);

  background-clip: border-box;

  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.1);
    background: rgba(0, 0, 0, 0.2);
    color: whitesmoke;
  }

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
    }
    h6 {
      /* From https://css.glass */
      background: transparent;
      width: max-content;
      margin: auto;
    }
  }
  /* &:hover {
    transition: all 0.2s ease-in-out;
    background-color: #423edd;
    .box2 {
      transition: all 0.2s ease-in-out;
      p,
      h6 {
        color: white;
        transition: all 0.2s ease-in-out;
      }
    }
    ${FcAdvertisment} {
      g,
      path {
        fill: rgb(255, 254, 254);
      }
    }
  } */
`;
