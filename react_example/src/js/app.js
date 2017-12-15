// 项目入口文件
import React,{Component} from 'react'
import ReactDOM from 'react-dom'

import Hello from '../components/Hello.js'
import Life from '../example/Life.js'
import ClickEvent from '../example/ClickEvent.js'
import FindDom from '../example/FindDom.jsx'
import ListenEvent from '../example/ListenEvent.jsx'
import ControlForm from '../example/ControlForm.jsx'
import Combination from '../example/Combination.jsx'
import PropsCheck from '../example/PropsCheck.js'
import Context from '../example/Context.js'
import Animate from '../example/Animate.js'
import H5Audio from '../example/H5Audio.js'


const obj={
    age:999,
    prop1:'dfd',
    prop2:'fdfdfd'
}

// var {age,prop1}=obj
 //等同于
// var age=obj.age;
// var prop1=obj.prop1
//
//
// console.log(age)
// console.log(prop1)

ReactDOM.render(
    <div>
       {/*<Hello name="rivers-guitar" {...obj}  age={10000}/>*/}
       {/*<Context messages={[{text:"按钮1"},{text:"按钮2"}]}/>*/}
       <H5Audio/>
       {/*<PropsCheck autoPlay={true} maxLoops={44534}/>*/}
       {/*<Context message={[{text:"按钮#1"},{text:"按钮2#"}]}/>*/}
       {/*<Animate/>*/}
    </div>,
    document.getElementById('app')
)