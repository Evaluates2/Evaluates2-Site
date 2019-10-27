import styled from '@emotion/styled';

const ReadyToGetStartedSection = styled.div`
  
  padding: calc(40px + 20vw) calc(20px + 2vw);
  
  h1 {
    font-family: 'e2-Raleway-Black-Italic';
    font-size: calc(20px + 5vw);
    line-height: calc(30px + 9vw);
    margin: calc(5px + 1vw);
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