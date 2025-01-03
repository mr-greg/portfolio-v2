const { default: styled } = require("styled-components");

const StyledToolbox = styled.section`
  background-color: #E85E5E;
  padding: 50px 15%;
  h2 {
    text-align: center;
    color: white;
    margin-bottom: 40px;
    font-size: 2rem;
  }
`;

export const StyledSection = styled.div`
  background-color: #00000010;
  border-radius: 15px;
  padding: 25px 20px 30px;
  margin-bottom: 30px;

  h3 {
    color: white;
    margin-bottom: 20px;
    text-align: center;
  }

  .tool-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
  }
`;

export const StyledButton = styled.div`
  background-color: #E85E5E;
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  text-align: center;
  white-space: nowrap;
  /* cursor: pointer; */
  margin-bottom: 5px;

  .icon {
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    background-color: #00000010;
    transition: ease-in-out 0.2s;
  }
`;

export default StyledToolbox;
