import styled from 'styled-components';

export const AutoCompleteWrapper = styled.div`
  position: relative;
`;

export const AutoCompleteInput = styled.input`
  background-color: white;
  border: 1px solid #dddddd;
  outline: none;
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  transition: 200ms linear;

  &:hover,
  &:focus {
    border-color: #bbbbbb;
  }
`;

export const AutoCompleteDropdownContainer = styled.ul`
  background-color: white;
  padding: 0.5rem 0;
  list-style-type: none;
  min-width: 100%;
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 0;
  margin: 0;
  border: 1px solid #bbbbbb;
  border-radius: 1rem;
  max-height: 20rem;
  overflow-y: auto;
  z-index: 1;
`;

export const AutoCompleteItem = styled.li`
  padding: 0 24px;
  width: 100%;
  box-sizing: border-box;
  &:hover {
    background-color: #eeeeee;
  }
`;

export const AutoCompleteItemButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  width: 100%;
  line-height: 32px;
  text-align: left;
  &:active {
    outline: none;
    color: #0076f5;
  }
`;
