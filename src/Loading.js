import React from 'react';

import './Loading.scss';
import BarSVG from './assets/bars.svg';
import PuffSVG from './assets/puff.svg';

const Loading = (props) => {
    return (
        <div className="loading-container">
            <img src={props.icon === "puff" ? PuffSVG:BarSVG } width={75} height={50} />
        </div>
    )
}

export default Loading;