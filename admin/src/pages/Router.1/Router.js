import React from "react"
import A from "./a"
import B from "./b"
import C from "./c"
import {BrowserRouter as Routers,Route} from 'react-router-dom'
class Router extends React.Component{
    render(){
        return(
            <Routers>
            <div>
                {this.props.children}
                <Route exact={true} path="/" component={C}></Route>
            <Route path="/a" component={A}></Route>
            <Route path="/b" component={B}></Route>
            </div>
           
            </Routers>
        )
    }
}
export default Router