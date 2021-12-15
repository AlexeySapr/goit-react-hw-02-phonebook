import styled from '@emotion/styled';

export const FormContacts = styled.form`
  border: 2px solid #57d0e6;
  padding: 30px;
  width: 500px;
`;

export const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

export const FormInput = styled.input`
  width: 300px;
  margin-top: 5px;

  padding: 0.375rem 0.75rem;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #bdbdbd;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:focus {
    color: #212529;
    background-color: #fff;
    border-color: #57d0e6;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(87, 208, 230, 0.5);
  }
`;

export const FormButton = styled.button`
  background-color: transparent;
  padding: 5px 10px;
  border-radius: 5px;
  width: 120px;
  font-size: 1rem;
  transition: background-color 300ms ease-in-out, color 300ms ease-in-out;

  &:hover,
  &:focus {
    color: #fff;
    outline: 0;
    cursor: pointer;
    background-color: #57d0e6;
  }
`;
