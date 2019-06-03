import React from 'react'

import ReactEcharts from 'echarts-for-react';
import {Card } from 'antd'
class Router extends React.Component{
    constructor(){
        super()
        let getOption={
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                right:0,
                bottom:0,
                data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
            },
            series : [
                {
                    name:'周注册量',
                    type:'pie',
                    data:[{value:335, name:'直接访问'},
                    {value:310, name:'邮件营销'},
                    {value:234, name:'联盟广告'},
                    {value:135, name:'视频广告'},
                    {value:1548, name:'搜索引擎'}].sort(function(a,b){return a.value-b.value}),
                    roseType: 'area',

                }
            ]
        }
        this.state={
            getOption
        }
    }
componentWillMount(){
    this.$axios(" https://www.easy-mock.com/mock/5c2f2889b266c07434420f9a/react/getPie")
    .then((res)=>{
        let getOption = JSON.parse(JSON.stringify(this.state.getOption))
        getOption.series[0].data=res.data
        this.setState({getOption})

    })
}
   
  render(){
    return (
        <div>
        <Card title="南丁格尔1">
            <ReactEcharts option={this.state.getOption} />
        </Card>
       
        </div>
        
    )
  }
}
export default Router