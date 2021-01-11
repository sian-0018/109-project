import React from 'react';

import { Link } from 'react-router-dom';

import styles from './Header.scss';

const Header = ()=>( 
       <nav>
           <div className="navbar bg-dark" >
<h1>
    <a href="#">F.Y.S.</a>
</h1>
<ul>
    <li><a href="index.html">home</a></li>
    <li><a href="cake.html">cake</a></li>
    <li><a href="coffee.html">coffee</a></li>
    <li><a href="dessert.html">dessert</a></li>
</ul>
</div>
</nav>
        

);
export default Header;