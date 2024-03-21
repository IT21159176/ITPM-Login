import React from 'react';
import Ge_Header from './Ge_Component/Ge_Header';
import Ge_post from './Ge_post';

export default function Ge_Home() {
    return (
        <>
        <Ge_Header />
        
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
        </div>
        </>
    );
}


