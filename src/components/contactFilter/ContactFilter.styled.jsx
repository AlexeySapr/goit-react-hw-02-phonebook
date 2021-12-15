import styled from '@emotion/styled';

export const InputLabel = styled.label`
  font-size: 1.1rem;
  font-weight: 500;
`;

export const FormInput = styled.input`
  margin-left: 20px;

  padding: 0.2rem 0.4rem;
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
