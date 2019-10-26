import styled from '@emotion/styled';

const ReadyToGetStartedSection = styled.div`
  
  padding: 150px 30px;
  
  h1 {
    font-family: 'e2-Raleway-Black-Italic';
    font-size: calc(3px + 8vw);
    line-height: calc(15px + 9vw);
    margin: 50px 50px 20px 50px;
    text-align: center;
  }

  a {
    cursor: pointer;
    font-family: 'e2-Raleway-Semi-Bold-Italic';
    display: flex;
    justify-content: center;
    padding-top: calc(10px + 6vw);
    font-size: calc(10px + 3vw);
    line-height: calc(15px + 4.5vw);
    justify-content: center;
    align-items: center;
    text-decoration: underline;
    letter-spacing: 1.5px;
  }
`;

export default ReadyToGetStartedSection;