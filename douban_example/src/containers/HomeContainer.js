// 首页容器组件
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import ReactSwipe from 'react-swipe'
import '../styles/home.css'

export default class HomeContainer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='home_container'>
                home页面
            <ReactSwipe className="carousel" swipeOptions={{continuous: false}}>
                <div>PANE 1</div>
                <div>PANE 2</div>
                <div>PANE 3</div>
            </ReactSwipe>
            </div>
        )
    }
}

// ReactDOM.render(
//     <Carousel />,
//     document.getElementById('app')
// )
