import { FcGoogle } from "react-icons/fc";
import styled from "styled-components";

export const SolutionsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background: #010606; */
  background-color: transparent;
  padding: 5rem 0;

  @media screen and (max-width: 768px) {
    /* height: 1100px; */
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
  margin: 1rem 0;
  padding: 1rem 0;
  @media screen and (max-width: 900px) {
    /* height: 1100px; */
    justify-content: center;
  }
`;
export const FcAdvertisment = styled(FcGoogle)`
  font-size: 3rem;
  cursor: pointer;
`;
export const CategoryCard = styled(CardsContainer)`
  border-radius: 1.2rem;
  display: grid;
  grid-template-columns: [image-row] 1fr [context] 3fr;
  width: 30%;
  justify-content: space-between;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0)
  );
  border: 0.1px solid transparent;
  padding: 1.5rem 2rem;
  text-align: center;
  margin: 1rem 0;
  padding-left: 0;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  backdrop-filter: blur(20px);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  @media screen and (max-width: 900px) {
    p {
      font-size: 10px;
    }
    flex-direction: column;
    width: 40%;
    flex-wrap: wrap;
  }
  @media screen and (max-width: 750px) {
    width: 50%;
    flex-wrap: wrap;
  }
  @media screen and (max-width: 550px) {
    width: 80%;
  }

  .box1 {
    grid-column-start: image-row;
    transition: all 0.2s ease-in-out;
  }
  .box2 {
    grid-column-start: context;
    transition: all 0.2s ease-in-out;
    h6 {
      color: #fff;
    }

    p {
      transition: all 0.2s ease-in-out;
      color: #fff;
      font-size: 14px;
      margin: 0;
    }
  }
  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.1);
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
  }
`;
