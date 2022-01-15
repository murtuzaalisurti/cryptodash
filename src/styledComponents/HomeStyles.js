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
`;

export const Title = styled.h1`
  color: #fff6d1;
  font-size: 3.5rem;
  font-weight: 400;
`;

export const Desc = styled.h3`
  color: #fff6d1;
  font-size: 1rem;
  line-height: 26px;
  font-weight: 300;
  margin-block-start: 1rem;
`;

export const Right = styled.div`
  height: 90%;
  width: 45%;
  /* background-color: blue; */

  img {
    height: auto;
    width: 100%;
  }
`;
