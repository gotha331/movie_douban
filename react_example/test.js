click = () => {
    console.log('test');
}

click1=()=>{
    console.log("点击了单击事件")
    this.setState({
        props1:"改变state的值"
    })
    console.log("点击了单击事件结束")
}