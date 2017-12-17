// 路由组件
import React, {Component} from 'react'
// import {Router, Route} from 'react-router'
import {Router, Route, IndexRoute, Redirect, browserHistory, hashHistory} from 'react-router'

// 引入路由需要的组件
import AppContainer from '../containers/AppContainer.js'
import HomeContainer from '../containers/HomeContainer.js'
//node:代码异步加载，注释掉引用
// import MovieContainer from '../containers/MovieContainer.js'
// import CallContainer from '../containers/CallContainer.js'
// import MovieDetailContainer from "../containers/MovieDetailContainer.js"
// import MovieListContainer from '../containers/MovieListContainer.js'
// import MovieSearchContainer from '../containers/MovieSearchContainer.js'
// // import TestContainer from '../containers/TestContainer.js'

export default class Routers extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Router history={browserHistory}>
                {/*//path:需要渲染的逻辑*/}
                {/*//component : 需要渲染的组件*/}
                <Route path="/" component={AppContainer}>
                    <IndexRoute
                        getComponent={
                            (nextState, callback) => {
                                require.ensure([], (require) => {
                                    callback(null, require("../containers/HomeContainer.js").default)
                                }, "home")
                            }
                        }
                    />
                    <Route path="home" component={HomeContainer}/>
                    <Route path="movie"
                        //可以进行权限效验、日志记录
                        // onEnter={()=>console.log("进入了movie路由")}
                        // onLeave={()=>console.log("离开了movie路由")}
                           getComponent={
                               (nextState, callback) => {
                                   require.ensure([], (require) => {
                                       callback(null, require("../containers/MovieContainer.js").default)
                                   }, "movie")
                               }
                           }
                    >

                        <IndexRoute getComponent={
                            (nextState, callback) => {
                                require.ensure([], (require) => {
                                    callback(null, require("../containers/MovieListContainer.js").default)
                                }, "movie")
                            }
                        }
                        />
                        <Route path="movieList/:movieType"
                               getComponent={
                                   (nextState, callback) => {
                                       require.ensure([], (require) => {
                                           callback(null, require("../containers/MovieListContainer.js").default)
                                       }, "movieList")
                                   }
                               }
                        />
                        <Route path="movieDetail/:id"
                               getComponent={
                                   (nextState, callback) => {
                                       require.ensure([], (require) => {
                                           callback(null, require("../containers/MovieDetailContainer.js").default)
                                       }, "movieDetail")
                                   }
                               }

                        />
                        <Route path="movieSearch/:keyWord"
                               getComponent={
                                   (nextState, callback) => {
                                       require.ensure([], (require) => {
                                           callback(null, require("../containers/MovieSearchContainer.js").default)
                                       }, "movieSearch")
                                   }
                               }
                        />


                        {/*/!*绝对路由*!/*/}
                        {/*<Route path="/movieList" component={MovieListContainer}/>*/}
                        {/*<Route path="/movieDetail" component={MovieDetailContainer}/>*/}
                        {/*<Route path="/movieSearch" component={MovieSearchContainer}/>*/}
                        {/*//路由重定向*/}
                        {/*<Redirect from="movieList" to="/movieList"/>*/}
                        {/*<Redirect from="movieDetail" to="/movieDetail"/>*/}
                        {/*<Redirect from="movieSearch" to="/movieSearch"/>*/}
                    </Route>
                    <Route path="call"
                           getComponent={
                               (nextState, callback) => {
                                   require.ensure([], (require) => {
                                       callback(null, require("../containers/CallContainer.js").default)
                                   }, "call")
                               }
                           }
                    />
                </Route>
            </Router>
        )
    }
}

