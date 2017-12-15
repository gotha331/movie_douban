import React, {Component} from 'react'
import Loading from 'react-loading';

const style={
    backgroundColor:'rgba(0,0,0,0.5)',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
}


export default class LoadingComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div style={style}>
                <Loading type='bars' color='darkmagenta'/>
            </div>
        )
    }
}


