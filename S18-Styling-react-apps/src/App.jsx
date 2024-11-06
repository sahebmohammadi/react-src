import GlobalStyle from "./styles/globalStyle";
import Button, { SumbitButton } from "./ui/Button";
import ButtonIcon from "./ui/ButtonIcon";
import Heading from "./ui/Heading";
import { HiSun } from "react-icons/hi2";
function App() {
  return (
    <div>
      <GlobalStyle />
      <Heading as="h1">This is Title</Heading>
      <Heading as="h2">This is Descritption</Heading>
      <Heading as="h3">This is H3</Heading>
      <Heading as="h4">This is H4</Heading>
      <Button>Primary</Button>
      <Button variant="secondary" size="small">
        Secondary
      </Button>
      <Button variant="danger" size="medium">
        Danger
      </Button>

      <SumbitButton>Submit</SumbitButton>

      <ButtonIcon>
        <HiSun />
      </ButtonIcon>
    </div>
  );
}

export default App;
