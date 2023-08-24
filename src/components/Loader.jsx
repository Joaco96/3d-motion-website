import React from 'react';
import AnimatedLogo from "../assets/images/2eRo.gif";

function Loader() {
    return ( 
        <div className='loader'>
            <img src={AnimatedLogo} alt="apple loader" className='logo'/>
        </div>
     );
}

export default Loader;