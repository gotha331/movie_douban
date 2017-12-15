
import './Hello.css'
import './Hello.scss'

import React, {Component} from 'react'

export default class Hello extends Component {
    constructor(props,context) {
        super(props,context)
        // 1、props属性是从外部传递进来的属性都在这里面通过this.prop获取
        ///2、state属性功能类似于angular中的$scope对象
        this.state = {
           age:999
        }
    }


    render() {
        // 不能直接给state赋值，必须用this.setState方法去改变state的状态值
        // this.state.age=3434
        console.log(this.props)
        return (
            <div>
                {/*{//dfdfdfdfd}*/}
                <h1>{this.state.age}</h1>
                <br/>
                <img/>
            </div>
        )
    }
}
