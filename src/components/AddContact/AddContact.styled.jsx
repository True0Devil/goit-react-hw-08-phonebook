import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  min-width: 1000px;
  padding: 10px;
  border: 2px solid black;
  border-radius: 12px;
`;

export const Label = styled.label`
  margin-bottom: 20px;

  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 600;
`;
export const Input = styled.input`
  display: block;
  margin-top: 10px;
  width: calc(100% - 50px);

  padding: 8px;
  font-size: 18px;
`;

export const Button = styled.button`
  max-width: 150px;
  padding: 10px;

  background-color: transparent;
  border: 2px solid #2196f3;
  border-radius: 4px;
  cursor: pointer;

  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 18px;
  font-weight: 600;

  :hover {
    background-color: #2196f3;
  }
`;
