import React from 'react'
import linkedin_logo from '../app-logo/linkedIn-logo.png'
import SearchIcon from '@material-ui/icons/Search';
import { headerNavaData } from '../data/app-data';
import HeaderTabs from './HeaderTab'

const HeaderNav = () => {
    return (
        <section className='headerNav__container'>
            <nav>
                <div className='headerNav__left'>
                    <img src={linkedin_logo} alt='linkedIn' style={{height: "35px"}}/>
                    <div className='headerNav__search'>
                        <SearchIcon className='searchIcon'/>
                        <input type='text' placeholder='Search'/>
                    </div>
                </div>

                <div className='headerNav__right'>
                    {
                        headerNavaData.map(headerNavTab => {
                            return (
                               <HeaderTabs {...headerNavTab} />
                            )
                        })
                    }
                </div>
            </nav>
        </section>
    )
}

export default HeaderNav
