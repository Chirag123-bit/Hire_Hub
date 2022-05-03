import styled from "styled-components";

export const SectionWrapper = styled.div`
  width: 20%;
  background: transparent;
  overflow-y: auto;
  height: 100vh;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ApplyButton = styled.button`
  padding: 12px 30px;
  background-color: #423edd;
  outline: white;
  border: none;
  border-radius: 5px;
  color: white;
  width: 100%;
  margin: auto;
`;

export const ButtonContainer = styled.div`
  /* margin: 2rem 1rem; */
  margin: 4rem auto;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const ChatContainer = styled.div`
  width: 100%;
  text-align: center;
  margin: 2rem 0;
`;

export const ChatInput = styled.textarea`
  text-align: left;
  margin-bottom: 0;
`;

export const MessageButton = styled.button`
  padding: 12px 30px;
  background-color: green;
  outline: white;
  border: none;
  border-radius: 5px;
  color: white;
  width: 100%;
  margin: auto;
`;

export const SaveButton = styled.button`
  padding: 12px 30px;
  background-color: #fbc02d;
  outline: white;
  border: none;
  border-radius: 5px;
  color: white;
  width: 100%;
  margin-top: 1rem;
`;
