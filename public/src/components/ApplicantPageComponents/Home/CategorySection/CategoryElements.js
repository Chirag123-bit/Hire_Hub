import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */

  min-height: 400px;
  /* background-color: ${({ white }) => (white ? "#FFFEFE" : "#F6F6FD")}; */
`;

export const ContentHolder = styled.div`
  width: 90%;
  margin: auto;
`;

export const TitleContainer = styled.div`
  margin: 1rem;
  text-align: left;
`;

export const Title = styled.h2`
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;

export const HContainer = styled.div`
  margin: auto;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
`;

export const CategoryCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ white }) => (white ? "#F6F6FD" : "#FFFEFE")};

  padding: 2rem 3rem;
  text-align: center;
  justify-content: center;
  width: 30%;
  border-radius: 10px;
  cursor: pointer;
`;

export const ImageSection = styled.div`
  width: 30%;
  /* margin: 0.5rem; */
  margin: auto;
`;
export const CatImage = styled.img`
  width: 80%;
`;

export const TitleSection = styled.div`
  margin-bottom: 0.5rem;
`;
export const CategoryTitle = styled.h4`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: bold;
  margin-bottom: 0;
`;

export const SubTitleSection = styled.div`
  width: 90%;
  margin: auto;
`;

export const CategorySubtitle = styled.h5`
  color: gray;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 15px;
`;
