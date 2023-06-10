import { styled } from 'styled-components';
import { SearchIcon } from './IconsComponets';
import { InputHTMLAttributes } from 'react';

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--bg-secondary);
  line-height: 0;
  padding: 10px 16px;
  border-radius: 8px;
  width: 352px;
  height: 42px;

  input {
    font-family: 'Saira', Roboto, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: var(--dark-color);
    border: none;
    width: 100%;
    height: 100%;
    outline: none;
    background-color: transparent;
  }
`;

const SearchButton = styled.button`
  line-height: 0;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`;

type InputAttributes = InputHTMLAttributes<HTMLInputElement>

export function InputWithSearchIcon(props: InputAttributes) {
  return (
    <InputContainer>
      <input { ...props } />
      <SearchButton>
        <SearchIcon />
      </SearchButton>
    </InputContainer>
  );
}
