import styled from "styled-components";

const ButtonIcon = styled.button`
  background: none;
  border: none;
  padding: 0.6rem;
  border-radius: var(--border-radius-lg);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-secondary-100);
  }
  & svg {
    width: 2rem;
    height: 2rem;
    color: var(--color-primary-900);
  }
`;

export default ButtonIcon;
