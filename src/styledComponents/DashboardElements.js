import styled from "styled-components";

export const DashWrapper = styled.div`
  /* height: auto; */
  width: 100%;
  background: #04151f;

  .Center {
    /* height: 75vh; */
    width: 90%;
    display: flex;
    gap: 1rem;
    justify-content: space-evenly;
    align-items: center;
    margin: 2rem auto 0 auto;
    background: blue;
    flex-wrap: wrap;
  }

  .Name {
    color: #fff6d1;
    font-size: 30px;
  }

  .card {
    /* height: 220px; */
    padding: 0.5rem;
    width: 400px;
    border: 2px solid black;
  }
`;
