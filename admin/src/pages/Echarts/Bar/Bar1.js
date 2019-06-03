
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
            series : [
                {
                    name:'一直活跃量',
                    type:'bar',
                    barWidth: '60%',
                    data:[10, 52, 200, 334, 390, 330, 220]
                }
            ]
        }
    }
    render(){
        return(
        <Card title="柱状图1">
            <ReactEcharts option={this.getOption()} />
        </Card>
        )
    }
} 
export default Bar