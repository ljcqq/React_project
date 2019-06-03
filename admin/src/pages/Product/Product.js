import React from "react"
import {Table, Card,Pagination,Button,Popconfirm,Spin} from "antd"
import Modal from "../../components/Modal/Modal"
import Update from '../../components/Modal/ModalUpdate'
class Product extends React.Component{
    constructor(){
        super()
        this.state={
            arr:[],
            visible:false,
            loading:false,
            visibleUpdate:false,
            selId:5
        }
    }
    modalCacle=()=>{
        this.setState({visible:false})
      }
      modalCacle1=()=>{
        this.setState({visibleUpdate:false})
      }
    addProduct=()=>{
        this.loadProduct()
        this.setState({visible:!this.state.visible})
        console.log("add")
      }
      changeProduct=(record)=>{
        this.setState({selId:record._id,visibleUpdate:true})
      }
    delTable=(record)=>{
        console.log(record._id)
        let newdata=this.state.arrs.filter((item)=>{
      if(item._id===record._id){
         return false
      }
      else{
        return item
      }
    })
    console.log(newdata)
    this.setState({arrs:newdata})
    this.loadProduct()
    }
    componentWillMount(){
        this.loadProduct()
        
      }
      loadProduct=()=>{
        this.setState({loading:true})
        this.$axios("https://www.easy-mock.com/mock/5c2f2889b266c07434420f9a/react/getProduct")
        .then((res)=>{
            let arrs = res.data.map((item,index)=>{
                // console.log(item)
                return item.key = index
            })
            // this.setState({arrs:res.data})
            this.setState({arrs:res.data,loading:false})
        })
      }
      pageChange=(page,pagesize)=>{
        console.log(page,pagesize)
     }
   
    render(){
      let columns =[
          {title:"id",dataIndex:"_id",width:80,fixed:"left"},
          {title:"名字",dataIndex:"name",width:150},
          {title:"图片",dataIndex:"imgPath",
        render(imgPath){
            return <img src={'http://47.95.207.1:8080'+imgPath} style={{width:20}} alt="图片" />
                     
        },width:120
        },
          {title:"类型",
          dataIndex:"type",
          render(type){
            let arr =["热菜","凉菜","酒水","饮料"]
            return arr[type] 
          }
          ,width:180
        
        },
        
          {title:"主题",dataIndex:"themeid",width:150},
          {title:"价格",dataIndex:"price",width:150,
          sorter:(a,b)=>a.price-b.price
        },
        {title:"时间",dataIndex:"ctime",width:150},
          {title:"操作",width:180,
          fixed:"right",
        render:(record)=>{
            return(
                
                <div>
                   
                   <Popconfirm 
                      title="确认删除嘛？" 
                      onConfirm={this.delTable.bind(this,record)} 
                   
                      >
                      <Button  size ='small' type='danger'>删除</Button>
                      </Popconfirm>
                      <Button   onClick ={this.changeProduct.bind(this,record)}size ='small' type='primary'>修改</Button>
                     
                </div>
            )
        }
        }

      ] 
        return(
            
            <Card title="商品管理" style={{width:1000}}>
                <Button onClick={this.addProduct} size='large' type="primary">添加商品</Button>
                <Spin spinning={this.state.loading}>
                <Table  scroll={{y:260,x:1150}} bordered columns={columns} dataSource={this.state.arrs} pagination={false}></Table>
                </Spin>
                <Pagination simple defaultCurrent={2} total={50} onChange={this.pageChange} />
                { !this.state.visible|| <Modal modelCacle={this.modalCacle}></Modal>}
                { !this.state.visibleUpdate|| <Update id={this.state.selId} modelCacle1={this.modalCacle1} ></Update>}
            </Card>
        )
    }
}
export default Product