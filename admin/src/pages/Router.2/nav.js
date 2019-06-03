import React from "react"
import {Link} from "react-router-dom"

class Home extends React.Component{
    render(){
        return(
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
            </div>
        )
    }
}
export default Home