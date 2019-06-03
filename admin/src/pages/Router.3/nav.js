import React from "react"
import {Link} from "react-router-dom"

class Home extends React.Component{
    render(){
        return(
            <div>
                <ul>
                    <li>
                        <Link to="/admin/child">1</Link>
                    </li>
                    <li>
                        <Link to="/admin/reg">2</Link>
                    </li>
                    <li>
                        <Link to="/admin/login">3</Link>
                    </li>
                </ul>
            </div>
        )
    }
}
export default Home