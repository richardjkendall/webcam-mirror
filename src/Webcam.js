import React, { Component } from 'react';

import './Webcam.css'

class Webcam extends Component {
    constructor(props) {
        super(props);
        this._v = 0;
    }

    componentDidMount() {
        if (navigator.mediaDevices.getUserMedia) {
            var _this = this;
            navigator.mediaDevices.getUserMedia({ video: true })
                .then(function (stream) {
                    _this._v.srcObject = stream;
                })
                .then(function () {
                    _this._v.addEventListener("play", () => {
                        console.log("now playing");
                        //_this.runDetectLoop();
                    })
                })
                .catch(function (err) {
                    console.error(err);
                    console.log("Something went wrong!");
                });
        }
    }

    render() {
        return (
            <div>
                <video className="VideoBox" ref={(e) => { this._v = e }} autoPlay={true}></video>
            </div>
        )
    }
}

export default Webcam;