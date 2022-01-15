import styled from "styled-components";

export const WrapperLogin = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.3rem;
  background-color: #04151f;
  flex-wrap: wrap;
`;

export const LoginLeft = styled.div`
  height: 100%;
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* background: red; */
  padding-left: 4rem;
  text-align: center;
  h1 {
    color: #fff6d1;
    font-size: 45px;
    margin-bottom: 1.5rem;
  }
  form {
  }
`;

export const RightLogin = styled.div`
  height: 90%;
  width: 45%;
  /* background-color: blue; */
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: auto;
    width: 100%;
  }
`;
