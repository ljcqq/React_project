import React from "react"
import {Switch,BrowserRouter,Route,Redirect} from "react-router-dom"
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home"
import NOtFound from "../pages/NotFound"
import Product from "../pages/Product/Product"
import User from "../pages/User/User"
import Statistics from "../pages/Statistics/Statistics"
import Bar1 from "../pages/Echarts/Bar/Bar1"
import Bar2 from "../pages/Echarts/Bar/Bar2"
import Pie1 from "../pages/Echarts/Pie/Pie1"
// import Pie2 from "../pages/Echarts/Pie/Pie2"
import Pie3 from "../pages/Echarts/Pie/Pie3"
import Line1 from "../pages/Echarts/Line/Line1"
import Line2 from "../pages/Echarts/Line/Line2"
class Router extends React.Component{
    render(){
        return(
            <BrowserRouter>
            <div>
                <Switch>
                    <Route  exact path='/'>
                        <Redirect to='/login'></Redirect>
                    </Route>              
                    <Route path="/Home" render={(props)=>{
                        console.log(props)
                        return(
                            <Home {...props}>
                            <Route path="/home" component={Statistics}> </Route>
                             <Route path="/home/user/vip" component={User}></Route>
                             <Route path="/home/product" component={Product}></Route>
                             <Route path="/home/bar/bar1" component={Bar1}> </Route> 
                             <Route path="/home/bar/bar2" component={Bar2}> </Route> 
                             <Route path="/home/Pie/Pie1" component={Pie1}> </Route> 
                             {/* <Route path="/home/Pie/Pie2" component={Pie2}> </Route>  */}
                             <Route path="/home/Pie/Pie3" component={Pie3}> </Route> 
                             <Route path="/home/Line/Line1" component={Line1}> </Route> 
                             <Route path="/home/Line/Line2" component={Line2}> </Route> 
                            </Home>
                        )
                    }}></Route>
                    <Route path="/Login" component={Login}></Route>
                    <Route component={NOtFound}></Route>
                </Switch>
            </div>
            </BrowserRouter>
        )
    }
}
export default Router