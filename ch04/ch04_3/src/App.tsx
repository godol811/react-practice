import NumberState from './pages/NumberState'
import InputTest from './pages/InputTest'
import ShowHideModal from './pages/ShowHideModal'
import RadioInputTest from './pages/RadioInputTest'
import BasicForm from './pages/BasicForm'
import ObjectState from './pages/ObjectState'
import ArrayState from './pages/ArrayState'
import HigherOrderRadioInputTest from "./pages/HigherOrderRadioInputTest";

function App(){
    return (
        <main>
            <ArrayState/>
            <ObjectState />
            <BasicForm />
            <HigherOrderRadioInputTest/>
            <RadioInputTest/>
            <ShowHideModal/>
            <InputTest/>
            <NumberState/>
        </main>
    )
}
export default App;
