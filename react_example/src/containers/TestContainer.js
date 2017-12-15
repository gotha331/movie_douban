// App容器组件
import React, {Component} from 'react'
import { Link,browserHistory} from 'react-router'

export default class AppContainer extends Component {
    constructor(props) {
        super(props);
    }

    // 组件内跳转
    static contextTypes = {
        router: React.PropTypes.object
    };

    componentDidMount(){
        const _this=this
        setTimeout(function () {
            // context的方法只能在组件内使用
            _this.context.router.push('/home')
            // history跳转可以在任何地方使用
            // browserHistory.push('/home')
        },3000)
    }
    render() {
        return (
            <div>
                这是testContainer
            </div>
        )
    }
}
