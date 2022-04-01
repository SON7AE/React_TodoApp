import styled from 'styled-components';
import '../font/boardFont.css';

export const Container = styled.div`
  margin: auto;
  width: 375px;
  height: 700px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 5px 5px 5px grey;
`;

export const Header = styled.header`
  width: calc(100% - 60px);
  height: calc(12.5% - 25px);
  /* background-color: whitesmoke; */
  border-radius: 20px 20px 0 0;
  border-bottom: 5px solid whitesmoke;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 25px 30px 0;

  p {
    display: block;
    width: 50%;
    font-family: 'SBAggroM';
    font-size: 25px;
  }
  .iconBox {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .icon {
      font-size: 21px;
      margin-left: 24px;
      color: black;
      margin-bottom: 5px;
      cursor: pointer;
    }
  }
`;

export const Nav = styled.nav`
  width: 100%;
  height: 7.5%;
  border-bottom: 5px solid whitesmoke;
`;

export const Footer = styled.footer`
  width: 100%;
  height: 12.5%;
  border-radius: 0 0 20px 20px;
  background-color: whitesmoke;
  display: flex;
  align-items: center;
  justify-content: center;

  Button {
    width: 40%;
    justify-content: space-evenly;

    .icon {
      margin-left: 10px;
    }
  }
`;
