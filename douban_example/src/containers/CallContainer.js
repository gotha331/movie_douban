// 联系我们容器组件
import React, {Component} from 'react'
import {Form, Input, Select, Button, message as Message} from 'antd'
import '../styles/call.css'
import service from '../services/callService.js'

const FormItem = Form.Item
const Option = Select.Option


const formItemLayout = {
    labelCol: {
        xs: {span: 24},
        sm: {span: 4},
    },
    wrapperCol: {
        xs: {span: 24},
        sm: {span: 16},
    },
}
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 12,
            offset: 6,
        },
    },
}


class CallContainer extends Component {


    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.props.form)
        this.props.form.validateFields((err, values) => {
            if (err) {
                console.log(err)
                return
            }
            this.sendFeedBack(values)
        })
    }

    //制空
    handleReset = () => {
        this.props.form.resetFields()
    }

    //将反馈数据提交到后台
    sendFeedBack = (message) => {
        const messageObj = JSON.stringify(message)
        const _this = this
        const promise = service.sendFeedBack(messageObj)
        promise.then(
            function (data) {
                if (data.status == 'OK') {
                    _this.handleReset()
                    // Message.success('您的反馈提交成功！',50)
                    alert('您的反馈提交成功！')
                }
            },
            function (err) {
                alert(err + '提交失败，请您稍后重试！')
            }
        ).catch(function (err) {
            alert(err + '提交失败，请您稍后重试！')
        })
    }


    render() {
        const {getFieldDecorator} = this.props.form
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
        })(
            <span style={{width: 70}}>
                +86
            </span>
        )

        const {TextArea} = Input

        return (
            <div className="call_container">
                <Form onSubmit={this.handleSubmit}>
                    <FormItem
                        {...formItemLayout}
                        label="反馈意见"
                        hasFeedback
                    >
                        {getFieldDecorator('feedback', {
                            rules: [{
                                required: true, message: '请输入反馈意见'
                            }],
                        })(
                            <TextArea rows={6}/>
                        )}
                    </FormItem>


                    <FormItem
                        {...formItemLayout}
                        label="联系电话"
                        hasFeedback
                    >
                        {getFieldDecorator('phone', {
                            rules: [{pattern: /^[1][3,4,5,7,8][0-9]{9}$/, required: true, message: '请输入您的电话号码!'}],
                        })(
                            <Input addonBefore={prefixSelector} style={{width: '100%'}}/>
                        )}
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="联系姓名"
                        hasFeedback
                    >
                        {getFieldDecorator('name', {
                            rules: [{
                                required: true, message: '请输入联系姓名',
                            }],
                        })(
                            <Input/>
                        )}
                    </FormItem>

                    <FormItem {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">提交</Button>
                    </FormItem>
                </Form>
            </div>
        )
    }
}

export default Form.create()(CallContainer)


