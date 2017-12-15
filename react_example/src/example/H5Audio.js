
import React, {Component} from 'react'
// import AudioPlayer from 'react-h5-audio-player'
import Loading from 'react-loading'
// import ReactAudioPlayer from 'react-audio-player';

export default class H5Audio extends Component {
    render() {
        return (
            <div>
                <Loading type='bars' color='red' />
                <ReactAudioPlayer
                    src='./Beyond.mp3'
                    autoPlay
                    controls
                />
            </div>
        )
    }
}
