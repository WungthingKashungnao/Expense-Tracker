import styled from "styled-components";
import bg from "./img/bg.png";
import { MainLayout } from "./styles/Layouts"; //main layout style
import Orb from "./components/Orb/Orb"; //design to float in the background

function App() {
  return (
    <AppStyled bg={bg}>
      <Orb>
        <MainLayout>
          <h1>Hello</h1>
        </MainLayout>
      </Orb>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  /* receiving background images as props */
  background-image: url(${(props) => props.bg});
  position: relative;
`;
export default App;
