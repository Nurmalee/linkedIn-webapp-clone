import React from 'react'
import './Dashboard.css'
import Sidebar from './Sidebar';
import Feed from './Feed';
import WidgetRight from './WidgetRight';

const Dashboard = () => {
    return (
        <div className="app__content">
            <Sidebar />
            <Feed />
            <WidgetRight />
        </div>
    )
}

export default Dashboard
