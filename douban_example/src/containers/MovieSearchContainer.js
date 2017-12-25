/*
* 电影搜索页面
*
* */
import React, {Component} from 'react'
import '../styles/movieList.css'
import service from '../services/movieService.js'
import {Spin} from 'antd'

export default class MovieSearchContainer extends Component {
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
                keyWord: this.props.params.keyWord,
                pageIndex: 1,
                start: 0,
                count: 10
            },
        }
    }

    //获取从react-router中传递过来的router属性
    static contextTypes = {
        router: React.PropTypes.object
    }

    //生命周期中只加载一次
    componentDidMount() {
        this.fetch(this.state.message.keyWord)
    }


    componentWillReceiveProps(nextProps) {
        this.fetch(nextProps.params.keyWord)
    }

    componentDidUpdate() {

        if (this.state.isShowLoading) {
            this.fetch(this.state.message.keyWord)
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
                //如果isButtom为true,直接返回，防止“到底后”多次触发fetch请求
                if (_this.state.isButtom) {
                    return
                }
                //到底后，isButtom变为true，请求数据
                _this.setState({
                    isButtom: true
                })
                _this.fetch(_this.state.message.keyWord)
            }
        }
    }
    //请求数据的方法
    fetch = (keyWord) => {

        //一.判断条件
        //判断是否切换了搜索内容，如果切换了搜索内容，才显示遮罩，并且清空movieListData
        if (keyWord != this.state.message.keyWord) {
            this.setState({
                //控制是否要显示遮罩层
                isShowLoading: true,
                //判断是否滚动到底部
                isButtom: false,
                //要渲染的搜素结果数据
                movieListData: [],
                //只要传递到后台里面的参数，都定义在message属性中
                message: {
                    keyWord: keyWord,
                    pageIndex: 1,
                    start: 0,
                    count: 10
                },
            })
            return
        }

        //二.修改传递的参数比变量
        const _this = this

        let messageObj = Object.assign({}, this.state.message)
        let movieListData = [].concat(this.state.movieListData)
        //修改分页信息
        messageObj.keyWord = keyWord

        messageObj.start = (messageObj.pageIndex - 1) * messageObj.count
        messageObj.pageIndex++


        //三.发起数据请求

        //将需要传递的参数变为字符串传递到服务中
        const message = JSON.stringify(messageObj)

        const promise = service.searchMovieList(message)
        promise.then(
            function (data) {
                // console.log(data)

                if (movieListData.length > 0) {
                    movieListData = movieListData.concat(data.subjects)
                } else {
                    movieListData = data.subjects
                }

                // console.log(movieListData)
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