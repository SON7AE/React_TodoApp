import styled from 'styled-components';
import '../font/bareun.css';
import '../font/cafe24.css';

export const Container = styled.div`
  width: 100%;
  height: 65%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-size: 1.5rem;
    font-family: 'ROKAFSansBold';
    color: gray;
    opacity: 50%;
    margin-bottom: 15px;
  }

  .icon {
    font-size: 10rem;
    color: gray;
    opacity: 20%;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: wheat;
    overflow: scroll;

    li {
      display: flex;
      align-items: center;
      width: 95%;
      height: 12.5%;
      background-color: white;
      box-shadow: 2px 2px 2px gray;
      border-radius: 5px;
      margin-top: 10px;

      div {
        width: calc(75% - 30px);
        height: 100%;
        background-color: whitesmoke;
        display: flex;
        align-items: center;
        padding: 2px 0px 0px 15px;
        font-family: 'Cafe24SsurroundAir';
      }
    }
  }
`;
