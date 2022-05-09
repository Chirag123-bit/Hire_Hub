import styled from "styled-components";

export const JobApplicantsContainer = styled.div`
  /* padding-top: 6rem; */
  /* width: 80%; */
  width: ${({ isOpen }) => (isOpen ? "80%" : "85%")};
  margin: auto;
  /* margin: 6rem auto; */
  margin-top: 8.2rem;
  margin-bottom: 0;
  /* padding-bottom: 8rem; */
  transition: all 0.6s ease-in-out;
`;
