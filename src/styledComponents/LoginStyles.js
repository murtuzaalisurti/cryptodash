import styled from "styled-components";

export const WrapperLogin = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-around;
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
  /* padding-left: 4rem; */
  text-align: center;
  h1 {
    color: #fff6d1;
    font-size: 45px;
    margin-bottom: 1.5rem;
  }
  form {
    width: 100%;
    max-width: 25rem;
  }

  @media screen and (max-width: 45rem) {
    width: 85%;
    z-index: 1;
  }
`;

export const RightLogin = styled.div`
  height: 90%;
  width: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: auto;
    width: 100%;
  }

  @media screen and (max-width: 45rem) {
    position: absolute;
    bottom: 0;
    right: 0;
    height: fit-content;
    width: 80%;
    opacity: 0.2;
    z-index: 0;
  }
`;
