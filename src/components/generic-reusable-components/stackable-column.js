import styled from '@emotion/styled';

const StackableColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px 30px;
  height: 100%;
  width: 33%;

  @media only screen and (max-width: 960px) {
    justify-content: flex-start;
    width: 100%;
  }

  h1 {
    font-family: 'e2-Raleway-Bold';
    font-size: 40px;
    max-width: 95vw;
    line-height: 80px;
    text-align: center;
    -webkit-letter-spacing: 4px;
    -moz-letter-spacing: 4px;
    -ms-letter-spacing: 4px;
    letter-spacing: 1.5px;
    /* margin: 20px auto; */
    min-height: 110px;
    justify-content: center;
    text-align: center;
    display: flex;
    flex-direction: column;
  }

  p {
    margin-bottom: 10px;
    line-height: 35px;
    text-align: justify;
    font-size: 20px;
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
    /* margin: 20px; */
    padding-top: 20px;

  }

  li {
    font-size: 30px;

  }


`;

export default StackableColumn;
