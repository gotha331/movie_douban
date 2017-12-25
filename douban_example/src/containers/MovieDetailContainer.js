/*
* 电影详细页面
*
* */
import React, {Component} from 'react'
import '../styles/movieDetail.css'
import service from '../services/movieService.js'
import {Spin} from 'antd'

export default class MovieDetailContainer extends Component {
    constructor(props) {
        super(props)
        //note：改变state才会触发页面的重新渲染
        this.state = {
            //控制是否要显示遮罩层
            isShowLoading: true,
            //要渲染的电影列表数据
            //循环渲染子组件
            movieDetailData: {}
        }
    }

    componentDidMount() {
        this.fetch(this.props.params.id)
    }

    //请求数据的方法
    fetch = (id) => {
        const _this = this
        const promise = service.getMovieDetailData(id)
        promise.then(
            function (data) {
                console.log(data)
                //只有state状态改变时，页面才会重新渲染
                _this.setState({
                    isShowLoading: false,
                    movieDetailData: data,
                })
            },
            function (err) {
                console.log(err)
            }
        ).catch(function (err) {
            console.log(err)
        })
    }

    //渲染遮罩方法
    showLoading = () => {
        return (
            <div className="spin">
                <Spin size="large" tip="Loading...">
                </Spin>
            </div>
        )
    }


    //渲染电影详细方法
    renderMovieDetail = () => {
        return (
            <div className='movieDetail_container'>
                <span>
                    <img src={this.state.movieDetailData.images.large} alt=""/>
                </span>
                <div>
                    <h1>{this.state.movieDetailData.title}</h1>
                    <p>{this.state.movieDetailData.summary}</p>
                </div>
            </div>
        )
    }

    render() {
        if (this.state.isShowLoading) {
            return this.showLoading()
        } else {
            return this.renderMovieDetail()
        }
    }
}