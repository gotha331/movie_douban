// App容器组件
import React, {Component} from 'react'
import { Link } from 'react-router'

import '../styles/root.css'
import '../styles/app.css'

export default class AppContainer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="app_container">
                <div className="app_header">
                    <Link to="/home">首页</Link>
                    <Link to="/list">列表</Link>
                    <Link to="/call">联系我们</Link>
                </div>
                <div className="app_content">
                    {this.props.children}
                </div>
                <div className="app_footer">
                    版权所有@Jupiter
                </div>
            </div>
        )
    }
}
