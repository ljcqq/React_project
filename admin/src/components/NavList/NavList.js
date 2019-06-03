import React from 'react'
import {Menu,Icon} from 'antd'
import Menus from '../../util/menuList'
import "./index.less"
import {Link} from "react-router-dom"
import {connect} from "react-redux"
import actionCreator from "../../store/Bread/actionCreator"
import {bindActionCreators} from "redux"
const SubMenu = Menu.SubMenu;
class Home extends React.Component{
  constructor(){
    super();
     this.state={
       Menus
     }
  }
  menuClick=(params)=>{
    console.log(params.item.props.title)
    // this.props.changeNav()
    this.props.changeNav(params.item.props.title)
  }
  renderMenuItem(data){
     return  data.map((item)=>{
       if(item.children){
        return (
          <SubMenu key={item.path} title={<span><Icon type="appstore" /><span>{item.title}</span></span>}>           
            {this.renderMenuItem(item.children)}
          </SubMenu>
       )
       }else{
        return <Menu.Item key={item.path} title={item.title}>
        <Link to={item.path}>
        {item.title}
        </Link>
        </Menu.Item>
       }    
     })
  }
  renderNav(){
     console.log(this.state.Menus)
     let arrs=this.state.Menus
     return this.renderMenuItem(arrs)
  }
  render(){
      return(
        <div className='nav'>
            <div  className='top'>
                <img src="/asset/logo.svg" alt=""/>
                <h3 id='top'> 1817admin</h3>
            </div>
            <Menu  style={{ width: 256 }} theme='dark' onClick={this.menuClick} >
                {this.renderNav()}
            </Menu>
        </div>       
      )
  }
}
export default connect((state=>state),(dispatch)=>{
  // return {
  //   changeNav(bread){
  //    let action = actionCreator.changeNav(bread)
  //    dispatch(action)
  //   }
  // }
  return bindActionCreators(actionCreator,dispatch)

})(Home)