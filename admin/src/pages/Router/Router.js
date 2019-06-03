import React from "react"
import A from "./a"
import B from "./b"
import C from "./c"
import {HashRouter,Link,Route} from 'react-router-dom'
class Router extends React.Component{
    render(){
        return(
            <HashRouter>
            <div>
                <ul>
                    <li>
                        <Link to="/">1</Link>
                    </li>
                    <li>
                        <Link to="/a">2</Link>
                    </li>
                    <li>
                        <Link to="/b">3</Link>
                    </li>
                </ul>
                <Route exact={true} path="/" component={C}></Route>
                 <Route path="/a" component={A}></Route>
                 <Route path="/b" component={B}></Route>
            </div>
           
            </HashRouter>
        )
    }
}
export default Router