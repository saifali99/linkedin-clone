import React from 'react'
import "./Widgets.css"
import {
    Info as InfoIcon,
    FiberManualRecord as FiberManualRecordIcon
} from '@material-ui/icons'

function Widgets() {

    const newArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>

            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>

            {newArticle("React Programming", "Top News - 9,924 readers")}
            {newArticle("Corona Virus", "Top News - 10,243 readers")}
            {newArticle("Crypto Currency", "Top News - 7,324 readers")}
        </div>
    )
}

export default Widgets
