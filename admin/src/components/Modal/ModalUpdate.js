import React from 'react'
import {Card,Button,Form,Input,message,Spin} from 'antd'
import './index.less'
class Modal extends React.Component{
 constructor(props){
  super(props)
  this.state={
      loading:false
  }

 }
 componentWillMount(){
     console.log(this.props.modelCacle1)
 }
  submit=()=>{
    let {validateFields}=this.props.form
    validateFields((err,data)=>{
        if(err){
           message.error('输入有误请重试',1)
        }else{
            console.log(data)
            this.setState({loading:true})
            setTimeout(()=>{
                this.setState({loading:false})
            },5000)
            // this.$axios('/addProduct')
            // .then((res)=>{
            //     this.setState({loading:false})
            //     if(res.err===0){
            //         message.success('添加ok',0.5,()=>{
            //             this.props.modelCacle()
            //         })
                    
            //     }else{
            //         message.error(res.msg,1)
            //     }
            // })
            
        }
    })
  }
  render(){
    let {getFieldDecorator} =this.props.form
    console.log(this.props)
   
    return (
      <div className='modalContainer'>
      <Spin spinning={this.state.loading}>
            <Card title="修改商品" className='card'> 
            <div  className="login-form">
                    <Form.Item>
                        
                    {getFieldDecorator('name', {
                        rules: [{ required: true, message: '请输入商品名称' }],
                    })(
                      <div className='inputContainer'>
                      <label>商品名称</label> 
                      <Input  placeholder="Username" />
                      </div>
                    )}
                    </Form.Item>
                    <Form.Item>
                    {getFieldDecorator('desc', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <div className='inputContainer'>
                        <label>描述</label> 
                        <Input  placeholder="Username" />
                        </div>
                    )}
                    </Form.Item>
                    <Form.Item>
                    {getFieldDecorator('price', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <div className='inputContainer'>
                        <label>价格</label> 
                        <Input  placeholder="Username" />
                        </div>
                    )}
                    </Form.Item>
                    <Form.Item>
                    {getFieldDecorator('type', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <div className='inputContainer'>
                        <label>类别</label> 
                        <Input  placeholder="Username" />
                        </div>
                    )}
                    </Form.Item>
          
                    <Form.Item>
                 
                    <div className='btns'>
                        <Button type="primary" onClick={this.submit} className="login-form-button">
                        提交
                        </Button>
                        <Button type="primary" onClick={this.props.modelCacle1} className="login-form-button">
                            取消
                        </Button>
                    </div>
                    
                    </Form.Item>
                </div>
               {/* <Button onClick={this.props.modelCacle}>取消</Button> */}
            </Card>
            </Spin>
      </div>
    )
  }
}
export default Form.create()(Modal)