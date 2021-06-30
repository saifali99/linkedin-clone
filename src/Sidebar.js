import React from 'react'
import "./Sidebar.css"
import { Avatar } from '@material-ui/core'

function Sidebar() {

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlXWR8MXx8fGVufDB8fHw%3D&w=1000&q=80" alt="" />
                <Avatar className="sidebar__avatar" />
                <h2>Saif Ali Badruddin</h2>
                <h4>saifaly.jariya@gmail.com</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">2,502</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">2,488</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('nodejs')}
                {recentItem('react-native')}
                {recentItem('coding')}
            </div>
        </div>
    )
}

export default Sidebar
