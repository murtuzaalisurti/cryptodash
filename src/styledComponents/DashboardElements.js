import styled from "styled-components";

export const DashWrapper = styled.div`
  width: 100%;
  background-color: #04151f;

  .Center {
    width: 85%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: space-evenly;
    align-items: center;
    margin: 2rem auto 4rem auto;
    background-color: #04151F;
    flex-wrap: wrap;
  }

  .Name {
    color: #fff6d1;
    font-size: 30px;
    align-self: flex-start;
    padding: 1rem 3rem;
  }

  .cards{
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
  }

  .card {
    /* height: 220px; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 1.5rem;
    width: 400px;
    border: 1px solid transparent;
    border-radius: 1rem;
    color: #FFF8DA;
    background-color: rgb(255 246 209 / 40%);

    .left h1{
      font-size: 2rem;
      font-family: 'Lato', sans-serif;
      margin-bottom: 0.5rem;
    }
    .left h4{
      font-size: 0.7rem;
    }
    p{
      font-family: 'Chivo', sans-serif;
    }

    .right img{
      height: auto;
      width: 4rem;
    }
  }
`;
