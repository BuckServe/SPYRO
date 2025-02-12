import React from 'react'
import Moves from '../Moves/Moves'
import LifeStyle from '../LifeStyle/LifeStyle'
import Classess from '../Classess/Classess'
import Instructors from '../Instructors/Instructors'
import DownloadPart from '../DownloadPart/DownloadPart'
import VideoPart from '../Videopart/VideoPart'
import Feedback from '../FeedBack/Feedback'
import FAQS from './FAQS'

const HomeComponent = () => {
    return (
        <React.Fragment>
            <Moves />
            <LifeStyle />
            <Classess />
            <Instructors />
            <DownloadPart />
            <VideoPart />
            <Feedback />
            <FAQS />
        </React.Fragment>
    )
}

export default HomeComponent