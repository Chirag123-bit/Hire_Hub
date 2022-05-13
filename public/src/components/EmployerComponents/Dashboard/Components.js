import styled from "styled-components";
import { BsThreeDotsVertical } from "react-icons/bs";

export const DashboardContainer = styled.div`
  /* padding: 2rem; */
  padding-top: 0;
  width: 65%;
`;
export const HeadContainer = styled.div``;
export const UpperHead = styled.div``;
export const LowerHead = styled.div``;
export const Title = styled.h4`
  color: #cccdcd;
`;
export const CreateButton = styled.button`
  background-color: #47c25f;
  display: flex;
  align-items: center;
  justify-content: space-between;
  svg {
    margin-right: 1rem;
  }
`;
export const DropDown = styled.select`
  background: #272b35;
  border: 1px solid #272b35 !important;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  color: #8a8a8a;
  font-size: 95%;
  padding: 0.5rem 1.5rem;
  outline: none;
  cursor: pointer;
`;
export const DropItem = styled.option`
  color: #ccc;
  font-size: inherit;
  padding: 0.35rem 1.5rem;
  transition: 0.25s ease-in-out;
  background: transparent;

  &:hover {
    background-color: #1c1f26 !important;
    color: #4466f2 !important;
  }
`;

export const SearchContainer = styled.div`
  position: relative;
  /* padding: 1rem */
`;

export const SearchBar = styled.input`
  background: #272b35;
  border: 1px solid #272b35 !important;
  box-shadow: var(--default-box-shadow);
  border-radius: 20px !important;
  padding: 0.5rem 1rem 0.5rem 2.2rem !important;
  color: white;

  &:focus {
    background-color: #272b35;
    outline: 1px solid #4466f2;
    color: white;
  }
`;

export const JobsContainerRow = styled.div``;
export const JobContainer = styled.div`
  margin: 2rem 0 !important;
  background-color: #272a34;
`;
export const JobCardHeader = styled.div`
  border-bottom: 1px solid;
  border-color: #2f3541;
`;
export const JobInfoTop = styled.div``;
export const JobInfoSide = styled.div``;
export const JobTitle = styled.h5`
  color: #cccdcd;
  text-align: center;
`;

export const ThreeDots = styled(BsThreeDotsVertical)``;

export const DropBtn = styled.button`
  border-radius: 50%;
  color: #4466f2;
  height: 30px;
  padding: 0;
  width: 31px;
  background: transparent;
  border: transparent;
  text-align: center;
  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const ActionsDropDown = styled.div`
  position: absolute;
  transform: translate3d(-119px, 30px, 0px);
  top: 0px;
  left: 0px;
  will-change: transform;
  background-color: #252932;
  border: 0;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  color: #ccc;
  font-size: 0.935rem;
  left: inherit;
  margin-top: 0.75rem;
`;

export const DropLink = styled.a`
  color: #ccc;
  display: block;
  padding: 0.35rem 1.5rem;
  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const JobCardBody = styled.div``;

export const JobStatusCards = styled.div`
  &::-webkit-scrollbar {
    height: 6px;
    width: 6px;
    visibility: hidden;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    visibility: hidden;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &:hover {
    &::-webkit-scrollbar-thumb {
      visibility: visible;
    }
  }
  .card {
    .text-size-13 {
      font-size: 16px !important;
    }
    .text-size-15 {
      font-size: 20px !important;
    }
  }
  .card-widget {
    align-items: center;
    border-radius: 0.25rem;
    display: inline-flex;
    flex-shrink: 0;
    justify-content: center;
    padding: 0.5rem;
    flex-direction: column;
    width: 130px;
  }
`;

export const NewCandidateCard = styled.div`
  background-color: #28303e;
`;
export const InterviewCard = styled.div`
  background-color: rgb(41, 46, 62);
`;
export const NegotiationCard = styled.div`
  background-color: rgb(40, 50, 61);
`;
export const ShortlistCard = styled.div`
  background-color: rgb(51, 46, 51);
`;
export const TaskCard = styled.div`
  background-color: rgb(41, 50, 55);
`;
export const HiredCard = styled.div`
  background-color: rgb(40, 48, 62);
`;
export const RejectCard = styled.div`
  background-color: #28303e;
`;
export const DisqualifyCard = styled.div`
  background-color: rgb(41, 46, 62);
`;
