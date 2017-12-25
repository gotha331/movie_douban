// 首页容器组件
import React, {Component} from 'react'
import '../styles/home.css'
import {Carousel} from 'antd'
import service from '../services/movieService.js'

export default class HomeContainer extends Component {
    constructor(props) {
        super(props)
        //note：改变state才会触发页面的重新渲染
        this.state = {
            //要渲染的电影列表数据
            movieListData: [],
            //只要传递到后台里面的参数，都定义在message属性中
            message: {
                movieType: 'in_theaters',
                pageIndex: 1,
                start: 0,
                count: 12
            }
        }
    }


    //生命周期中只加载一次
    componentDidMount() {
        this.fetch(this.state.message.movieType)
    }


    //请求数据的方法
    fetch = (movieType) => {

        //二.修改传递的参数比变量
        const _this = this

        // 1.对象深拷贝
        let messageObj = Object.assign({}, this.state.message)

        //2.数组深拷贝
        let movieListData = [].concat(this.state.movieListData)

        messageObj.movieType = movieType

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


    //渲染列表的每一行
    renderItem = (item) => {
        return (
            <div className="item" key={item.id}>
                <img className="item_images" src={item.images.small} alt=""/>
            </div>
        )
    }


    render() {
        const imagesArr = this.state.movieListData.map(this.renderItem)
        return (
            <div className='home_container'>
                <Carousel autoplay>
                    <div className="showing">
                        <div className="show">
                            {imagesArr[0]}
                        </div>
                        <div className="show">
                            {imagesArr[1]}
                        </div>
                        <div className="show">
                            {imagesArr[2]}
                        </div>
                        <div className="show">
                            {imagesArr[3]}
                        </div>
                    </div>
                    <div className="showing">
                        <div className="show">
                            {imagesArr[4]}
                        </div>
                        <div className="show">
                            {imagesArr[5]}
                        </div>
                        <div className="show">
                            {imagesArr[6]}
                        </div>
                        <div className="show">
                            {imagesArr[7]}
                        </div>
                    </div>
                    <div className="showing">
                        <div className="show">
                            {imagesArr[8]}
                        </div>
                        <div className="show">
                            {imagesArr[9]}
                        </div>
                        <div className="show">
                            {imagesArr[10]}
                        </div>
                        <div className="show">
                            {imagesArr[11]}
                        </div>
                    </div>
                </Carousel>
            </div>
        )
    }
}

