import React from "react"
import {Link} from "react-router-dom"
class component extends React.Component{
    render(){
        return(
            <div className="home">
                <Link to="/admin/login">跳转登陆</Link>
                <Link to="/admin/reg">跳转注册</Link>
            </div>
        )
    }
} 
export default component