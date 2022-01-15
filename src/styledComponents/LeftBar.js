import styled from "styled-components";

export const LeftBarWrapper = styled.div`
  width: 8vh;
  /* background: blue; */
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  border-right: 1px solid #fff6d1;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;

export const Img = styled.img`
  height: 40px;
  width: 40px;
  margin-block: 2rem;
`;
