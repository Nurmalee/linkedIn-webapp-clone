import React from 'react';
import './WidgetRight.css';
import Avatar from '@material-ui/core/Avatar';
import js_logo from '../app-logo/javascript-logo.png';
import react_logo from '../app-logo/react-logo.png';
import sass_logo from '../app-logo/sass-logo.png';
import linked_ads from '../app-logo/linkedIn__jobs-ads.jpg';

const WidgetRight = () => {

    const followSuggestions = (Icon, name, companyType, logo_src) => {
        return (
        <div className='followSuggestions'>
            <Icon className='followSuggestions__icon' src={logo_src} />
            <div className='followSuggestions__company'>
                <h2>{name}</h2>
                <p>Company . {companyType}</p>
            </div>
            <button className='followSuggestions__button'>+ Follow</button>
        </div>
        )
    }

    return (
        <section className='widget'>
             <div className='widget__items'>
                <h3>Add to your feed</h3>
                {followSuggestions(Avatar, 'javascript', 'programming language', js_logo)}
                {followSuggestions(Avatar, 'react', 'programming language', react_logo)}
                {followSuggestions(Avatar, 'sass', 'programming language', sass_logo)}
                <button> View all recommendations </button>
            </div>
            <div className='widget__adverts'>
                <img src={linked_ads} alt='linkedIn-ads'/>
            </div>
            
        </section>
    )
}

export default WidgetRight
