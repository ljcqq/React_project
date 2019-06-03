import React from "react"
import "./index.less"
import {Button} from "antd"
import {connect} from 'react-redux'
class Header extends React.Component{
    exit=()=>{
        this.props.history.push('/login')
      }
      componentDidMount(){
        console.log(this,'header')
      }
    render(){
        let {bread} =this.props.Bread
        return(
            
            <div className='topContain'>
                <div className='top'>
                    <span>欢迎xxx登录</span>
                    <Button type="danger" onClick={this.exit}>退出</Button>
                </div>
                <div className='bottom'>
                <div>
                   {bread}
                </div>
                <span>2019.1.2 3：09：34</span>
                <span> 天气晴</span>
                </div>
          </div>
   
        )
    }
}
export default connect((state)=>state)(Header)