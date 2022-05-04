import styled from "styled-components";

export const JobsContainer = styled.div`
  height: 900px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;
  background-color: transparent;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const ContentHolder = styled.div`
  padding: 0.5rem 1rem;
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
`;

export const TitleHolder = styled.div`
  width: 80%;
  margin: auto;
`;

export const JobCardsHoler = styled.div`
  width: 85%;
  margin: 1rem auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const JobCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgb(255, 254, 254);
  box-shadow: 7px 7px 22px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 7px 7px 22px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 7px 7px 22px 0px rgba(0, 0, 0, 0.75);
  padding: 0 1rem;
  max-width: 25%;
  justify-content: space-between;
  transition: box-shadow 0.3s ease-in;
  margin: 1rem;
  &:hover {
    box-shadow: 1px 8px 20px rgba(69, 65, 221, 0.75);
    transition: box-shadow 0.3s ease-in;
  }
`;

export const CompanyInfoHoler = styled.div`
  display: grid;
  grid-template-columns: [image-row] 1fr [content-row] 6fr;
  width: 100%;
  justify-content: space-between;
  background-color: white;
  padding: 1rem 2rem;
  text-align: center;

  padding-left: 0;
  transition: all 0.2s ease-in-out;

  .box1 {
    grid-column-start: image-row;
    transition: all 0.2s ease-in-out;
  }
  .box2 {
    grid-column-start: content-row;
    transition: all 0.2s ease-in-out;
    margin-left: 0.5rem;

    h6 {
      margin: 0;
      text-align: left;
    }

    p {
      transition: all 0.2s ease-in-out;
      text-align: left;
      font-size: 14px;
      margin: 0;
    }
  }
`;

export const JobTitleHolder = styled.div`
  margin: 0.5rem 0;
`;

export const JobTitle = styled.h4`
  margin-bottom: 0;
  font-family: "Encode Sans Expanded", sans-serif;
`;

export const JobType = styled.p`
  font-size: 15px;
  color: gray;
  font-family: "Encode Sans Expanded", sans-serif;
`;

export const JobDescriptionBox = styled.div`
  width: inherit;
`;

export const JobDescription = styled.p`
  overflow: hidden;
  max-width: 100%;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  color: rgb(112, 137, 157);
  font-family: "Source Sans Pro", sans-serif;
`;

export const JobFooter = styled.div`
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;
`;

export const Sallary = styled.h5`
  font-weight: bold;
`;
export const Muted = styled.span`
  font-size: 12px;
  color: gray;
`;

export const ApplyButton = styled.button`
  border: none;
  outline: none;
  color: rgb(69, 65, 221);
  background-color: #f8f6fe;
  padding: 0.2rem 0.5rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    transition: all 0.3s ease-in-out;

    background-color: rgb(66, 62, 221);
    color: white;
  }
`;
