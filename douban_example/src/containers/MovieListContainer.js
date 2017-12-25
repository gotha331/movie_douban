/*
* 电影列表页面
*
* */
import React, {Component} from 'react'
import '../styles/movieList.css'
import service from '../services/movieService.js'
import {Spin} from 'antd'

export default class MovieListContainer extends Component {

    constructor(props) {
        super(props)
        //note：改变state才会触发页面的重新渲染
        this.state = {
            //控制是否要显示遮罩层
            isShowLoading: true,
            //判断是否滚动到底部
            isButtom: false,
            //要渲染的电影列表数据
            movieListData: [],
            //只要传递到后台里面的参数，都定义在message属性中
            message: {
                movieType: 'in_theaters',
                pageIndex: 1,
                start: 0,
                count: 10
            }
        }
    }


    //获取从react-router中传递过来的router属性
    static contextTypes = {
        router: React.PropTypes.object
    }

    //生命周期中只加载一次
    componentDidMount() {
        this.fetch(this.state.message.movieType)
    }


    componentWillReceiveProps(nextProps) {
        if (nextProps.params.movieType) {
            this.fetch(nextProps.params.movieType)
        } else {
            this.setState({
                //控制是否要显示遮罩层
                isShowLoading: true,
                //判断是否滚动到底部
                isButtom: false,
                //要渲染的电影列表数据
                movieListData: [''],
                //只要传递到后台里面的参数，都定义在message属性中
                message: {
                    movieType: 'in_theaters',
                    pageIndex: 1,
                    start: 0,
                    count: 10
                }
            })
            return
        }
    }

    componentDidUpdate() {

        if (this.state.isShowLoading) {
            this.fetch(this.state.message.movieType)
        } else {
            //调用了添加滚动监听事件的方法
            this.addScrollEvent()
        }
    }

    addScrollEvent = () => {
        const _this = this
        this.refs.scrollContainer.onscroll = function (e) {
            if (e.target.scrollHeight - 2 <= e.target.scrollTop + e.target.offsetHeight) {
                // console.log('到底了')
                //如果isButtom为true,直接返回，防止“到底后”多次触发，请求数据
                if (_this.state.isButtom) {
                    return
                }
                //到底后，isButtom变为true，请求数据
                _this.setState({
                    isButtom: true
                })
                _this.fetch(_this.state.message.movieType)
            }
        }
    }

    //请求数据的方法
    fetch = (movieType) => {
        //一.判断条件
        //判断是否切换了电影类型，如果切换了电影类型，才显示遮罩
        if (movieType != this.state.message.movieType) {
            //note:在这里设置了setState方法，没有立即生效，在componentDidUpdate方法里面才会生效
            this.setState({
                //控制是否要显示遮罩层
                isShowLoading: true,
                //判断是否滚动到底部
                isButtom: false,
                //要渲染的电影列表数据
                movieListData: [],
                //只要传递到后台里面的参数，都定义在message属性中
                message: {
                    movieType: movieType,
                    pageIndex: 1,
                    start: 0,
                    count: 10
                },
            })
            return
        }


        //二.修改传递的参数比变量
        const _this = this

        // 1.对象深拷贝
        // 1.1 es6深拷贝
        // ES6的硬拷贝方法，不过要注意，只能硬拷贝简单的数据类型，要么就是对象，要么就是数组，不能数组里面嵌套对象，对象里面嵌套数组
        // Immutable.js可以解决对象里面嵌套数组的硬拷贝问题（SImmutable.js）这两个库实现了share data，在共享数据的同时又是硬拷贝
        let messageObj = Object.assign({}, this.state.message)
        //1.2 es7深拷贝
        // let messageObj = {...this.state.message}
        //1.3  JSON.stringify和 JSON.parse
        // let messageObj=JSON.parse(JSON.stringify(this.state.message))

        //2.数组深拷贝
        let movieListData = [].concat(this.state.movieListData)

        //修改分页信息
        messageObj.movieType = movieType

        messageObj.start = (messageObj.pageIndex - 1) * messageObj.count
        messageObj.pageIndex++


        //三.发起数据请求

        //将需要传递的参数变为字符串传递到服务中
        const message = JSON.stringify(messageObj)

        const promise = service.getMovieListData(message)
        promise.then(
            function (data) {
                console.log(data)
                if (movieListData.length > 0) {
                    movieListData = movieListData.concat(data.subjects)
                } else {
                    movieListData = data.subjects
                }
                console.log(movieListData)
                //只有state状态改变时，页面才会重新渲染
                _this.setState({
                    isShowLoading: false,
                    isButtom: false,
                    movieListData: movieListData,
                    message: messageObj
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
            <div className='movieList_container'>
                <div className="spin">
                    {/*遮罩*/}
                    <Spin size="large" tip="Loading...">
                    </Spin>
                </div>
            </div>
        )
    }

    //跳转到详细页面方法
    goDetail = (id) => {
        this.context.router.push(`/movie/movieDetail/${id}`)
    }

    //渲染列表的每一行
    renderItem = (item) => {
        return (
            <div className="item" key={item.id} onClick={() => this.goDetail(item.id)}>
                <div className="item_left">
                    <img src={item.images.small} alt=""/>
                </div>

                <div className="item_right">
                    <h3>{item.title}</h3>
                    <span>{item.year}</span><br/>
                    <span>{item.genres}</span><br/>
                    <span>豆瓣评分：{item.rating.average}</span><br/>
                    <span>导演：{item.directors[0].name}</span><br/>
                    {/*<span>主演：{item.casts[0].name}</span>&nbsp;&nbsp;*/}
                    {/*<span>{item.casts[1].name}</span>&nbsp;&nbsp;*/}
                </div>
            </div>
        )
    }

    //渲染电影列表方法
    renderMovieList = () => {
        return (
            //ref属性获取dom元素
            <div ref='scrollContainer' className='movieList_container'>
                {this.state.movieListData.map(this.renderItem)}

                <div className={this.state.isButtom ? 'showBottom ' : 'hideBottom '}>
                    {/*遮罩*/}
                    <Spin/>
                </div>
            </div>
        )
    }

    render() {
        if (this.state.isShowLoading) {
            return this.showLoading()
        } else {
            return this.renderMovieList()
        }
    }
}