import AlignTest from "./pages/AlignTest";
import DirectionTest from "./pages/DirectionTest"
import JustifyCenterTest from "./pages/JustifyCenterTest"
import MinMaxTest from "./pages/MinMaxTest"
import WrapTest from "./pages/WrapTest"
import UserContainer from "./pages/UserContainer"
import CardContainer from "./pages/CardContainer"

function App() {
  return (
    <main>
      <CardContainer />
      <UserContainer />
      <AlignTest />
      <JustifyCenterTest />
      <MinMaxTest />
      <WrapTest />
      <DirectionTest />
    </main>
  );
}

export default App;
