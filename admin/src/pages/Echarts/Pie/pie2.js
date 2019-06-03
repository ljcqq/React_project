import React from 'react'
import echarts from 'echarts'
import ReactEcharts from 'echarts-for-react';
import {Card } from 'antd'
class Router extends React.Component{
    getOption(){
        return {
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
                    radius:['50%','80%'],
                    data:[{value:335, name:'直接访问'},
                    {value:310, name:'邮件营销'},
                    {value:234, name:'联盟广告'},
                    {value:135, name:'视频广告'},
                    {value:1548, name:'搜索引擎'}]
                }
            ]
        }
    }
   
  render(){
    return (
        <div>
        
        <Card title="环图1">
            <ReactEcharts option={this.getOption()} />
        </Card>
        </div>
        
    )
  }
}
export default Router