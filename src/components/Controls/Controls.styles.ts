import styled, { css } from 'styled-components';
import { Plus, Save } from 'lucide-react';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  padding: 2rem;
  background: ${({ theme }) => theme.background};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 1rem;
`;

export const Button = styled.button`
  display: flex;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.surface};
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: 200ms linear;

  &:hover {
    background-color: ${({ theme }) => theme.overlay};
  }
`;

// Icon styles
export const StyledIcon = css`
  width: 1rem;
  height: 1rem;
  color: ${({ theme }) => theme.text};
`;

// Icons
export const PlusIcon = styled(Plus)`
  ${StyledIcon}
`;
export const SaveIcon = styled(Save)`
  ${StyledIcon}
`;
