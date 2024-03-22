import React from 'react';
import Ge_Header from './Ge_Component/Ge_Header';
import Ge_post from './Ge_post';
import LabelBottomNavigation from '../../Components/bottom' ;
import Ge_DarkMode from '../General/Ge_Component/Ge_DarkMode';




export default function Ge_Home() {
    return (
        <>
        <Ge_Header />
        <LabelBottomNavigation />
        <Ge_DarkMode/>
       
        
        <div style={{ display: 'flex', alignItems: 'flex-start', marginTop:'50px', marginLeft:'50px' }}>
            <div style={{ marginRight: '20px' }}>
                <Ge_post />
            </div>
            <div style={{ marginRight: '20px' }}>
                <Ge_post />
            </div>
            <div>
                <Ge_post />
            </div>
            <div>
            
            </div>
        </div>
        </>
    );
}


