import styled from "styled-components";

export const SectionContainer = styled.div`
  width: 100%;
  min-height: 450px;

  padding-top: 6rem;
`;

export const ContentHolder = styled.div`
  width: 50%;
  margin: auto;
  padding-bottom: 1rem;
`;

export const TextContentSection = styled.div`
  padding-top: 3rem;
  text-align: justify;
`;

export const JobInfoTitle = styled.p`
  line-height: 0.5rem;
  color: #f5fcfc;
  font-size: 2rem;
  text-align: center;
`;

export const ColoredTitle = styled.h2`
  text-transform: capitalize;
  font-weight: bold;
`;

export const JobInfoSub = styled.p`
  color: #f5fcfc;
  font-size: 1.2rem;
`;

export const UnStyled = styled.span`
  text-transform: lowercase;
  font-weight: 300;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const CompanyButton = styled.button`
  padding: 12px 30px;
  background-color: orange;
  outline: #423edd;
  border: none;
  border-radius: 50px;
  color: white;

  &:hover {
    background-color: #423edd;
  }
`;

export const ApplyButton = styled.button`
  padding: 12px 30px;
  background-color: #423edd;
  outline: white;
  border: none;
  border-radius: 50px;
  color: white;

  &:hover {
    background-color: orange;
  }
`;
