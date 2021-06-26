import React, { useState } from 'react';
import Signin from './components/Signin/Signin';
import StudentHome from './components/StudentHome/StudentHome';



const App = () => {
    const [route, setRoute] = useState("Home");
    const handleRoute = (route) => setRoute(route)
    return (
        <div className='App'>
            {
                route === 'Signin' ?
                    <Signin changeRoute={handleRoute} /> :
                    <StudentHome changeRoute={handleRoute}/>
            }
        </div>
    )
}

export default App;