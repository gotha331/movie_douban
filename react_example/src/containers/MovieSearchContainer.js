import React, {Component} from 'react'
import listService from '../services/listService.js'
import '../styles/movieList.css'
import Loading from '../components/Loading.js'

export default class MovieListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // 根页面配置相关的东西放在里面
            config: {
                showLoading: true,
                isBottom:false
            },
            // 往后台传递的参数都放在这里面
            message: {
                searchStr:this.props.params.searchStr,
                pageIndex:1,
                start: 0,
                count: 10,
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

    // 这个方法在一个组件初始化的时候是不会被调用的
    componentWillReceiveProps(nextProps) {
            if(nextProps.params.searchStr!=this.state.message.searchStr){
                this.setState({
                    config: {
                        showLoading: true,
                        isBottom:false
                    },
                    message: {
                        pageIndex:1,
                        start: 0,
                        count: 10,
                        searchStr: nextProps.params.searchStr
                    },
                    data: {
                        movieListData: []
                    }
                })
                this.refs.scrollContent.onscroll=null
                return
            }

            // 查询列表数据的方法
            this.fetchData(nextProps.params.searchStr)
    }

    componentDidMount() {
        this.fetchData(this.state.message.searchStr)
    }

    componentDidUpdate() {
        if (!this.state.config.showLoading) {
            this.addEventListener()
        }else{
            this.fetchData(this.state.message.searchStr)
        }
    }

    componentWillUnmount() {
    }

    addEventListener=()=>{
        this.refs.scrollContent.onscroll=(e)=> {
            // 如果判断条件成立，说明滚动到最底下
            if (e.target.scrollHeight-2 <= e.target.scrollTop + e.target.offsetHeight) {

                // 这段代码解决到底之后闲的没事连续触发问题
                if(this.state.config.isBottom){
                    return
                }

                // 显示正在加载
                this.setState({
                    config:{
                        isBottom:true
                    }
                })
                this.fetchData(this.state.message.searchStr)
            }
        }
    }

    // 请求列表数据方法
    fetchData = (searchStr)=> {
        // 定义变量
        let movieListData=[].concat(this.state.data.movieListData)
        let message = Object.assign({},this.state.message)

        // 修改分页信息
        message.start=(message.pageIndex-1)*message.count
        message.pageIndex=++message.pageIndex
        message.searchStr=searchStr

        // 发起数据请求
        const promise = listService.getSearchData(message)
        promise.then(
            (data)=> {
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
