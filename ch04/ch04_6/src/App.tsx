import ResponsiveContextTest from './pages/ResponsiveContextTest'
import {ResponsiveProvider} from "./contexts";

function App(){
    return (
        <ResponsiveProvider>
            <main>
                <ResponsiveContextTest/>
            </main>
        </ResponsiveProvider>
    )
}
export default App;
