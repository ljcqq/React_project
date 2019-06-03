
import ReactEcharts from "echarts-for-react"
import {Card} from "antd"

import React from "react"
class Bar extends  React.Component{
    constructor(){
        super()
        let getOption = {
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
                    type:'line',
                    barWidth: '60%',
                    data:[10, 52, 200, 334, 390, 330, 220]
                }
            ]
        }
        this.state={
            getOption
        }
    }
componentWillMount(){
    this.$axios(" https://www.easy-mock.com/mock/5c2f2889b266c07434420f9a/react/getLine1")
    .then((res)=>{
        let getOption = JSON.parse(JSON.stringify(this.state.getOption))
        getOption.series[0].data = res.data
        this.setState({getOption})
    })
}   
    render(){
        return(
        <Card title="折线图">
            <ReactEcharts option={this.state.getOption} />
        </Card>
        )
    }
} 
export default Bar