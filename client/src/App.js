import styled from "styled-components";
import bg from "./img/bg.png";
import { MainLayout } from "./styles/Layouts"; //main layout style
import Orb from "./components/Orb/Orb"; //design to float in the background
import Navigation from "./components/Navigation/Navigation";
import { useMemo, useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import Income from "./components/Income/Income";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  const [active, setActive] = useState(1); //state for active status of menu items
  // wer are using useMemo here because i want to save the effect to the memory, so that the effect wont reload every time the page reloads
  const orbMemo = useMemo(() => {
    return <Orb />;
  }, []);

  // function for displaying data
  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />;
      case 2:
        return <Dashboard />;
      case 3:
        return <Income />;
      case 4:
        return <Expenses />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <AppStyled bg={bg}>
      {orbMemo} {/* orb is a background effect */}
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
        {/* navigation component */}

        {/* main content will be displayed here start */}
        <main>{displayData()}</main>
        {/* main content will be displayed here end */}
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  /* receiving background images as props */
  background-image: url(${(props) => props.bg});
  position: relative;
  main {
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #ffffff;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow: auto;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;
export default App;
