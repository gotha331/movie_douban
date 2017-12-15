// 路由组件
import React, {Component} from 'react'
import {Router, Route, IndexRoute, Redirect, browserHistory, hashHistory} from 'react-router'

// 引入路由需要的组件
import AppContainer from '../containers/AppContainer.js'
import HomeContainer from '../containers/HomeContainer.js'
// import ListContainer from '../containers/ListContainer.js'
// import CallContainer from '../containers/CallContainer.js'
// import MovieListContainer from '../containers/MovieListContainer.js'
// import MovieSearchContainer from '../containers/MovieSearchContainer.js'
// import MovieDetailContainer from '../containers/MovieDetailContainer.js'
// import TestContainer from '../containers/TestContainer.js'

export default class Routers extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={AppContainer}>
                    <IndexRoute component={HomeContainer}/>
                    <Route path="home" component={HomeContainer}/>
                    <Route path="list"
                           getComponent={
                               (nextState, callback)=> {
                                   require.ensure([], (require)=> {
                                       callback(null, require("../containers/ListContainer.js").default)
                                   }, "list")
                               }
                           }
                           onEnter={()=>false}
                           onLeave={()=>false}
                    >
                        <IndexRoute
                            getComponent={
                                (nextState, callback)=> {
                                    require.ensure([], (require)=> {
                                        callback(null, require("../containers/MovieListContainer.js").default)
                                    }, "movieList")
                                }
                            }
                        />
                        <Route path="movieList/:movieType"
                               getComponent={
                                   (nextState,callback)=>{
                                       require.ensure([],(require)=>{
                                           callback(null,require("../containers/MovieListContainer.js").default)
                                       },"movieList")
                                   }
                               }
                        />
                        <Route path="movieSearch/:searchStr"
                               getComponent={
                                   (nextState,callback)=>{
                                       require.ensure([],(require)=>{
                                           callback(null,require("../containers/MovieSearchContainer.js").default)
                                       },"movieSearch")
                                   }
                               }

                        />
                        <Route path="movieDetail/:id"
                               getComponent={
                                   (nextState,callback)=>{
                                       require.ensure([],(require)=>{
                                           callback(null,require("../containers/MovieDetailContainer.js").default)
                                       },"movieDetail")
                                   }
                               }

                        />
                        {/*<Route path="test" component={TestContainer}/>*/}
                        {/*绝对路由*/}
                        {/*<Route path="/test" component={TestContainer}/>*/}
                        {/*<Redirect from="test" to="/test" />*/}
                    </Route>>
                    <Route path="call"
                           getComponent={
                               (nextState,callback)=>{
                                   require.ensure([],(require)=>{
                                       callback(null,require("../containers/CallContainer.js").default)
                                   },"call")
                               }
                           }
                    />
                </Route>
            </Router>
        )
    }
}
