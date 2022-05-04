import styled from "styled-components";

export const Card = styled.div`
  width: 25%;
  height: 100vh;
  background: transparent;
`;

export const ProfileContainer = styled.div`
  padding: 5rem 3rem;
  display: flex;
  justify-content: space-evenly;
`;

export const ContentHolder = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 1rem;
`;

export const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const ImageContainer = styled.div`
  text-align: center;
  margin: auto;
`;

export const CandidateImage = styled.img`
  border-radius: 50%;
  max-width: 80%;
`;

export const IntroTextHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Name = styled.h2`
  color: #045de9;
`;

export const Title = styled.h4`
  color: #98a0be;
`;

export const SkillHolder = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-decoration: none;
  list-style: none;
  padding: 0;
`;

export const Skill = styled.li`
  /* background-color: #045de9; */
  color: black;
  padding: 0.2rem;
  margin: 0.4rem;
  border-radius: 0.7rem;
  cursor: pointer;
`;

export const InfoHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;

  margin: auto;
`;

export const Info = styled.h5`
  color: rgb(104, 118, 162);
  border-bottom: 1px dotted gray;
  padding: 1rem 0;
  display: flex;
`;

export const IconHolder = styled.span`
  margin-right: 0.2rem;
`;
