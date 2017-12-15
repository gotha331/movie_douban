import React, {Component} from 'react'
import {browserHistory} from 'react-router'
import service from '../services/movieService.js'

export default class MovieSearchContainer extends Component {

    //获取从react-router中传递过来的router属性
    // static contextTypes ={
    //     router:React.PropTypes.object
    // }

    componentDidMount() {

        service.getMovieListData()
        // const _this = this
        // setTimeout(function () {
        //     // browserHistory.push('/home')
        //
        //     _this.context.router.push('/home')
        //     // console.log(_this.context.router);
        // },3000)
    }



    constructor(props) {
        super(props)
    }
    render() {
        console.log(this.props.params.name)
        return (
            <div>
                MovieSearchContainer页面
            </div>
        )
    }
}