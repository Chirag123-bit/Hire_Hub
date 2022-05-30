import styled from "styled-components";

export const HeroContainer = styled.div`
  height: 700px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: radial-gradient(
      111% 111% at 74.29% -11%,
      #a93300 0%,
      #005570 100%
    ),
    linear-gradient(127.43deg, #00d5c8 0%, #2200aa 100%);
  background-blend-mode: difference, normal;
  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
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
`;

export const Slogan = styled.h1`
  text-align: center;
  padding: 1rem;
  width: 81%;
  margin: auto;
  line-height: 3.2rem;
`;
export const ColoredSlogan = styled.span`
  color: #423edd;
`;

export const SloganSubtext = styled.h6`
  color: gray;
  text-align: center;
`;

export const FormContainer = styled.div`
  padding: 1.5rem;
  display: flex;
  justify-content: center;
`;

export const SearchContainer = styled.form`
  align-items: center;
  box-shadow: 10px 17px 71px 0px rgba(174, 167, 167, 0.75);
  -webkit-box-shadow: 10px 17px 71px 0px rgba(174, 167, 167, 0.75);
  -moz-box-shadow: 10px 17px 71px 0px rgba(174, 167, 167, 0.75);
  border-radius: 2rem;
  width: max-content;
  background-color: rgb(255, 254, 254);
`;
export const JobSearch = styled.input`
  border-radius: 2rem;
  border: none;
  padding: 0.5rem;
  text-align: center;
  outline: none;
`;

export const LocationFilter = styled.select`
  border: none;
  border-radius: 2rem;
  padding: 0.5rem;
  margin: 0 1rem;
  outline: none;

  width: max-content;
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
`;
