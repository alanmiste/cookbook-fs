import React from 'react'
import Header from '../components/Header/header'
import './mainLayout.css'


export default function MainLayout(props) {
    return <div className='mainLayout'>
        <Header />
        <div className='mlBody'>
            <div className='leftBar'>
                Left Bar
            </div>
            <div className='children'>
                {
                    props.children
                }
            </div>
        </div>
    </div>
}