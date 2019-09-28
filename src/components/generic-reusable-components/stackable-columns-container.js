import styled from '@emotion/styled';

const StackableColumnsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 0 20px 80px;

  @media only screen and (max-width: 900px) {
    font-size: 18px;
    line-height: 31px;
    flex-direction: column;
  }

  p {
    font-size: 20px;
    line-height: 34px;

    @media only screen and (max-width: 900px) {
      font-size: 19px;
      line-height: 32px;
    }
  }
`;

export default StackableColumnsContainer;
