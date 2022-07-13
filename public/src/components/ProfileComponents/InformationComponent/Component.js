import styled from "styled-components";

export const ContentHolder = styled.div`
  width: 60%;
  background: transparent;
  backdrop-filter: blur(10px);
`;

export const Content = styled.div`
  width: 100%;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 1rem 0;
`;

export const DescriptionTitle = styled.h3`
  margin-bottom: 1.5rem;
  text-align: left;
  color: rgb(51, 71, 129);
  color: white;
`;

export const Summary = styled.p`
  text-align: justify;
  color: white;
`;

export const Listing = styled.div`
  margin-bottom: 2rem;

  padding-bottom: 2rem;
  border-bottom: 1px solid white;
  display: flex;
  justify-content: space-between;
`;

export const TitleListing = styled.div`
  width: 40%;
  color: white;
`;

export const JobTitle = styled.h4`
  color: wheat;
  /* margin-bottom: 1rem;
  margin-top: 0; */
  margin-bottom: 0;
`;

export const Location = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Company = styled.p`
  color: #50cdfe;
  font-size: 14px;
`;

export const Address = styled.p`
  color: white;
  font-size: 14px;
`;

export const TypeDateListing = styled.div`
  max-width: 30%;
`;

export const JobType = styled.div`
  padding: 0.3rem 1rem;
  background-color: #d7fee1;
  /* margin: 0.5rem 0; */
  border-radius: 10px;
  text-align: center;
`;

export const Date = styled.p`
  color: white;
  font-size: 14px;
`;
