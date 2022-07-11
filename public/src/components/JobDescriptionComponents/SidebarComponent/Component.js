import styled from "styled-components";

export const SectionWrapper = styled.div`
  width: 20%;
  background: transparent;
`;

export const ApplyButton = styled.button`
  padding: 12px 30px;
  background-color: #423edd;
  outline: white;
  border: 1px solid #423edd;
  border-radius: 5px;
  color: white;
  width: 100%;
  margin: auto;
  cursor: pointer;

  &:hover {
    background-color: transparent;
    color: #423edd;
    border: 1px solid #423edd;
  }
`;
export const DisabledApplyButton = styled.button`
  padding: 12px 30px;
  background-color: #3dbeee;
  outline: white;
  border: 1px solid #3dbeee;
  border-radius: 5px;
  color: white;
  width: 100%;
  margin: auto;
  cursor: pointer;
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
  background-color: transparent;
  backdrop-filter: blur(10px);
  color: white;
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
  background-color: orange;
  border: 1px solid orange;
  outline: white;
  border-radius: 5px;
  color: white;
  width: 100%;
  margin-top: 1rem;
  cursor: pointer;

  &:hover {
    background-color: transparent;
    backdrop-filter: blur(10px);
    color: #423edd;
    border: 1px solid orange;
    color: white;
  }
`;
