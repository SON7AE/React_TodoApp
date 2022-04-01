import styled from 'styled-components';
import '../font/bareun.css';

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
`;
