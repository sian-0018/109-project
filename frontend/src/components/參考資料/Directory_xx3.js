import React, { useState, useEffect } from 'react';
import Body3 from './Body3'
import axios from 'axios';
import styles from './Directory_33.module.scss'

const Directory3_33 = () =>{       
    const [menuItems, setMenuItem] = useState([]);
    useEffect(() => {
        const fetchMenuItem = async () =>{
            const {data}=await axios.get('/');
            setMenuItem(data);
        };
        fetchMenuItem(); 
    }, []);
    console.log('menuItems data', menuItems);
        return (
          <div className={styles.directory_menu}>
          {
              menuItems.map(({ title, imageUrl, id, size }) => (
                  <Body3 key={id} title={title} imageUrl={imageUrl} size={size} />
              ))
          }
      </div>
        );
    };
export default Directory3_33;