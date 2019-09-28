import styled from '@emotion/styled';

const StackableColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px 30px;
  height: 100%;
  /* flex-basis: 33%; */
  /* flex-grow: 0; */
  width: 33%;

  @media only screen and (max-width: 960px) {
    justify-content: flex-start;
    width: 100%;
  }

  h1 {
    font-family: 'e2-Raleway-Bold';
    font-size: 26px;
    max-width: 95vw;
    line-height: 60px;
    text-align: center;
    -webkit-letter-spacing: 4px;
    -moz-letter-spacing: 4px;
    -ms-letter-spacing: 4px;
    letter-spacing: 1.5px;
  }

  p {
    margin-bottom: 10px;
    line-height: 30px;
    text-align: justify;
    font-size: 17px;
    letter-spacing: 1.25px;
    font-family: 'e2-Raleway-Light';
  }

  .gatsby-image-wrapper {
    height: auto;
    width: 80%;
    text-align: center;
  }
`;

export default StackableColumn;
