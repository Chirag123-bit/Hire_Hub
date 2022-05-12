import styled from "styled-components";

export const JobApplicantsContainer = styled.div`
  /* padding-top: 6rem; */
  /* width: 80%; */
  width: ${({ isOpen }) => (isOpen ? "81%" : "90%")};
  margin-left: ${({ isOpen }) => (isOpen ? "16.5rem" : "7.5rem")};
  /* margin: auto; */
  /* margin: 6rem auto; */
  margin-top: 8.2rem;
  margin-bottom: 0;
  transition: all 0.6s ease-in-out;
`;
