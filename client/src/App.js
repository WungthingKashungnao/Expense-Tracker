import styled from "styled-components";
import bg from "./img/bg.png";
import { MainLayout } from "./styles/Layouts"; //main layout style
// import Orb from "./components/Orb/Orb"; //design to float in the background
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <AppStyled bg={bg}>
      {/* <Orb> */}
      <MainLayout>
        <Navigation /> {/* navigation component */}
      </MainLayout>
      {/* </Orb> */}
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
