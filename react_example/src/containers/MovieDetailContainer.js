// 电影详细页面
import React, {Component} from 'react'
import listService from '../services/listService.js'
import '../styles/movieDetail.css'
import Loading from '../components/Loading.js'

export default class MovieDetailContainer extends Component {
    constructor(props) {
        super(props);
        window.contaminated={
            isNoMovieDetailContainer:false
        }
        this.state = {
            showLoading: true,
            movieDetailData: {}
        }
    }

    componentDidMount() {
        // 获取路由传递过来的参数
        this.fetchData(this.props.params.id)
    }

    componentWillUnmount(){
        // 只能全局污染解决this缓存问题,因为污染了，所以在组件进来的时候还要污染回去
        window.contaminated={
            isNoMovieDetailContainer:true
        }
        console.log('MovieDetailContainer卸载了')
    }

    fetchData = (id)=> {
        const _this=this
        // 发起数据请求
        const promise = listService.getMovieDetailData(id)
        promise.then(
            function(data){
                // TODO：this被缓存了
                // 这个地方如果使用了箭头函数那么会带来实例this不能被销毁的情况，以换成了普通的写法，这个问题以后一定要注意箭头函数的使用带来的问题
                // 问题描述：解决类似于闭包的问题，thisMovieDetail没有被没有被清除掉，详细正在加载，但是此时你点击menu
                // console.log(this.constructor.name)
                // console.log(instancesof(this))
                if(window.contaminated.isNoMovieDetailContainer){
                   return
                }
                _this.setState({
                    movieDetailData: data,
                    showLoading: false
                })
            },
            function(err){
            }
        )
    }


    // 渲染遮罩层
    showLoading = ()=> {
        return (
            <div className="movieDetail_container">
               <Loading/>
            </div>
        )
    }

    // 渲染列表页面
    renderList = ()=> {
        return (
            <div className="movieDetail_container">
                <div className="movieDetail_img">
                    <img src={this.state.movieDetailData.images.large} alt=""/>
                </div>
                <h1>{this.state.movieDetailData.title}</h1>
                <p>{this.state.movieDetailData.summary}</p>
            </div>
        )
    }


    render() {
        if (this.state.showLoading) {
            return this.showLoading()
        }
        return this.renderList()
    }
}
