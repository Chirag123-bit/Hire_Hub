import styled from "styled-components";

export const JobsContainer = styled.div`
  /* height: 900px; */
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;
  background-color: transparent;
  /* backdrop-filter: blur(100px); */

  @media screen and (max-width: 768px) {
    min-height: 1100px;
  }

  @media screen and (max-width: 480px) {
    min-height: 1300px;
  }
`;

export const ContentHolder = styled.div`
  padding: 5rem 0;
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* position: absolute; */
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
  padding: 0 1rem;
  max-width: 25%;
  min-height: 307.5px;
  justify-content: space-between;
  transition: all 0.1s ease-in-out;
  margin: 1rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border-radius: 10%;
  backdrop-filter: blur(20px);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0)
  );

  &:hover {
    transform: scale(1.05);
    box-shadow: 1px 8px 20px rgba(69, 65, 221, 0.75);
    transition: all 0.1s ease-in-out;
    backdrop-filter: blur(50px);
  }

  &::before {
    content: "";
    position: absolute;
    height: 130%;
    width: 40%;
    top: -15%;
    right: 0;
    left: 0;
    margin: auto;

    background: linear-gradient(#00e5ff, #b400fb);
    animation: animate 10s linear infinite;
    overflow: hidden;

    @keyframes animate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }

  &::after {
    content: "";
    position: absolute;
    inset: 5px;
    background: #29303f;
    border-radius: 10%;
    overflow: hidden;
    /* background: inherit; */
  }
`;

export const CompanyInfoHoler = styled.div`
  display: grid;
  grid-template-columns: [image-row] 1fr [content-row] 6fr;
  width: 100%;
  justify-content: space-between;
  padding: 1rem 2rem;
  text-align: center;
  color: whitesmoke;

  padding-left: 0;
  /* transition: all 0.2s ease-in-out; */

  .box1 {
    grid-column-start: image-row;
    /* transition: all 0.2s ease-in-out; */
  }
  .box2 {
    grid-column-start: content-row;
    /* transition: all 0.2s ease-in-out; */
    margin-left: 0.5rem;

    h6 {
      margin: 0;
      text-align: left;
    }

    p {
      /* transition: all 0.2s ease-in-out; */
      text-align: left;
      font-size: 14px;
      margin: 0;
    }
  }
`;

export const JobTitleHolder = styled.div`
  margin: 0.5rem 0;
  color: #fff;
`;

export const JobTitle = styled.h4`
  margin-bottom: 0;
  font-family: "Encode Sans Expanded", sans-serif;
`;

export const JobType = styled.p`
  font-size: 15px;
  color: whitesmoke;
  font-family: "Encode Sans Expanded", sans-serif;
`;

export const JobDescriptionBox = styled.div`
  width: inherit;
  color: whitesmoke;
`;

export const JobDescription = styled.p`
  overflow: hidden;
  max-width: 100%;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  /* color: rgb(112, 137, 157); */
  font-family: "Source Sans Pro", sans-serif;
`;

export const JobFooter = styled.div`
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;
`;

export const Sallary = styled.h5`
  font-weight: bold;
  color: whitesmoke;
`;
export const Muted = styled.span`
  font-size: 12px;
  color: gray;
`;

export const ApplyButton = styled.button`
  padding: 0.2rem 0.7rem;
  margin: auto;
  background-color: #3a3636;
  color: #fff;
  border-radius: 7px;
  border: 2px solid #fff;
  cursor: pointer;
  font-size: 14px;
  letter-spacing: 1.3px;
  transition: all 0.1s ease-in-out;

  &:hover {
    transition: all 0.1s ease-in-out;

    background-color: rgba(0, 0, 0, 0.5);
    /* color: white; */
  }
`;
