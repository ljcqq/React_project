
import ReactEcharts from "echarts-for-react"
import {Card} from "antd"
import React from "react"
class Bar extends  React.Component{
    getOption(){
        return{
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            xAxis : [
                {
                    data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            legend:{
            data: ["pc","phone",'paid']},
            series : [
                {
                    name:'pc',
                    type:'line',                   
                    data:[10, 52, 220, 337, 90, 30, 220],
                    areaStyle:{}
                },
                {
                    name:'phone',
                    type:'line',
                    
                    data:[10, 52, 10, 34, 30, 30, 220],
                    areaStyle:{}
                },
                {
                    name:'paid',
                    type:'line',
                    
                    data:[10, 52, 200, 34, 90, 30, 220],
                    areaStyle:{
                        color:"pink"
                    }
                }
            ]
        }
    }
    render(){
        return(
        <Card title="柱状图2">
            <ReactEcharts option={this.getOption()} />
        </Card>
        )
    }
} 
export default Bar