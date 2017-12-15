/*
* 电影列表页面
*
* */
import React, {Component} from 'react'
import '../styles/movieList.css'
import service from '../services/movieService.js'

export default class MovieListContainer extends Component {
    constructor(props) {
        super(props)
        //note：改变state才会触发页面的重新渲染
        this.state = {
            //控制是否要显示遮罩层
            isShowLoading: true,
            //要渲染的电影列表数据
            //循环渲染子组件
            movieListData: [],
            //只要传递到后台里面的参数，都定义在message属性中
            message: {
                movieType: 'in_theaters',
                pageIndex: 1,
                start: 0,
                count: 10
            },
        }
    }


    componentDidMount() {
        this.fetch(this.state.message.movieType)
    }

    componentWillReceiveProps(nextProps) {
        // console.log(nextProps)
        this.fetch(nextProps.params.movieType)
    }

    fetch = (movieType) => {
        //1.判断条件
        //判断是否切换了电影类型，如果切换了电影类型，才显示遮罩
        if(movieType!=this.state.message.movieType){
            this.setState({
                isShowLoading: true,
                message:{
                    movieType:movieType,
                    start:0,
                    count:10
                }
            })

        }


        //2.修改传递的参数比变量
        const _this = this

        // 定义变量
        // let movieListData = [].concat(this.state.data.movieListData)
        // ES6的硬拷贝方法，不过要注意，只能硬拷贝简单的数据类型，要么就是对象，要么就是数组，不能数组里面嵌套对象，对象里面嵌套数组
        // Immutable.js可以解决对象里面嵌套数组的硬拷贝问题（SImmutable.js）这两个库实现了share data，在共享数据的同时又是硬拷贝
        let messageObj = Object.assign({}, this.state.message)
        messageObj.movieType = movieType

        //3.发起数据请求

        //将需要传递的参数变为字符串传递到服务中
        // const message = JSON.stringify(this.state.message)
        const message = JSON.stringify(messageObj)

        const promise = service.getMovieListData(message)
        promise.then(
            function (data) {
                console.log(data)
                //只有state状态改变时，页面才会重新渲染
                _this.setState({
                    isShowLoading: false,
                    movieListData: data.subjects,
                    // message:message
                })
            },
            function (err) {

            }
        ).catch(function (err) {

        })
    }

    //渲染遮罩方法
    showLoading = () => {
        return (
            <div>
                正在加载数据00000...
            </div>
        )
    }


    //渲染列表的每一行
    renderItem = (item) => {
        return (
            <div className="item" key={item.id}>
                <img className="item_left" src={item.images.small} alt=""/>
                <div className="item_right">
                    <h3>{item.title}</h3>
                    <span>{item.year}</span>
                </div>
            </div>
        )
    }

    //渲染电影列表方法
    renderMovie = () => {
        return (
            <div className='movieList_container'>
                {this.state.movieListData.map(this.renderItem)}
            </div>
        )
    }

    render() {
        if (this.state.isShowLoading) {
            return this.showLoading()
        } else {
            return this.renderMovie()
        }
    }
}