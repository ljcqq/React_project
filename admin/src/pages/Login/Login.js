import React from 'react'
import "./index.less"
import {
    Form, Input, Button,Checkbox,Icon,Card
  } from 'antd';
class Login extends React.Component{
    login=()=>{
        // console.log(this.props.form.getFieldValue('userName'))
        // 获取用户输入的数据
        // let {validateFields} = this.props.form
        // validateFields((err,value)=>{
        //     console.log(err)
        //     console.log(value)
        //     if(err){
        //         message.error('输入有误,请重试', 1000)
        //     }else{
        //         message.success("登陆成功1后跳转",1, ()=>{
        //             this.props.history.push('/home/456')
        //         })
        //     }
        // })
        let data={
            pathname:'/home',
            state:{
                name:'王一',
                age:16
            }
        }
        this.props.history.push(data)

    }
  render(){
        let {getFieldDecorator}=this.props.form
    return (
        <Card title="Login" className='from-card'>
        <div  className="login-form">
        <Form.Item>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: '用户名不能为空!' },
                        { min:5,max:12, message: '用户名长度不符合规范!' }
                    ],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                    )}
                    </Form.Item>
                    <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '密码不能为空!' },
                        { pattern:/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,}$/ , 
                        message: '密码至少8位，要求必须字母、数字加英文符号' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    )}
                    </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className="login-form-forgot" >Forgot password</a>
          <Button onClick={this.login} htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </div>
      </Card>

    )
  }
}
export default Form.create()(Login)