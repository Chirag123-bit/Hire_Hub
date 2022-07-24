import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */

  min-height: 400px;
  /* backdrop-filter: blur(100px); */
`;

export const ContentHolder = styled.div`
  width: 90%;
  margin: auto;
`;
export const ColoredSlogan = styled.span`
  color: whitesmoke;
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

  @media screen and (max-width: 900px) {
    flex-wrap: wrap;
    justify-content: space-around;
  }
  @media screen and (max-width: 740px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const CategoryCard = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.2);
  border: 0.1px solid transparent;

  padding: 2rem 3rem;
  text-align: center;
  justify-content: center;
  width: 30%;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.1);
    background: rgba(0, 0, 0, 0.2);
    color: whitesmoke;
  }
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
