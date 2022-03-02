import './App.css';
import Main from './Main/Main';
import Sidebar from './layout/Sidebar/Sidebar';
import { useState } from 'react';

function App() {
    const [showSidebar, setShowSidebar] = useState(false);
    // const getsession = () => sessionStorage.getItem('showSidebar');

    return (
        <div className='App'>
            <Sidebar showSidebar={showSidebar} />
            <Main showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        </div>
    );
}

export default App;
