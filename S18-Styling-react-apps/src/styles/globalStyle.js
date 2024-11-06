import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  &,
  &.light-mode {
    --color-secondary-900: rgb(17, 24, 39);
    --color-secondary-800: rgb(31, 41, 55);
    --color-secondary-700: rgb(55, 65, 81);
    --color-secondary-600: rgb(75, 85, 99);
    --color-secondary-500: rgb(107, 114, 128);
    --color-secondary-400: rgb(156, 163, 175);
    --color-secondary-300: rgb(209, 213, 219);
    --color-secondary-200: rgb(229, 231, 235);
    --color-secondary-100: rgb(243, 244, 246);
    --color-secondary-50: rgb(249, 250, 251);
    --color-secondary-0: rgb(255, 255, 255);

    --backdrop-color: rgba(255, 255, 255, 0.1);

    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
    --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);
  }
  &.dark-mode {
    --color-secondary-900: rgb(249, 250, 251);
    --color-secondary-800: rgb(243, 244, 246);
    --color-secondary-700: rgb(229, 231, 235);
    --color-secondary-600: rgb(209, 213, 219);
    --color-secondary-500: rgb(156, 163, 175);
    --color-secondary-400: rgb(107, 114, 128);
    --color-secondary-300: rgb(75, 85, 99);
    --color-secondary-200: rgb(55, 65, 81);
    --color-secondary-100: rgb(31, 41, 55);
    --color-secondary-50: rgb(17, 24, 39);
    --color-secondary-0: rgb(24, 33, 47);
    --backdrop-color: rgb(0, 0, 0);

    --backdrop-color: rgba(0, 0, 0, 0.3);

    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
    --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
    --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);
  }
  --color-primary-900: rgb(77, 112, 255);
  --color-primary-800: rgb(92, 124, 255);
  --color-primary-700: rgb(92, 124, 255);
  --color-primary-600: rgb(128, 153, 255);
  --color-primary-500: rgb(146, 167, 255);
  --color-primary-400: rgb(164, 182, 255);
  --color-primary-300: rgb(183, 197, 255);
  --color-primary-200: rgb(201, 211, 255);
  --color-primary-100: rgb(219, 226, 255);
  --color-primary-50: rgb(228, 233, 255);

  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;

  --color-success: rgb(0, 192, 115);
  --color-warning: rgb(255, 153, 0);
  --color-error: rgb(255, 71, 87);
  --color-red-700: rgb(185, 28, 28);
  --color-red-800: rgb(153, 27, 27);
  --color-red-500: rgb(239, 68, 68);
  --color-red-300: rgb(252, 165, 165);
  --color-red-100:rgb(254, 226, 226);
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Poppins", sans-serif;
  color: var(--color-secondary-700);
  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-secondary-200);
  color: var(--color-secondary-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-600);
  outline-offset: -1px;
}

button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}


`;

export default GlobalStyle;
