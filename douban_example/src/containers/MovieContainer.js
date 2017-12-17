// 列表容器组件
import React, {Component} from 'react'
import {Link} from 'react-router'
import '../styles/movie.css'

export default class MovieContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movieType: 'in_theaters',
            keyWord: ''
        }
    }

    static contextTypes = {
        router: React.PropTypes.object
    }

    //解决点击电影列表，左侧list不变色bug ??????
    componentWillReceiveProps(nextProps) {
        if (nextProps.children.type.name == 'MovieListContainer') {
         this.setState({
             key:"",
             // movieType:'in_theaters'
         })
        }
    }



    //改变电影类型
    changeMovieType = (movieType) => {
        this.setState({
            movieType: movieType
        })
    }

    //改变关键词
    changeKeyWord = (e) => {
        this.setState({
            keyWord: e.target.value
        })
    }

    //搜索
    searchMovie = () => {
        this.context.router.push(`/movie/movieSearch/${this.state.keyWord}`)
        this.setState({
            movieType: '',
            keyWord: ''
        })
    }

    render() {
        return (
            <div className="movie_container">
                <div className="movie_left">
                    <Link className={this.state.movieType == "in_theaters" ? 'current' : ''}
                          onClick={() => this.changeMovieType('in_theaters')}
                          to='/movie/movieList/in_theaters'>正在热映</Link>
                    <Link className={this.state.movieType == "coming_soon" ? 'current' : ''}
                          onClick={() => this.changeMovieType('coming_soon')}
                          to='/movie/movieList/coming_soon'>即将上映</Link>
                    <Link className={this.state.movieType == "top250" ? 'current' : ''}
                          onClick={() => this.changeMovieType('top250')}
                          to='/movie/movieList/top250'>Top250</Link>
                </div>
                <div className="movie_right">
                    <div className="movie_search">
                        <div>
                            <input type="text" value={this.state.keyWord} onChange={this.changeKeyWord}/>
                            <button onClick={this.searchMovie}>搜索</button>
                        </div>

                    </div>
                    <div className="movie_content">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )


    }

    // 组件内跳转
    // static contextTypes = {
    //     router: React.PropTypes.object
    // };


    // inputChange=(e)=> {
    //     // 方法一：用refs获取属性值
    //     console.log(e.target.value)
    //     let searchStr="";
    //     if(e.target.value.length>=20){
    //         searchStr=e.target.value.slice(0,20);
    //     }else{
    //         searchStr=e.target.value;
    //     }
    //     // 方法二：用事件参数获取属性值
    //     this.setState({ searchStr:searchStr});
    // }
    //
    // searchData=()=>{
    //     this.context.router.push(`/list/movieSearch/${this.state.searchStr}`)
    //
    //     // 注意movieType要设置成none，因为左侧的menu应该显示任何一种颜色
    //     this.setState({
    //         searchStr: '',
    //         movieType:'none',
    //     }, () => {
    //         this.refs.theInput.focus();
    //     });
    // }
    //
    // changeMovieType=(movieType)=>{
    //     this.setState({
    //         movieType:movieType
    //     })
    // }

    // render() {
    //     return (
    //         <div className="list_container">
    //             <div className="list_left">
    //                 <Link className={this.state.movieType=='in_theaters'?'list_current':''} to="/list/movieList/in_theaters" onClick={()=>this.changeMovieType('in_theaters')}>正在热映</Link>
    //                 <Link className={this.state.movieType=='coming_soon'?'list_current':''} to="/list/movieList/coming_soon" onClick={()=>this.changeMovieType('coming_soon')}>即将热映</Link>
    //                 <Link className={this.state.movieType=='top250'?'list_current':''} to="/list/movieList/top250" onClick={()=>this.changeMovieType('top250')}>Top250</Link>
    //             </div>
    //             <div className="list_right">
    //                 <div className="list_search">
    //                     <div>
    //                         <input type="text" ref="theInput" value={this.state.searchStr} onChange={this.inputChange}/>
    //                         <button onClick={this.searchData}>搜索</button>
    //                     </div>
    //                 </div>
    //                 <div className="list_content">
    //                     {this.props.children}
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // }
}
