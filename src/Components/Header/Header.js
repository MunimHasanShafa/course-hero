import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
const Header = (props) => {
    
    return (
        <div className="container header">
           <a href="/class"><img src={props.image} alt=""/>
           <strong><h1>Course-Hero</h1></strong></a>
        </div>
    );
};

export default Header;