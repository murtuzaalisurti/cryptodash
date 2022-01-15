import styled from "styled-components";

export const HeaderWrapper = styled.div`
  height: 15vh;
  width: 100%;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 5.5rem;

  h3 {
    color: #ffeea6;
    font-size: 20px;
  }

  button {
    padding: 0.7rem;
    cursor: pointer;
    font-size: 18px;
    color: #04151f;
    border: none;
    outline: none;
    background: #ffeea6;
    font-weight: 500;
    border-radius: 0.4rem;
  }
`;
