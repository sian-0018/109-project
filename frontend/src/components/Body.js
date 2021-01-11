import React from 'react';
// import { Link } from 'react-router-dom';
import Directory_33 from './Directory_33';
import styles from './Body.scss';

const Body = ({ text, product, idsum, img })=>{ 
    return(
<div>
<section className="landing">
        <div className="land">
            <div className="content">
                <div className="detail">
                    <span >Welcome to F.Y.S. store</span>
                    <br/>
                    <br/>
                    <br/>
                    <p>I’m a website & graphic designer. 
                        <br/>Welcome to my wonderland!</p>
                        <br/>
                    <a href="#1">Product catalogue</a>
                </div>
                
        </div>
        </div>
            <div className="picture" >
                <img src="/img/Frame4.png" alt="" />
                <div className="phto-bg">
                </div>
            </div>     
      </section>

    <section className="alling" id="1"> 
        <div className="all">
        <h1>
            Overview
        </h1>
        </div>
        <div>
        <div className="a">
            <Directory_33 />
            </div>
             
            
        </div>
    </section>
</div>
    );
};
export default Body;