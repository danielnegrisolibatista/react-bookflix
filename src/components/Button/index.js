import styled from 'styled-components';

const Button = styled.button`
  color: var(--light);
  border: 1px solid var(--primary);
  background: var(--primary);
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 24px;
  margin: 1rem 0;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition: opacity .3s;

  &:hover,
  &:focus {
    opacity: .5;
  }
`;

export default Button;
