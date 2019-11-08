import styled from '@emotion/styled';

const StackableColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10vw calc(3px + 2vw);
  height: 100%;
  width: 33%;

  @media only screen and (max-width: 960px) {
    justify-content: flex-start;
    width: 100%;
  }

  h1 {
    font-family: 'e2-Raleway-Bold';
    font-size: calc(15px + 2vw);
    max-width: 95vw;
    line-height: calc(25px + 2vw);
    text-align: center;
    -webkit-letter-spacing: 4px;
    -moz-letter-spacing: 4px;
    -ms-letter-spacing: 4px;
    letter-spacing: 1.5px;
    min-height: 10vw;
    justify-content: center;
    text-align: center;
    display: flex;
    flex-direction: column;
  }

  h3 {
    font-family: 'e2-Raleway-Semi-Bold';
    font-size: calc(15px + 2vw);
    max-width: 95vw;
    line-height: 5vw;
    min-height: 5vw;
    padding-top: 3vw;
  }

  p {
    margin-bottom: 3vw;
    line-height: calc(19px + 3vw);
    text-align: justify;
    font-size: calc(12px + 1vw);
    letter-spacing: 1.25px;
    font-family: 'e2-Raleway-Light';
  }

  .gatsby-image-wrapper {
    height: auto;
    width: 80%;
    text-align: center;
    max-width: 310px;
  }

  ul {
    font-size: 24px;
    line-height: 37px;
    padding-top: 20px;
  }

  li {
    font-size: calc(15px + 2vw);
    max-width: 95vw;
    line-height: calc(15px + 5vw);
    min-height: 5vw;
    padding-top: 3vw;
    font-family: 'e2-Raleway-Semi-Bold';
  }

`;

export default StackableColumn;
