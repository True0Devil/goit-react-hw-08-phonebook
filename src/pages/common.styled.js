import styled from 'styled-components';

export const Title = styled.h2`
  margin-bottom: 60px;
`;

export const Container = styled.div`
  text-align: center;
  text-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
    0px 2px 2px rgba(0, 0, 0, 0.12);
  width: 50%;
  margin: 0 auto;

  font-size: 20px;
  color: white;
`;

export const Form = styled.form`
  padding: 10px 15px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 20px;

  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 600;
`;

export const Input = styled.input`
  display: block;
  width: calc(100% - 50px);
  border-radius: 8px;
  border-color: #e5e5e5;

  margin-top: 10px;

  padding: 8px;
  font-size: 18px;
`;

export const Button = styled.button`
  display: block;

  font-size: 18px;

  margin: 30px auto 0;
  padding: 15px 45px;

  outline: none;
  border: 2px solid #188ce8;
  border-radius: 4px;
  background-color: #2196f3;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #188ce8;
  }
`;
