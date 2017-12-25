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

    //解决点击电影列表，左侧list不变色bug
    componentWillReceiveProps(nextProps) {
        if (nextProps.children.type.name == 'MovieListContainer') {
            this.setState({
                key: "",
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
}
