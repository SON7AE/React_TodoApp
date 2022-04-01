import styled from 'styled-components';
import '../font/gmarketSansL.css';

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
  border-radius: 20px 20px 0 0;
  border-bottom: 5px solid whitesmoke;
  display: flex;
  align-items: center;
  padding: 25px 30px 0;

  .icon {
    margin-right: 15px;
    font-size: 25px;
    cursor: pointer;
  }
  p {
    display: block;
    width: 50%;
    font-family: 'SBAggroM';
    font-size: 25px;
  }
`;

export const Nav = styled.nav`
  width: 100%;
  height: calc(10% - 5px);
  border-bottom: 5px solid whitesmoke;
`;

export const Main = styled.main`
  width: 100%;
  height: calc(65% - 40px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;

  div {
    width: 95%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 10px;
    padding-left: 12.5px;

    p {
      display: block;
      margin-left: 12.5px;
      margin-bottom: 10px;
      font-family: 'GmarketSansMedium';
    }

    .textField {
      font-size: 15px;

      label {
        margin-left: 15px;
      }
    }
  }
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
    width: 47.5%;
    justify-content: space-evenly;

    .icon {
      margin-left: 15px;
    }
  }
`;
