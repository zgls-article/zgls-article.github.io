$('#d90').click(refresh(90))
$('#d60').click(refresh(60))
$('#d30').click(refresh(30))
$('#d15').click(refresh(15))
$('#d7').click(refresh(7))
$('#any').click(diy)
$('#anyInput').keypress((e)=>{
  if(e.which=='13') diy()
})
function diy(){
  let info = $('#anyInput').val()
  if(!isNaN(info)){
    refresh(info)()
  }
  else{
    alert('请输入有效值')
  }
}
function refresh(choice){
  return(()=>{
    console.log('refresh')
    dataChoose(choice)
    bar1()
    bar2()
  })
} 
// 柱状图模块1
function bar1() {
  // 1.实例化对象
  var myChart = echarts.init(document.querySelector(".bar .chart"));
  // 2.指定配置项和数据
  var option = {
    color: ['#da3e3f'],
    // 提示框组件
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    // 修改图表位置大小
    grid: {
      left: '0%',
      top: '10%',
      right: '0%',
      bottom: '0%',
      containLabel: true
    },
    // x轴相关配置
    xAxis: [{
      type: 'category',
      data: redFreqX,
      axisTick: {
        alignWithLabel: true
      },
      // 修改刻度标签，相关样式
      axisLabel: {
        color: "rgba(255,255,255,0.8)",
        fontSize: 13
      },
      // x轴样式不显示
      axisLine: {
        show: false
      }
    }],
    // y轴相关配置
    yAxis: [{
      type: 'value',
      // 修改刻度标签，相关样式
      axisLabel: {
        color: "rgba(255,255,255,0.6)",
        fontSize: 12
      },
      // y轴样式修改
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,0.6)",
          width: 2
        }
      },
      // y轴分割线的颜色
      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255,0.1)"
        }
      }
    }],
    // 系列列表配置
    series: [{
      name: '最近红球频次',
      type: 'bar',
      barWidth: '35%',
      // ajax传动态数据
      data: redFreqY,
      itemStyle: {
        // 修改柱子圆角
        barBorderRadius: 5
      }
    }]
  };
  // 3.把配置项给实例对象
  myChart.setOption(option);

  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })
}
bar1()


// 柱状图模块2
function bar2() {
  // 1.实例化对象
  var myChart = echarts.init(document.querySelector(".bar2 .chart"));
  // 2.指定配置项和数据
  var option = {
    color: ['#2f89cf'],
    // 提示框组件
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    // 修改图表位置大小
    grid: {
      left: '0%',
      top: '10%',
      right: '0%',
      bottom: '0%',
      containLabel: true
    },
    // x轴相关配置
    xAxis: [{
      type: 'category',
      data: blueFreqX,
      axisTick: {
        alignWithLabel: true
      },
      // 修改刻度标签，相关样式
      axisLabel: {
        color: "rgba(255,255,255,0.8)",
        fontSize: 13
      },
      // x轴样式不显示
      axisLine: {
        show: false
      }
    }],
    // y轴相关配置
    yAxis: [{
      type: 'value',
      // 修改刻度标签，相关样式
      axisLabel: {
        color: "rgba(255,255,255,0.6)",
        fontSize: 12
      },
      // y轴样式修改
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,0.6)",
          width: 2
        }
      },
      // y轴分割线的颜色
      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255,0.1)"
        }
      }
    }],
    // 系列列表配置
    series: [{
      name: '最近蓝球频次',
      type: 'bar',
      barWidth: '35%',
      // ajax传动态数据
      data: blueFreqY,
      itemStyle: {
        // 修改柱子圆角
        barBorderRadius: 5
      }
    }]
  };
  // 3.把配置项给实例对象
  myChart.setOption(option);

  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })
}
bar2()

