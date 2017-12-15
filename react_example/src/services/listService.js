import config from '../js/config.js'
export default {
    // 获取列表数据的操作
    getMovieListData(message) {
        console.log('service中的getMovieListData方法中mesaage对象信息')
        console.log(message)

        const strMessage=JSON.stringify(message)
        const url=`${config.HTTP}${config.SERVER_PATH}:${config.PORT}/getMovieListData?message=${strMessage}`
        return new Promise(function(resolve, reject) {
            // const data={
            //     "count": 10,
            //     "start": 6,
            //     "total": 82,
            //     "subjects": [
            //         {
            //             "rating": {
            //                 "max": 10,
            //                 "average": 0,
            //                 "stars": "00",
            //                 "min": 0
            //             },
            //             "genres": [
            //                 "奇幻",
            //                 "恐怖"
            //             ],
            //             "title": "食人岛",
            //             "casts": [
            //                 {
            //                     "alt": "https://movie.douban.com/celebrity/1317811/",
            //                     "avatars": {
            //                         "small": "https://img3.doubanio.com/img/celebrity/small/1360846746.75.jpg",
            //                         "large": "https://img3.doubanio.com/img/celebrity/large/1360846746.75.jpg",
            //                         "medium": "https://img3.doubanio.com/img/celebrity/medium/1360846746.75.jpg"
            //                     },
            //                     "name": "娄淇",
            //                     "id": "1317811"
            //                 },
            //                 {
            //                     "alt": "https://movie.douban.com/celebrity/1340268/",
            //                     "avatars": {
            //                         "small": "https://img5.doubanio.com/img/celebrity/small/1401112685.76.jpg",
            //                         "large": "https://img5.doubanio.com/img/celebrity/large/1401112685.76.jpg",
            //                         "medium": "https://img5.doubanio.com/img/celebrity/medium/1401112685.76.jpg"
            //                     },
            //                     "name": "杨凯迪",
            //                     "id": "1340268"
            //                 },
            //                 {
            //                     "alt": "https://movie.douban.com/celebrity/1353699/",
            //                     "avatars": {
            //                         "small": "https://img3.doubanio.com/img/celebrity/small/1455755779.42.jpg",
            //                         "large": "https://img3.doubanio.com/img/celebrity/large/1455755779.42.jpg",
            //                         "medium": "https://img3.doubanio.com/img/celebrity/medium/1455755779.42.jpg"
            //                     },
            //                     "name": "谢波",
            //                     "id": "1353699"
            //                 }
            //             ],
            //             "collect_count": 30,
            //             "original_title": "食人岛",
            //             "subtype": "movie",
            //             "directors": [
            //                 {
            //                     "alt": "https://movie.douban.com/celebrity/1317858/",
            //                     "avatars": {
            //                         "small": "https://img5.doubanio.com/img/celebrity/small/41506.jpg",
            //                         "large": "https://img5.doubanio.com/img/celebrity/large/41506.jpg",
            //                         "medium": "https://img5.doubanio.com/img/celebrity/medium/41506.jpg"
            //                     },
            //                     "name": "李凯",
            //                     "id": "1317858"
            //                 }
            //             ],
            //             "year": "2016",
            //             "images": {
            //                 "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2390679413.jpg",
            //                 "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2390679413.jpg",
            //                 "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2390679413.jpg"
            //             },
            //             "alt": "https://movie.douban.com/subject/26840300/",
            //             "id": "26840300"
            //         },
            //         {
            //             "rating": {
            //                 "max": 10,
            //                 "average": 0,
            //                 "stars": "00",
            //                 "min": 0
            //             },
            //             "genres": [
            //                 "喜剧",
            //                 "犯罪",
            //                 "冒险"
            //             ],
            //             "title": "冒牌卧底",
            //             "casts": [
            //                 {
            //                     "alt": "https://movie.douban.com/celebrity/1046960/",
            //                     "avatars": {
            //                         "small": "https://img5.doubanio.com/img/celebrity/small/4376.jpg",
            //                         "large": "https://img5.doubanio.com/img/celebrity/large/4376.jpg",
            //                         "medium": "https://img5.doubanio.com/img/celebrity/medium/4376.jpg"
            //                     },
            //                     "name": "潘粤明",
            //                     "id": "1046960"
            //                 },
            //                 {
            //                     "alt": "https://movie.douban.com/celebrity/1036695/",
            //                     "avatars": {
            //                         "small": "https://img3.doubanio.com/img/celebrity/small/1355297994.85.jpg",
            //                         "large": "https://img3.doubanio.com/img/celebrity/large/1355297994.85.jpg",
            //                         "medium": "https://img3.doubanio.com/img/celebrity/medium/1355297994.85.jpg"
            //                     },
            //                     "name": "高圣远",
            //                     "id": "1036695"
            //                 },
            //                 {
            //                     "alt": "https://movie.douban.com/celebrity/1327084/",
            //                     "avatars": {
            //                         "small": "https://img3.doubanio.com/img/celebrity/small/1363597076.12.jpg",
            //                         "large": "https://img3.doubanio.com/img/celebrity/large/1363597076.12.jpg",
            //                         "medium": "https://img3.doubanio.com/img/celebrity/medium/1363597076.12.jpg"
            //                     },
            //                     "name": "常远",
            //                     "id": "1327084"
            //                 }
            //             ],
            //             "collect_count": 9,
            //             "original_title": "冒牌卧底",
            //             "subtype": "movie",
            //             "directors": [
            //                 {
            //                     "alt": "https://movie.douban.com/celebrity/1334343/",
            //                     "avatars": {
            //                         "small": "https://img5.doubanio.com/img/celebrity/small/1441507811.86.jpg",
            //                         "large": "https://img5.doubanio.com/img/celebrity/large/1441507811.86.jpg",
            //                         "medium": "https://img5.doubanio.com/img/celebrity/medium/1441507811.86.jpg"
            //                     },
            //                     "name": "唐旭",
            //                     "id": "1334343"
            //                 }
            //             ],
            //             "year": "2016",
            //             "images": {
            //                 "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2389863841.jpg",
            //                 "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2389863841.jpg",
            //                 "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2389863841.jpg"
            //             },
            //             "alt": "https://movie.douban.com/subject/26743534/",
            //             "id": "26743534"
            //         },
            //         {
            //             "rating": {
            //                 "max": 10,
            //                 "average": 0,
            //                 "stars": "00",
            //                 "min": 0
            //             },
            //             "genres": [
            //                 "剧情",
            //                 "爱情",
            //                 "冒险"
            //             ],
            //             "title": "沙漠之心",
            //             "casts": [
            //                 {
            //                     "alt": "https://movie.douban.com/celebrity/1335470/",
            //                     "avatars": {
            //                         "small": "https://img3.doubanio.com/img/celebrity/small/1410187196.93.jpg",
            //                         "large": "https://img3.doubanio.com/img/celebrity/large/1410187196.93.jpg",
            //                         "medium": "https://img3.doubanio.com/img/celebrity/medium/1410187196.93.jpg"
            //                     },
            //                     "name": "隋咏良",
            //                     "id": "1335470"
            //                 },
            //                 {
            //                     "alt": "https://movie.douban.com/celebrity/1343521/",
            //                     "avatars": {
            //                         "small": "https://img5.doubanio.com/img/celebrity/small/42ExNrfRQYcel_avatar_uploaded1412447745.66.jpg",
            //                         "large": "https://img5.doubanio.com/img/celebrity/large/42ExNrfRQYcel_avatar_uploaded1412447745.66.jpg",
            //                         "medium": "https://img5.doubanio.com/img/celebrity/medium/42ExNrfRQYcel_avatar_uploaded1412447745.66.jpg"
            //                     },
            //                     "name": "尤靖茹",
            //                     "id": "1343521"
            //                 },
            //                 {
            //                     "alt": "https://movie.douban.com/celebrity/1364759/",
            //                     "avatars": {
            //                         "small": "https://img1.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
            //                         "large": "https://img3.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
            //                         "medium": "https://img1.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
            //                     },
            //                     "name": "薛祺",
            //                     "id": "1364759"
            //                 }
            //             ],
            //             "collect_count": 28,
            //             "original_title": "沙漠之心",
            //             "subtype": "movie",
            //             "directors": [
            //                 {
            //                     "alt": "https://movie.douban.com/celebrity/1364757/",
            //                     "avatars": {
            //                         "small": "https://img1.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
            //                         "large": "https://img3.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
            //                         "medium": "https://img1.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
            //                     },
            //                     "name": "李柯",
            //                     "id": "1364757"
            //                 }
            //             ],
            //             "year": "2016",
            //             "images": {
            //                 "small": "https://img1.doubanio.com/view/movie_poster_cover/ipst/public/p2396325047.jpg",
            //                 "large": "https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2396325047.jpg",
            //                 "medium": "https://img1.doubanio.com/view/movie_poster_cover/spst/public/p2396325047.jpg"
            //             },
            //             "alt": "https://movie.douban.com/subject/26907466/",
            //             "id": "26907466"
            //         },
            //         {
            //             "rating": {
            //                 "max": 10,
            //                 "average": 0,
            //                 "stars": "00",
            //                 "min": 0
            //             },
            //             "genres": [
            //                 "剧情"
            //             ],
            //             "title": "老腔",
            //             "casts": [
            //                 {
            //                     "alt": "https://movie.douban.com/celebrity/1316548/",
            //                     "avatars": {
            //                         "small": "https://img3.doubanio.com/img/celebrity/small/36751.jpg",
            //                         "large": "https://img3.doubanio.com/img/celebrity/large/36751.jpg",
            //                         "medium": "https://img3.doubanio.com/img/celebrity/medium/36751.jpg"
            //                     },
            //                     "name": "李彧",
            //                     "id": "1316548"
            //                 },
            //                 {
            //                     "alt": "https://movie.douban.com/celebrity/1317539/",
            //                     "avatars": {
            //                         "small": "https://img3.doubanio.com/img/celebrity/small/40311.jpg",
            //                         "large": "https://img3.doubanio.com/img/celebrity/large/40311.jpg",
            //                         "medium": "https://img3.doubanio.com/img/celebrity/medium/40311.jpg"
            //                     },
            //                     "name": "李梦",
            //                     "id": "1317539"
            //                 },
            //                 {
            //                     "alt": "https://movie.douban.com/celebrity/1327685/",
            //                     "avatars": {
            //                         "small": "https://img3.doubanio.com/img/celebrity/small/1375364904.62.jpg",
            //                         "large": "https://img3.doubanio.com/img/celebrity/large/1375364904.62.jpg",
            //                         "medium": "https://img3.doubanio.com/img/celebrity/medium/1375364904.62.jpg"
            //                     },
            //                     "name": "任山",
            //                     "id": "1327685"
            //                 }
            //             ],
            //             "collect_count": 4,
            //             "original_title": "老腔",
            //             "subtype": "movie",
            //             "directors": [
            //                 {
            //                     "alt": "https://movie.douban.com/celebrity/1319184/",
            //                     "avatars": {
            //                         "small": "https://img3.doubanio.com/img/celebrity/small/46010.jpg",
            //                         "large": "https://img3.doubanio.com/img/celebrity/large/46010.jpg",
            //                         "medium": "https://img3.doubanio.com/img/celebrity/medium/46010.jpg"
            //                     },
            //                     "name": "高峰",
            //                     "id": "1319184"
            //                 }
            //             ],
            //             "year": "2014",
            //             "images": {
            //                 "small": "https://img1.doubanio.com/view/movie_poster_cover/ipst/public/p2231057718.jpg",
            //                 "large": "https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2231057718.jpg",
            //                 "medium": "https://img1.doubanio.com/view/movie_poster_cover/spst/public/p2231057718.jpg"
            //             },
            //             "alt": "https://movie.douban.com/subject/26337155/",
            //             "id": "26337155"
            //         },
            //         {
            //             "rating": {
            //                 "max": 10,
            //                 "average": 0,
            //                 "stars": "00",
            //                 "min": 0
            //             },
            //             "genres": [
            //                 "剧情",
            //                 "动作",
            //                 "科幻"
            //             ],
            //             "title": "东宫皇子",
            //             "casts": [
            //                 {
            //                     "alt": "https://movie.douban.com/celebrity/1365240/",
            //                     "avatars": {
            //                         "small": "https://img1.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
            //                         "large": "https://img3.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
            //                         "medium": "https://img1.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
            //                     },
            //                     "name": "姚亦",
            //                     "id": "1365240"
            //                 },
            //                 {
            //                     "alt": "https://movie.douban.com/celebrity/1350386/",
            //                     "avatars": {
            //                         "small": "https://img1.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
            //                         "large": "https://img3.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
            //                         "medium": "https://img1.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
            //                     },
            //                     "name": "杜乔",
            //                     "id": "1350386"
            //                 },
            //                 {
            //                     "alt": "https://movie.douban.com/celebrity/1365241/",
            //                     "avatars": {
            //                         "small": "https://img1.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
            //                         "large": "https://img3.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
            //                         "medium": "https://img1.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
            //                     },
            //                     "name": "陈相丞",
            //                     "id": "1365241"
            //                 }
            //             ],
            //             "collect_count": 21,
            //             "original_title": "东宫皇子",
            //             "subtype": "movie",
            //             "directors": [
            //                 {
            //                     "alt": "https://movie.douban.com/celebrity/1365238/",
            //                     "avatars": {
            //                         "small": "https://img1.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
            //                         "large": "https://img3.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
            //                         "medium": "https://img1.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
            //                     },
            //                     "name": "左伟晨",
            //                     "id": "1365238"
            //                 }
            //             ],
            //             "year": "2016",
            //             "images": {
            //                 "small": "https://img1.doubanio.com/view/movie_poster_cover/ipst/public/p2394460517.jpg",
            //                 "large": "https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2394460517.jpg",
            //                 "medium": "https://img1.doubanio.com/view/movie_poster_cover/spst/public/p2394460517.jpg"
            //             },
            //             "alt": "https://movie.douban.com/subject/26883577/",
            //             "id": "26883577"
            //         },
            //         {
            //             "rating": {
            //                 "max": 10,
            //                 "average": 0,
            //                 "stars": "00",
            //                 "min": 0
            //             },
            //             "genres": [
            //                 "喜剧"
            //             ],
            //             "title": "锅是铁",
            //             "casts": [
            //                 {
            //                     "alt": "https://movie.douban.com/celebrity/1313873/",
            //                     "avatars": {
            //                         "small": "https://img3.doubanio.com/img/celebrity/small/20833.jpg",
            //                         "large": "https://img3.doubanio.com/img/celebrity/large/20833.jpg",
            //                         "medium": "https://img3.doubanio.com/img/celebrity/medium/20833.jpg"
            //                     },
            //                     "name": "杜旭东",
            //                     "id": "1313873"
            //                 },
            //                 {
            //                     "alt": "https://movie.douban.com/celebrity/1313235/",
            //                     "avatars": {
            //                         "small": "https://img3.doubanio.com/img/celebrity/small/51184.jpg",
            //                         "large": "https://img3.doubanio.com/img/celebrity/large/51184.jpg",
            //                         "medium": "https://img3.doubanio.com/img/celebrity/medium/51184.jpg"
            //                     },
            //                     "name": "许还山",
            //                     "id": "1313235"
            //                 },
            //                 {
            //                     "alt": "https://movie.douban.com/celebrity/1317977/",
            //                     "avatars": {
            //                         "small": "https://img1.doubanio.com/img/celebrity/small/41939.jpg",
            //                         "large": "https://img1.doubanio.com/img/celebrity/large/41939.jpg",
            //                         "medium": "https://img1.doubanio.com/img/celebrity/medium/41939.jpg"
            //                     },
            //                     "name": "王丽云",
            //                     "id": "1317977"
            //                 }
            //             ],
            //             "collect_count": 1,
            //             "original_title": "锅是铁",
            //             "subtype": "movie",
            //             "directors": [
            //                 {
            //                     "alt": "https://movie.douban.com/celebrity/1365247/",
            //                     "avatars": {
            //                         "small": "https://img1.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
            //                         "large": "https://img3.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
            //                         "medium": "https://img1.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
            //                     },
            //                     "name": "鲍强",
            //                     "id": "1365247"
            //                 }
            //             ],
            //             "year": "2016",
            //             "images": {
            //                 "small": "https://img1.doubanio.com/view/movie_poster_cover/ipst/public/p2401306349.jpg",
            //                 "large": "https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2401306349.jpg",
            //                 "medium": "https://img1.doubanio.com/view/movie_poster_cover/spst/public/p2401306349.jpg"
            //             },
            //             "alt": "https://movie.douban.com/subject/26923150/",
            //             "id": "26923150"
            //         },
            //         {
            //             "rating": {
            //                 "max": 10,
            //                 "average": 0,
            //                 "stars": "00",
            //                 "min": 0
            //             },
            //             "genres": [
            //                 "喜剧"
            //             ],
            //             "title": "试睡员48小时",
            //             "casts": [
            //                 {
            //                     "alt": "https://movie.douban.com/celebrity/1364624/",
            //                     "avatars": {
            //                         "small": "https://img5.doubanio.com/img/celebrity/small/1478777436.56.jpg",
            //                         "large": "https://img5.doubanio.com/img/celebrity/large/1478777436.56.jpg",
            //                         "medium": "https://img5.doubanio.com/img/celebrity/medium/1478777436.56.jpg"
            //                     },
            //                     "name": "李天烨",
            //                     "id": "1364624"
            //                 },
            //                 {
            //                     "alt": "https://movie.douban.com/celebrity/1351033/",
            //                     "avatars": {
            //                         "small": "https://img3.doubanio.com/img/celebrity/small/1479787817.02.jpg",
            //                         "large": "https://img3.doubanio.com/img/celebrity/large/1479787817.02.jpg",
            //                         "medium": "https://img3.doubanio.com/img/celebrity/medium/1479787817.02.jpg"
            //                     },
            //                     "name": "李婉儿",
            //                     "id": "1351033"
            //                 },
            //                 {
            //                     "alt": "https://movie.douban.com/celebrity/1359006/",
            //                     "avatars": {
            //                         "small": "https://img1.doubanio.com/img/celebrity/small/1465913877.59.jpg",
            //                         "large": "https://img1.doubanio.com/img/celebrity/large/1465913877.59.jpg",
            //                         "medium": "https://img1.doubanio.com/img/celebrity/medium/1465913877.59.jpg"
            //                     },
            //                     "name": "程爽",
            //                     "id": "1359006"
            //                 }
            //             ],
            //             "collect_count": 7,
            //             "original_title": "试睡员48小时",
            //             "subtype": "movie",
            //             "directors": [
            //                 {
            //                     "alt": "https://movie.douban.com/celebrity/1332872/",
            //                     "avatars": {
            //                         "small": "https://img3.doubanio.com/img/celebrity/small/1376453026.25.jpg",
            //                         "large": "https://img3.doubanio.com/img/celebrity/large/1376453026.25.jpg",
            //                         "medium": "https://img3.doubanio.com/img/celebrity/medium/1376453026.25.jpg"
            //                     },
            //                     "name": "郭奎永",
            //                     "id": "1332872"
            //                 }
            //             ],
            //             "year": "2016",
            //             "images": {
            //                 "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2401053344.jpg",
            //                 "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2401053344.jpg",
            //                 "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2401053344.jpg"
            //             },
            //             "alt": "https://movie.douban.com/subject/26911536/",
            //             "id": "26911536"
            //         },
            //         {
            //             "rating": {
            //                 "max": 10,
            //                 "average": 8.5,
            //                 "stars": "45",
            //                 "min": 0
            //             },
            //             "genres": [
            //                 "剧情",
            //                 "传记",
            //                 "历史"
            //             ],
            //             "title": "血战钢锯岭",
            //             "casts": [
            //                 {
            //                     "alt": "https://movie.douban.com/celebrity/1022620/",
            //                     "avatars": {
            //                         "small": "https://img3.doubanio.com/img/celebrity/small/13151.jpg",
            //                         "large": "https://img3.doubanio.com/img/celebrity/large/13151.jpg",
            //                         "medium": "https://img3.doubanio.com/img/celebrity/medium/13151.jpg"
            //                     },
            //                     "name": "安德鲁·加菲尔德",
            //                     "id": "1022620"
            //                 },
            //                 {
            //                     "alt": "https://movie.douban.com/celebrity/1000147/",
            //                     "avatars": {
            //                         "small": "https://img3.doubanio.com/img/celebrity/small/35783.jpg",
            //                         "large": "https://img3.doubanio.com/img/celebrity/large/35783.jpg",
            //                         "medium": "https://img3.doubanio.com/img/celebrity/medium/35783.jpg"
            //                     },
            //                     "name": "萨姆·沃辛顿",
            //                     "id": "1000147"
            //                 },
            //                 {
            //                     "alt": "https://movie.douban.com/celebrity/1002673/",
            //                     "avatars": {
            //                         "small": "https://img5.doubanio.com/img/celebrity/small/6056.jpg",
            //                         "large": "https://img5.doubanio.com/img/celebrity/large/6056.jpg",
            //                         "medium": "https://img5.doubanio.com/img/celebrity/medium/6056.jpg"
            //                     },
            //                     "name": "文斯·沃恩",
            //                     "id": "1002673"
            //                 }
            //             ],
            //             "collect_count": 1121,
            //             "original_title": "Hacksaw Ridge",
            //             "subtype": "movie",
            //             "directors": [
            //                 {
            //                     "alt": "https://movie.douban.com/celebrity/1054530/",
            //                     "avatars": {
            //                         "small": "https://img3.doubanio.com/img/celebrity/small/680.jpg",
            //                         "large": "https://img3.doubanio.com/img/celebrity/large/680.jpg",
            //                         "medium": "https://img3.doubanio.com/img/celebrity/medium/680.jpg"
            //                     },
            //                     "name": "梅尔·吉布森",
            //                     "id": "1054530"
            //                 }
            //             ],
            //             "year": "2016",
            //             "images": {
            //                 "small": "https://img1.doubanio.com/view/movie_poster_cover/ipst/public/p2397337958.jpg",
            //                 "large": "https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2397337958.jpg",
            //                 "medium": "https://img1.doubanio.com/view/movie_poster_cover/spst/public/p2397337958.jpg"
            //             },
            //             "alt": "https://movie.douban.com/subject/26325320/",
            //             "id": "26325320"
            //         },
            //         {
            //             "rating": {
            //                 "max": 10,
            //                 "average": 0,
            //                 "stars": "00",
            //                 "min": 0
            //             },
            //             "genres": [
            //                 "剧情",
            //                 "喜剧"
            //             ],
            //             "title": "纯洁心灵·逐梦演艺圈",
            //             "casts": [
            //                 {
            //                     "alt": null,
            //                     "avatars": null,
            //                     "name": "朱哲健",
            //                     "id": null
            //                 },
            //                 {
            //                     "alt": null,
            //                     "avatars": null,
            //                     "name": "李彦漫",
            //                     "id": null
            //                 },
            //                 {
            //                     "alt": null,
            //                     "avatars": null,
            //                     "name": "陈思瀚",
            //                     "id": null
            //                 }
            //             ],
            //             "collect_count": 152,
            //             "original_title": "纯洁心灵·逐梦演艺圈",
            //             "subtype": "movie",
            //             "directors": [
            //                 {
            //                     "alt": null,
            //                     "avatars": null,
            //                     "name": "毕志飞",
            //                     "id": null
            //                 }
            //             ],
            //             "year": "2016",
            //             "images": {
            //                 "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2371693842.jpg",
            //                 "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2371693842.jpg",
            //                 "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2371693842.jpg"
            //             },
            //             "alt": "https://movie.douban.com/subject/26322774/",
            //             "id": "26322774"
            //         },
            //         {
            //             "rating": {
            //                 "max": 10,
            //                 "average": 8.2,
            //                 "stars": "45",
            //                 "min": 0
            //             },
            //             "genres": [
            //                 "剧情",
            //                 "传记",
            //                 "灾难"
            //             ],
            //             "title": "萨利机长",
            //             "casts": [
            //                 {
            //                     "alt": "https://movie.douban.com/celebrity/1054450/",
            //                     "avatars": {
            //                         "small": "https://img3.doubanio.com/img/celebrity/small/551.jpg",
            //                         "large": "https://img3.doubanio.com/img/celebrity/large/551.jpg",
            //                         "medium": "https://img3.doubanio.com/img/celebrity/medium/551.jpg"
            //                     },
            //                     "name": "汤姆·汉克斯",
            //                     "id": "1054450"
            //                 },
            //                 {
            //                     "alt": "https://movie.douban.com/celebrity/1053577/",
            //                     "avatars": {
            //                         "small": "https://img3.doubanio.com/img/celebrity/small/522.jpg",
            //                         "large": "https://img3.doubanio.com/img/celebrity/large/522.jpg",
            //                         "medium": "https://img3.doubanio.com/img/celebrity/medium/522.jpg"
            //                     },
            //                     "name": "艾伦·艾克哈特",
            //                     "id": "1053577"
            //                 },
            //                 {
            //                     "alt": "https://movie.douban.com/celebrity/1053572/",
            //                     "avatars": {
            //                         "small": "https://img5.doubanio.com/img/celebrity/small/516.jpg",
            //                         "large": "https://img5.doubanio.com/img/celebrity/large/516.jpg",
            //                         "medium": "https://img5.doubanio.com/img/celebrity/medium/516.jpg"
            //                     },
            //                     "name": "劳拉·琳妮",
            //                     "id": "1053572"
            //                 }
            //             ],
            //             "collect_count": 6324,
            //             "original_title": "Sully",
            //             "subtype": "movie",
            //             "directors": [
            //                 {
            //                     "alt": "https://movie.douban.com/celebrity/1054436/",
            //                     "avatars": {
            //                         "small": "https://img3.doubanio.com/img/celebrity/small/5064.jpg",
            //                         "large": "https://img3.doubanio.com/img/celebrity/large/5064.jpg",
            //                         "medium": "https://img3.doubanio.com/img/celebrity/medium/5064.jpg"
            //                     },
            //                     "name": "克林特·伊斯特伍德",
            //                     "id": "1054436"
            //                 }
            //             ],
            //             "year": "2016",
            //             "images": {
            //                 "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2400243872.jpg",
            //                 "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2400243872.jpg",
            //                 "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2400243872.jpg"
            //             },
            //             "alt": "https://movie.douban.com/subject/26416603/",
            //             "id": "26416603"
            //         }
            //     ],
            //     "title": "即将上映的电影"
            // }
            // setTimeout(function () {
            //     resolve(data)
            // },3000)
            //




            fetch(url)
                .then((response) => {
                    if (response.ok) {
                        return response.json()
                    } else {
                        console.error('服务器繁忙，请稍后再试；\r\nCode:' + response.status)
                    }
                })
                .then((data) => {
                    resolve(data)
                })
                .catch((err)=> {
                   reject(err)
                })

        });


    },
    // 获取列表详细数据的操作
    getMovieDetailData(message){
        console.log('service中的getMovieDetailData方法中的mesaage对象信息')
        console.log(message)
        const url=`${config.HTTP}${config.SERVER_PATH}:${config.PORT}/getMovieDetailData?message=${message}`
        return new Promise(function(resolve, reject) {
            // const data={
            //     "rating": {
            //         "max": 10,
            //         "average": 6.3,
            //         "stars": "35",
            //         "min": 0
            //     },
            //     "reviews_count": 20,
            //     "wish_count": 3207,
            //     "douban_site": "",
            //     "year": "2016",
            //     "images": {
            //         "small": "https://img1.doubanio.com/view/movie_poster_cover/ipst/public/p2394353738.jpg",
            //         "large": "https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2394353738.jpg",
            //         "medium": "https://img1.doubanio.com/view/movie_poster_cover/spst/public/p2394353738.jpg"
            //     },
            //     "alt": "https://movie.douban.com/subject/25847558/",
            //     "id": "25847558",
            //     "mobile_url": "https://movie.douban.com/subject/25847558/mobile",
            //     "title": "邻家大贱谍",
            //     "do_count": null,
            //     "share_url": "https://m.douban.com/movie/subject/25847558",
            //     "seasons_count": null,
            //     "schedule_url": "https://movie.douban.com/subject/25847558/cinema/",
            //     "episodes_count": null,
            //     "countries": [
            //         "美国"
            //     ],
            //     "genres": [
            //         "剧情",
            //         "喜剧",
            //         "动作"
            //     ],
            //     "collect_count": 2675,
            //     "casts": [
            //         {
            //             "alt": "https://movie.douban.com/celebrity/1044996/",
            //             "avatars": {
            //                 "small": "https://img3.doubanio.com/img/celebrity/small/8710.jpg",
            //                 "large": "https://img3.doubanio.com/img/celebrity/large/8710.jpg",
            //                 "medium": "https://img3.doubanio.com/img/celebrity/medium/8710.jpg"
            //             },
            //             "name": "盖尔·加朵",
            //             "id": "1044996"
            //         },
            //         {
            //             "alt": "https://movie.douban.com/celebrity/1041001/",
            //             "avatars": {
            //                 "small": "https://img1.doubanio.com/img/celebrity/small/437.jpg",
            //                 "large": "https://img1.doubanio.com/img/celebrity/large/437.jpg",
            //                 "medium": "https://img1.doubanio.com/img/celebrity/medium/437.jpg"
            //             },
            //             "name": "艾拉·菲舍尔",
            //             "id": "1041001"
            //         },
            //         {
            //             "alt": "https://movie.douban.com/celebrity/1027137/",
            //             "avatars": {
            //                 "small": "https://img1.doubanio.com/img/celebrity/small/1197.jpg",
            //                 "large": "https://img1.doubanio.com/img/celebrity/large/1197.jpg",
            //                 "medium": "https://img1.doubanio.com/img/celebrity/medium/1197.jpg"
            //             },
            //             "name": "扎克·加利凡纳基斯",
            //             "id": "1027137"
            //         },
            //         {
            //             "alt": "https://movie.douban.com/celebrity/1031817/",
            //             "avatars": {
            //                 "small": "https://img3.doubanio.com/img/celebrity/small/50751.jpg",
            //                 "large": "https://img3.doubanio.com/img/celebrity/large/50751.jpg",
            //                 "medium": "https://img3.doubanio.com/img/celebrity/medium/50751.jpg"
            //             },
            //             "name": "乔恩·哈姆",
            //             "id": "1031817"
            //         }
            //     ],
            //     "current_season": null,
            //     "original_title": "Keeping Up with the Joneses",
            //     "summary": "杰夫（扎克·加利凡纳基斯 Zach Galifianakis 饰）与凯伦（艾拉·菲舍尔 Isla Fisher 饰）是一对住在城郊的夫妇，而他们发现新搬来的邻居并不简单。这对新搬来的夫妇蒂姆（乔恩·哈姆 Jon Hamm 饰）与娜塔莉（盖尔· 加朵 Gal Gadot 饰）过得可谓是光彩夺目，精致无比。而当他们发现琼斯夫妇实际上是秘密特工后，事情就变得更加复杂了。",
            //     "subtype": "movie",
            //     "directors": [
            //         {
            //             "alt": "https://movie.douban.com/celebrity/1274466/",
            //             "avatars": {
            //                 "small": "https://img5.doubanio.com/img/celebrity/small/4286.jpg",
            //                 "large": "https://img5.doubanio.com/img/celebrity/large/4286.jpg",
            //                 "medium": "https://img5.doubanio.com/img/celebrity/medium/4286.jpg"
            //             },
            //             "name": "格雷格·莫托拉",
            //             "id": "1274466"
            //         }
            //     ],
            //     "comments_count": 1288,
            //     "ratings_count": 2444,
            //     "aka": [
            //         "间谍大邻演(台)",
            //         "两公婆决斗特务王(港)",
            //         "向邻居看齐",
            //         "与邻居同行"
            //     ]
            // }
            //
            // setTimeout(function () {
            //     resolve(data)
            // },3000)
            //



            fetch(url)
                .then((response) => {
                    if (response.ok) {
                        return response.json()
                    } else {
                        console.error('服务器繁忙，请稍后再试；\r\nCode:' + response.status)
                    }
                })
                .then((data) => {
                    resolve(data)
                })
                .catch((err)=> {
                   reject(err)
                })

        });
    },
    // 搜索数据方法
    getSearchData(message){
        console.log('service中的getSearchData方法中的mesaage对象信息')
        const strMessage=JSON.stringify(message)

        const url=`${config.HTTP}${config.SERVER_PATH}:${config.PORT}/getSearchData?message=${strMessage}`
        return new Promise(function(resolve, reject) {
            fetch(url)
                .then((response) => {
                    if (response.ok) {
                        return response.json()
                    } else {
                        console.error('服务器繁忙，请稍后再试；\r\nCode:' + response.status)
                    }
                })
                .then((data) => {
                    console.log("shiguoqingidshfiodsf ")
                    console.log(data)
                    resolve(data)
                })
                .catch((err)=> {
                   reject(err)
                })

        });
    }
}