import ReactECharts, { EChartsOption } from "echarts-for-react"

const Diagram = () => {
    const options: EChartsOption = {
        title: {
          top: 'center'
        },
        tooltip: {
          trigger: 'item',
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          top: "middle",
          textStyle: {
            color: "black",
            fontSize: 20,
          }
        },
        series: [
          {
            name: 'Лиды',
            type: 'pie',
            radius: ['50%', '90%'],  // Внешний и внутренний радиусы
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center',
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '20',
                fontWeight: 'bold',
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 1048, name: 'Экспобанк' },
              { value: 735, name: 'Д2 страхование' },
              { value: 580, name: 'Автоэкспресс' },
              { value: 484, name: 'EXPOCAR' },
              { value: 484, name: 'П-О Xвоя' },
              { value: 300, name: 'Лизинг 1' },
              { value: 300, name: 'Лизинг 2' },
              { value: 300, name: 'Лизинг 3' },
              { value: 300, name: 'Лизинг 4' },
              { value: 300, name: 'Лизинг 5' },
            ],
          },
        ],
      };
    
    return <ReactECharts style={{height: "600px"}} option={options} />;
}
 
export default Diagram;