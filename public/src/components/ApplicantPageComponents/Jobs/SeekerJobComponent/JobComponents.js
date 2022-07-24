import styled from "styled-components";

export const ContentHolder = styled.div`
  /* padding: 3rem 0; */
  padding-top: 3rem;
  font-family: "Raleway", sans-serif;
  display: flex;
  flex-direction: column;
  height: 100vh;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const HomePanalListWrap = styled.div`
  display: flex;
  flex: 1;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const HomePanalWrap = styled.div`
  flex-basis: 20%;
  overflow-y: auto;
  padding: 1rem;
  padding-left: 0;
  padding-bottom: 0;
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 910px) {
    flex-basis: 40%;
  }
  @media screen and (max-width: 650px) {
    flex-basis: 45%;
  }
`;
export const ListWrap = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  &::-webkit-scrollbar {
    display: none;
  }
`;
