import styled from '@emotion/styled';

export const List = styled.ul`
  padding: 0;
  width: 380px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #57d0e6;
`;

export const Text = styled.p`
  font-size: 1.1rem;
`;

export const ItemBtn = styled.button`
  background-color: transparent;
  padding: 5px 10px;
  border-radius: 5px;
  width: 75px;
  font-size: 0.8rem;
  transition: background-color 300ms ease-in-out, color 300ms ease-in-out;

  &:hover,
  &:focus {
    color: #fff;
    outline: 0;
    cursor: pointer;
    background-color: #57d0e6;
  }
`;
