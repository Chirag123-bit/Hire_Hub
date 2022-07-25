import styled from "styled-components";

export const HeroContainer = styled.div`
  height: 750px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    /* height: 1100px; */
  }

  @media screen and (max-width: 480px) {
    /* height: 1300px; */
  }
`;

export const HeroBg = styled.div`
  top: 0;
  left: 0;
  /* right: 0; */
  /* bottom: 0; */
  width: 100%;
  /* height: 100%; */
  overflow: hidden;
  height: 100%;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;

export const ContentHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 90%;
  margin: auto;
  line-height: 4rem;
  @media screen and (max-width: 640px) {
    padding: 0;
    width: 100%;
    margin: auto;
  }
`;

export const Slogan = styled.h1`
  text-align: center;
  padding: 1rem;
  width: 81%;
  margin: auto;
  line-height: 3.2rem;
  color: white;
  @media screen and (max-width: 640px) {
    width: 100%;
  }
`;
export const ColoredSlogan = styled.span`
  color: #423edd;
`;

export const SloganSubtext = styled.h6`
  /* color: gray; */
  text-align: center;
`;

export const FormContainer = styled.div`
  padding: 1.5rem;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 640px) {
    padding: 0;
    width: 70%;
    margin: auto;
  }
`;

export const SearchContainer = styled.form`
  align-items: center;
  box-shadow: 10px 17px 71px 0px rgba(174, 167, 167, 0.75);
  -webkit-box-shadow: 10px 17px 71px 0px rgba(174, 167, 167, 0.75);
  -moz-box-shadow: 10px 17px 71px 0px rgba(174, 167, 167, 0.75);
  border-radius: 2rem;
  width: max-content;
  background-color: rgb(255, 254, 254);

  @media screen and (max-width: 640px) {
    /* padding: 0; */
    width: 80%;
    margin: auto;
  }
`;
export const JobSearch = styled.input`
  border-radius: 2rem;
  border: none;
  padding: 0.5rem;
  text-align: center;
  outline: none;
  @media screen and (max-width: 640px) {
    width: 61%;
    margin: 0;
  }
`;

export const LocationFilter = styled.select`
  border: none;
  border-radius: 2rem;
  padding: 0.5rem;
  margin: 0 1rem;
  outline: none;

  width: max-content;
  @media screen and (max-width: 640px) {
    display: none;
  }
`;

export const SearchBtn = styled.button`
  border: none;
  border-radius: 2rem;
  padding: 0.5rem 2rem;
  font-size: 1rem;
  text-align: center;
  background-color: #423edd;
  color: white;
  margin-left: auto;
  @media screen and (max-width: 640px) {
    width: 39%;
  }
`;
