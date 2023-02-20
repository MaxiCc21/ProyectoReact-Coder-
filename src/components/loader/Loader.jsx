import "./Loader.css"
import React, { useState, useEffect } from 'react';


const Loader = () => {
    return ( <div className="lds-ring"><div></div><div></div><div></div><div></div></div> );
}
 
export default Loader;