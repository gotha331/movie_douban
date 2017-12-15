import React, {Component} from 'react'
import listService from '../services/listService.js'
import '../styles/movieList.css'
import Loading from '../components/Loading.js'

export default class MovieListContainer extends Component {
    constructor(props) {
        super(props);
        // 初始化state
        this.state = {
            // 根页面配置相关的东西放在里面
            config: {
                showLoading: true,
                isBottom:false
            },
            // 往后台传递的参数都放在这里面
            message: {
                pageIndex:1,
                start: 0,
                count: 10,
                movieType: 'in_theaters'
            },
            // 和页面显示数据相关的都放在这里面
            data: {
                movieListData: []
            }
        }
    }

    static contextTypes = {
        router: React.PropTypes.object
    };

    componentWillReceiveProps(nextProps) {
            if(nextProps.params.movieType!=this.state.message.movieType){
                // 如果发现movieType的类型发生了变化，我们重置state为初始状态
                this.setState({
                    config: {
                        showLoading: true,
                        isBottom:false
                    },
                    message: {
                        pageIndex:1,
                        start: 0,
                        count: 10,
                        movieType: nextProps.params.movieType
                    },
                    data: {
                        movieListData: []
                    }
                })
                // 我们发现滚动事件会在切换movieType的时候多触发一次加载数据的方法，所以监听事件也要重置，原始是因为容器div被复用了，所以导致这个事件一直存在
                this.refs.scrollContent.onscroll=null
                // 重置只有的茶法查询数据方法是在componentDidUpdate中触发的
                return
            }

            // 查询列表数据的方法
            this.fetchData(nextProps.params.movieType)
    }

    componentDidMount() {
        this.fetchData(this.state.message.movieType)
    }

    componentDidUpdate() {
        if (!this.state.config.showLoading) {
            this.addEventListener()
        }else{
            // 当切换了movieType之后，所有的东西重置了，所以要在这个生命周期方法中调用一下数据请求，
            // 但是这个方法不会在每次请求的时候都调用，因为列表加载更多的时候不会改变isLoading的状态，
            // 只会在最底部显示加载提示
            this.fetchData(this.state.message.movieType)
        }
    }

    componentWillUnmount() {
        // 组件即将被卸载之前把scroll的监听事件去掉
        // this.refs.scrollContent.removeEventListener('scroll')
    }

    addEventListener=()=>{
        // 在组件已经被从新渲染完毕之后添加滚动的监听事件
        this.refs.scrollContent.onscroll=(e)=> {
            // 如果判断条件成立，说明滚动到最底下
            if (e.target.scrollHeight-2 <= e.target.scrollTop + e.target.offsetHeight) {

                // 这段代码解决到底之后闲的没事连续触发问题
                if(this.state.config.isBottom){
                    return
                }

                // 为了在列表页面的显示正在请求数据的提示
                this.setState({
                    config:{
                        isBottom:true
                    }
                })
                this.fetchData(this.state.message.movieType)
            }
        }
    }


    // 请求列表数据方法
    fetchData = (movieType)=> {
        // 定义变量
        let movieListData=[].concat(this.state.data.movieListData)
        // ES6的硬拷贝方法，不过要注意，只能硬拷贝简单的数据类型，要么就是对象，要么就是数组，不能数组里面嵌套对象，对象里面嵌套数组
        // Immutable.js可以解决对象里面嵌套数组的硬拷贝问题（SImmutable.js）这两个库实现了share data，在共享数据的同时又是硬拷贝
        let message = Object.assign({},this.state.message)

        // 修改分页信息
        message.start=(message.pageIndex-1)*message.count
        message.pageIndex=++message.pageIndex
        message.movieType=movieType

        // 发起数据请求
        const promise = listService.getMovieListData(message)
        promise.then(
            (data)=> {
                console.log(data)
                // 判断是不是添加新数据
                if(movieListData.length>0){
                    movieListData=movieListData.concat(data.subjects)
                }
                else{
                    movieListData=data.subjects
                }

                // 改变state的状态
                this.setState({
                    config: {
                        showLoading: false,
                        isBottom:false
                    },
                    message,
                    data: {
                        movieListData
                    },
                })
            },
            (err)=> {
            }
        )
    }

    // 跳转到详细页面
    goDetail = (id)=> {
        this.context.router.push(`/list/movieDetail/${id}`)
    }

    // 渲染列表页面
    renderList = ()=> {
        return (
            <div className="movieList_container" ref='scrollContent'>
                {this.state.data.movieListData.map(this.renderItem)}
                <div className={this.state.config.isBottom?"movieList_show":"movieList_hidden"}>
                    正在请求数据，请稍等。。。。
                </div>
            </div>
        )
    }

    // 渲染页面的每一行
    renderItem = (item)=> {
        return (
            <div className="movieList_item" key={Math.random()+9999} onClick={()=>this.goDetail(item.id)}>
                <img src={item.images.small} alt=""/>
                <div>
                    <h1>{item.title}</h1>
                    <p>{item.year}</p>
                </div>
            </div>
        )
    }

    // 渲染遮罩层
    showLoading = ()=> {
        return (
            <div className="movieList_container">
                <Loading/>
            </div>
        )
    }

    render() {
        if (this.state.config.showLoading) {
            return this.showLoading()
        }
        return this.renderList()
    }
}
