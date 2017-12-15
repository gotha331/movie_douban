import {browserHistory} from 'react-router'
import config from '../js/config.js'

export default {
    //获取电影列表
    getMovieListData(message) {
        console.log("获取了电影列表数据")
        console.log(message)

        // const strMessage = JSON.stringify(message)
        const url = `${config.HTTP}${config.SERVER_PATH}:${config.PORT}/getMovieListData?message=${message}`


        return new Promise(function (resolve, reject) {
            fetch(url)
                .then((response) => {
                    if (response.ok) {
                        return response.json()
                    } else {
                        console.error('服务器繁忙，请稍后再试;\r\nCode:' + response.status)
                    }
                })
                .then((data) => {
                    resolve(data)
                })
                .catch((err) => {
                    reject(err)
                })
        })

    },

    //获取详细页面数据
    getMovieDetailData() {

    },

    //搜索数据方法
    searchMovieList() {

    }
}