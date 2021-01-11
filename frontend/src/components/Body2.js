import React from 'react';

// import { Link } from 'react-router-dom';

import styles from './Body.scss';

const Body2 = ({ text, product, idsum, img })=>{ 
    return(
<div>
    <section class="alling" id="1"> 

            <a class="coffee" href="coffee.html">
                <img src={img} alt="" />
                    <span>{product}</span>
                    <p>{text}</p>
               
            </a>
             
            
        
    </section>
</div>
    );
};
export default Body2;