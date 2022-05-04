import React from "react";
import {
  ApplyButton,
  SectionWrapper,
  ButtonContainer,
  ChatContainer,
  ChatInput,
  MessageButton,
  SaveButton,
} from "./Component";

import { BsBookmark } from "react-icons/bs";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { MdOutlineMessage } from "react-icons/md";
function Sidebar() {
  return (
    <SectionWrapper>
      <ButtonContainer>
        <ApplyButton to="/applicant/home" primary="true" dark="true">
          <AiOutlineCheckCircle /> Apply For This Job
        </ApplyButton>
        <SaveButton to="/applicant/home" primary="true" dark="true">
          <BsBookmark /> Save This Job
        </SaveButton>
      </ButtonContainer>

      <ChatContainer>
        <ChatInput name="message" rows="6" cols="38"></ChatInput>
        <MessageButton to="/applicant/home" primary="true" dark="true">
          <MdOutlineMessage /> Send Message
        </MessageButton>
      </ChatContainer>
    </SectionWrapper>
  );
}

export default Sidebar;
