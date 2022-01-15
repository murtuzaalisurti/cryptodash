import styled from "styled-components";

export const HomeWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.3rem;
  background-color: #04151f;
  flex-wrap: wrap;
`;

export const Left = styled.div`
  height: 100%;
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding-left: 4rem;

  @media screen and (max-width: 50rem) {
    align-items: flex-start;
    width: 100%;
    padding: 0 2rem;
    z-index: 1;
  }
`;

export const Title = styled.h1`
  color: #fff6d1;
  font-size: 3.5rem;
  font-weight: 400;

  @media screen and (max-width: 50rem) {
    font-size: 2.5rem;
  }
`;

export const Desc = styled.h3`
  color: #fff6d1;
  font-size: 1rem;
  line-height: 26px;
  font-weight: 300;
  margin-block-start: 1rem;

  @media screen and (max-width: 50rem) {
    font-size: 0.9rem;
  }
`;

export const Right = styled.div`
  height: 90%;
  width: 45%;
  display: flex;
  align-items: center;
  /* background-color: blue; */

  img {
    height: auto;
    width: 100%;
  }
  @media screen and (max-width: 50rem) {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 60%;
    height: fit-content;
    opacity: 0.2;
  }
`;
