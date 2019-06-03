import React from "react"
import NavList from "../../components/NavList/NavList"
import "../../style/mixin.less"
import "./index.less"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
class Home extends React.Component{
    //  componentDidMount(){
    //      console.log(this,Home)
    //      this.$axios.get('/hehe/api/getHome')
    // .then((res)=>{
    //   console.log(res)
    // })
    // .catch((err)=>{
    //   console.log(err)
    // })
    //  }  
    render(){
        return(
          <div className="home">
              <div className="left">
                <NavList></NavList>
              </div>
              <div className="right">
              <Header {...this.props}></Header>
               {this.props.children}
              <Footer></Footer>
              </div>
          </div>
        )
    }
}
export default Home