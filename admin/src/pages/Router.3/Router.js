import React from "react"
import A from "./a"
import B from "./b"
import C from "./c"
import Nav from "./nav"
import child from "./children"
import Login from "./Login"
import Reg from "./Reg"
import NotFound from "./NotFound"
import {BrowserRouter as Routers,Route,Switch} from 'react-router-dom'

class Router extends React.Component{
    render(){
        return(
            <Routers>
            <div>
                <Nav>
                  {this.props.children}
                </Nav>                
                <hr/>
                
                {/* <Route  path='/admin' render={
                 ()=>
                    (
                    <div>
                    <Route path='/admin/child' component={child}></Route>
                    <Route path='/admin/login' component={Login}></Route>
                    <Route path='/admin/reg'  component={Reg}></Route> 
                    </div>
                    )
                    }></Route> */}
                <Switch>
                <Route exact={true} path="/admin" component={child}></Route>
                <Route path="/admin/reg" component={Reg}></Route>
                <Route path="/admin/login" component={Login}></Route>
                <Route component={NotFound}></Route>
                </Switch>
            </div>  
            </Routers>
        )
    }
}
export default Router