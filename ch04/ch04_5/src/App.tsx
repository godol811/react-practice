import ClickTest from './pages/ClickTest'
import FileDrop from './pages/FileDrop'
import InputValueTest from './pages/InputValueTest'
import InputFocusTest from './pages/InputFocusTest'
import ForwardRefTest from './pages/ForwardRefTest'
import ValidatableInputTest from './pages/ValidatableInputTest'

function App(){
    return (
        <main>
            <ValidatableInputTest/>
            <ForwardRefTest/>
            <InputValueTest/>
            <InputFocusTest/>
            <FileDrop />
            <ClickTest />
        </main>
    )
}
export default App;
