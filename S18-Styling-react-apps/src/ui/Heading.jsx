import styled, { css } from "styled-components";

const Heading = styled.h1`
  color: var(--color-secondary-700);
  line-height: 1.5;

  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 700;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}

    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 1.5rem;
      font-weight: 500;
    `}

    ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 1rem;
      font-weight: 400;
    `}
`;

export default Heading;
