import UseOrCreateTest from './pages/UseOrCreateTest'
import Memo from './pages/Memo'
import CallBack from './pages/Callback'
import HighOrderCallBack from './pages/HighOrderCallback'


function App(){
    return (
        <div>
            <HighOrderCallBack/>
            <CallBack />
            <Memo />
            <UseOrCreateTest/>
        </div>
    )
}
export default App;
