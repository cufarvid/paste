import styled from 'styled-components';

export const AutoCompleteWrapper = styled.div`
  position: relative;
`;

export const AutoCompleteLabel = styled.label`
  visibility: hidden;
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
`;

export const AutoCompleteInput = styled.input`
  background-color: ${({ theme }) => theme.surface};
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.surface};
  outline: none;
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  transition: 200ms linear;

  &:hover,
  &:focus {
    border-color: ${({ theme }) => theme.overlay};
  }
`;

export const AutoCompleteDropdown = styled.ul`
  background-color: ${({ theme }) => theme.surface};
  color: ${({ theme }) => theme.text};
  padding: 0;
  list-style-type: none;
  min-width: 100%;
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 0;
  margin: 0;
  border-radius: 1rem;
  max-height: 20rem;
  overflow-y: auto;
  z-index: 10;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.overlay};
    border: 4px solid ${({ theme }) => theme.surface};
    border-radius: 6px;
    cursor: pointer;
  }

  &::-webkit-scrollbar-thumb:hover {
  }
`;

export const AutoCompleteItem = styled.li<{
  isSelected: boolean;
  isActive: boolean;
}>`
  padding: 0 24px;
  width: 100%;
  box-sizing: border-box;
  font-weight: ${({ isSelected }) => (isSelected ? 'bold' : 'normal')};
  background-color: ${({ theme, isSelected, isActive }) =>
    isSelected || isActive ? theme.overlay : theme.surface};

  &:first-of-type {
    margin-top: 0.5rem;
  }

  &:last-of-type {
    margin-bottom: 0.5rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.overlay};
  }
`;

export const AutoCompleteItemButton = styled.button`
  background: none;
  color: ${({ theme }) => theme.text};
  border: none;
  padding: 0;
  width: 100%;
  line-height: 32px;
  text-align: left;
  cursor: pointer;
  &:active {
    outline: none;
    color: ${({ theme }) => theme.overlay};
  }
`;
