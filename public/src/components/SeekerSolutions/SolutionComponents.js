import styled from "styled-components";

export const SolutionsContainer = styled.div`
  height: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;
  background-color: rgb(246, 246, 253);
  padding: 5rem 0;

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
`;

export const CategoryCard = styled(CardsContainer)`
  display: grid;
  grid-template-columns: [image-row] 1fr [context] 3fr;
  width: 35%;
  background-color: white;
  width: min-content;
  padding: 0.5rem 2rem;
  text-align: center;
  margin: 1rem 0;
  padding-left: 0;

  .box1 {
    grid-column-start: image-row;

    img {
      padding: 0.5rem;
      width: 4rem;
    }
  }
  .box2 {
    grid-column-start: context;
    p {
      font-size: 14px;
      margin: 0;
    }
  }
  &:hover {
    background-color: #423edd;
    .box1 {
      img {
        fill: white;
      }
    }
    .box2 {
      p,
      h6 {
        color: white;
      }
    }
  }
`;
