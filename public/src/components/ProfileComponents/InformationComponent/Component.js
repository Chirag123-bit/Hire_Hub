import styled from "styled-components";

export const ContentHolder = styled.div`
  width: 60%;
  /* height: 100vh; */
  background: transparent;
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
`;

export const Summary = styled.p`
  max-width: 80%;
  text-align: justify;
`;

export const Listing = styled.div`
  margin-bottom: 2rem;
  max-width: 80%;
  padding-bottom: 2rem;
  border-bottom: 1px solid #50cdfe;
  display: flex;
  justify-content: space-between;
`;

export const TitleListing = styled.div`
  max-width: 70%;
`;

export const JobTitle = styled.h4`
  color: black;
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
  color: #50cdfe;
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
  color: black;
  font-size: 14px;
`;
