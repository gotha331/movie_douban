import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {

    render() {
        return (
            <div>
                <h1>{this.context.age}</h1>
                <button style={{background: this.context.color}}>
                    {this.props.children}
                </button>
            </div>
        );
    }
}

// 在孙子里面校验祖宗里面的属性
Button.contextTypes = {
    color: PropTypes.string
};

class Message extends React.Component {
    render() {
        return (
            <div>
                {this.props.text} <Button>Delete</Button>
            </div>
        );
    }
}

class MessageList extends React.Component {
//通过这个方法去出传递属性
    getChildContext() {
        return {color: "purple"};
    }

    render() {
        const children = this.props.messages.map((message) =>
            <Message text={message.text}/>
        );
        return <div>{children}</div>;
    }
}

// 传递给子孙属性的类型校验
MessageList.childContextTypes = {
    color: PropTypes.string
};


export default MessageList;
