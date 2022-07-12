import styled from "styled-components";

export const EventContainer = styled.div`
  min-height: 95vh;
`;
export const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 15vh;

  @media (max-width: 768px) {
    padding-top: 10vh;
  }
`;
export const EventsHolder = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
