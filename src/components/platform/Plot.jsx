import styles from 'components/platform/Platform.module.scss'
import PlotArea from './Plots/PlotArea';
import PlotCandles from './Plots/PlotCandles';
import PlotLine from './Plots/PlotLine';
import { usePlotType } from '../../hooks/usePlotType';


const Plot = () => {

      const plot = usePlotType()

      if (!plot.plotType) return null

      if (plot.plotType === 'candlestick') {
          return (
              <div className={styles.plotWrapper}>
                      <PlotCandles/>
              </div>
          )
      } if (plot.plotType === 'linear') {
          return (
              <div className={styles.plotWrapper}>
                      <PlotLine/>
              </div>
          )

      } if (plot.plotType === 'zone') {
          return (
              <div className={styles.plotWrapper}>
                      <PlotArea/>
              </div>
          )
      }

}
export default Plot
































/*
useEffect(() => {
        function getData() {
          return [
            {x:'9:20', value: 10},
            {x:'9:25', value: 20},
            {x:'9:30', value: 30},
            {x:'9:35', value: 40},
            {x:'9:40', value: 50},
            {x:'9:45', value: 30},
            {x:'9:50', value: 20},
            {x:'9:55', value: 10,},
            {x:'10:00', value: 60,},
            {x:'10:05', value: 40,},
            {x:'10:10', value: 80,},
            {x:'10:15', value: 90,},
            {x:'10:20', value: 45,},
            {x:'10:25',value: 45, marker:{enabled:true, type:"circle", fill:{color: '#0E7465', opacity: '1'}, stroke:{color: '#0E7465', opacity: '1'}}}
          ];
        }
        
        var dataSet = anychart.data.set(getData());
        const chart = anychart.area()
        var series = chart.area(dataSet)
        chart.yAxis().labels().format('${%Value}');
        series.normal().fill("#50A18E", 0.3);
        series.normal().stroke('#50A18E', 1)
        chart.tooltip(false)
    
        var marker = chart.marker(series)
        marker.enabled(false)
    
        chart.animation(true);
    
        var xAxis = chart.xAxis();
        xAxis.labels().padding([5, 5, 0, 5]).rotation(90);
        //var indicator = chart.plot(0).priceIndicator({'series': series, value: 60, stroke: {color:'#50A18E', thickness: 2, }, label:{background:'#50A18E', fontColor: 'white'}});
        
        chart
          .tooltip()
          .position('center-top')
          .anchor('center-bottom')
          .positionMode('point');
        chart.yAxis().orientation("right"); 
        chart.interactivity().hoverMode('by-x');
        chart.container('plot')
        chart.draw()
    
        const interval = setInterval(() => {
    
        
          
        }, 2000)
        return () => clearInterval(interval)
    }, [])
*/

/*  
useEffect(() => {
    function getData() {
        return [
          {x:'9:20', value: 10},
          {x:'9:25', value: 20},
          {x:'9:30', value: 30},
          {x:'9:35', value: 40},
          {x:'9:40', value: 50},
          {x:'9:45', value: 30},
          {x:'9:50', value: 20},
          {x:'9:55', value: 10,},
          {x:'10:00', value: 60,},
          {x:'10:05', value: 40,},
          {x:'10:10', value: 80,},
          {x:'10:15', value: 90,},
          {x:'10:20', value: 45,},
          {x:'10:25',value: 45, marker:{enabled:true, type:"circle", fill:{color: '#0E7465', opacity: '1'}, stroke:{color: '#0E7465', opacity: '1'}}}
        ];
      }
    
    var dataSet = anychart.data.set(getData());
    const chart = anychart.line()
    var series = chart.line(dataSet)
    var yAxis = chart.yAxis();
    yAxis.labels().format('${%Value}');
    series.normal().fill("#50A18E", 0.3);
    series.normal().stroke('#50A18E', 1)

    chart.animation(true);
    var xAxis = chart.xAxis();

    yAxis.orientation('right');
    var lineMarker = chart.lineMarker()
    lineMarker.axis(chart.xAxis())
    
    chart.crosshair(true);
    chart.crosshair().xStroke("#97cbbf", 1.5);
    chart.crosshair().yStroke("#97cbbf", 1.5);
    chart.tooltip(false)
    
    chart.interactivity().hoverMode('by-x');
    chart.container('plot')
    chart.draw()

    const interval = setInterval(() => {

    
      
    }, 2000)
    return () => clearInterval(interval)
}, []) */
    /*   
    useEffect(() => { 
    const table = anychart.data.table('date') 
    table.addData(getData().reverse()) 
    const mapping = table.mapAs({date: 'date', open: 'open', high: 'high', low: 'low', close: 'close'}) 
    const selectable = mapping.createSelectable() 
    const chart = anychart.stock() 
    const series = chart.plot(0).candlestick(mapping) 
    chart.container('plot') 
    chart.draw() 
    
    
    const interval = setInterval(() => { 
    
    const range = chart.getSelectedRange() 
    const lastPoint = selectable.search(range.lastSelected, 'nearest') 
    
    const lastDate = new Date(lastPoint.get('date')) 
    const newDate = new Date(lastDate.setDate(lastDate.getDate() + 1)) 
    
    series.fallingFill("#BC7C1B"); 
    series.fallingStroke("#BC7C1B"); 
    series.risingFill("#50A18E"); 
    series.risingStroke("#50A18E");     
    chart.plot(0).yAxis().orientation("right"); 
    chart.interactivity().zoomOnMouseWheel(true); 
    var yAxis = chart.plot(0).yAxis()
    var indicator = chart.plot(0).priceIndicator({'series': series, value: 'last-visible', stroke: {color:'#50A18E', thickness: 2, }, label:{background:'#50A18E', fontColor: 'white'}});
    var plotInd = chart.plot(0).lineMarker({axis: yAxis, value:lastDate});
    var crosshair = chart.crosshair(); 
    crosshair.xStroke("#676069", 0.25, "5 2"); 
    crosshair.yStroke("#676069", 0.25, "5 2"); 
    crosshair.displayMode("float"); 
    chart.tooltip(false); 
    chart.scroller(false); 
    chart.plot(0).legend(false);
    var margin = chart.margin()
    margin.right(80)
    table.addData([{ 
    date: newDate.toLocaleDateString('fr-CA'), 
    open: lastPoint.get('close'), 
    high: lastPoint.get('high') * (1 + getRandom(-0.15, 0.15)), 
    low: lastPoint.get('low') * (1 + getRandom(-0.15, 0.15)), 
    close: lastPoint.get('close') * (1 + getRandom(-0.15, 0.15)) 
    }]) 
    }, 2000) 
    
    return () => clearInterval(interval) 
   }, [])
   */

   //-------------------NEW CHART-------------------------------------------
   /*
    useEffect(() => { 

    //chart data
    const table = anychart.data.table('date') 
    table.addData(getData()) 
    const mapping = table.mapAs({date: 'date', open: 'open', high: 'high', low: 'low', close: 'close'}) 

    //chart constructor
    const chart = anychart.stock() 
    const series = chart.plot(0).candlestick(mapping) 
    chart.container('plot') 
    chart.draw() 

    //colors of chart (candles)
    series
      .fallingFill("#BC7C1B") 
      .fallingStroke("#BC7C1B")
      .risingFill("#50A18E")
      .risingStroke("#50A18E");  
    
    //simplifies further use
    var chartFeatures = chart.plot(0)

    //chart axis
    var xAxis = chartFeatures.xAxis()
    var yAxis = chartFeatures.yAxis()  

    yAxis.orientation("right"); //prices to the right (default: left)
    chart.interactivity().zoomOnMouseWheel(true); //zoom = true
    chartFeatures.priceIndicator({ //dynamic price line
      'series': series, 
      value: 'last-visible', 
      stroke: {color:'#50A18E', thickness: 2, }, 
      label:{background:'#50A18E', fontColor: 'white'}
    }); 

    var lineMarker = chartFeatures.lineMarker(); //dynamic date line
    lineMarker
      .value(Date.UTC(2022, 8, 19))
      .axis(xAxis)
      .stroke({color:'#50A18E', thickness: 2, })

   
    //crosshair on cursor
    var crosshair = chartFeatures.crosshair(); 
    crosshair
      .xStroke("#676069", 1, "5 2")
      .yStroke("#676069", 1, "5 2") 
      .displayMode("float"); 
    
    //disabling useless features
    chart.tooltip(false); 
    chart.scroller(false); 
    chartFeatures.legend(false);

    //chart margin
    var margin = chart.margin()
    margin.right(100)

   }, [])
   */

  //-------------------NEW LINE-------------------------------------------

  /*
  useEffect(() => {
    const table = anychart.data.table() 
    table.addData([
      [Date.UTC(2022, 8, 19), 1.0860],
      [Date.UTC(2022, 8, 18), 1.0832],
      [Date.UTC(2022, 8, 17), 1.078],
      [Date.UTC(2022, 8, 16), 1.0781],
      [Date.UTC(2022, 8, 15), 1.0936],
      [Date.UTC(2022, 8, 14), 1.0932],
      [Date.UTC(2022, 8, 13), 1.0860],
      [Date.UTC(2022, 8, 12), 1.0857],
      [Date.UTC(2022, 8, 11), 1.0877],
      [Date.UTC(2022, 8, 10), 1.0865],
      [Date.UTC(2022, 8, 9), 1.0917],
      [Date.UTC(2022, 8, 8), 1.0893],
      [Date.UTC(2022, 8, 7), 1.0909],
      [Date.UTC(2022, 8, 6), 1.0891],
      [Date.UTC(2022, 8, 5), 1.0874],
      [Date.UTC(2022, 8, 4), 1.0797],
      [Date.UTC(2022, 8, 3), 1.0849],
      [Date.UTC(2022, 8, 2), 1.0872],
      [Date.UTC(2022, 8, 1), 1.0893],
      [Date.UTC(2022, 7, 31), 1.0939],
      [Date.UTC(2022, 7, 30), 1.0837],
      [Date.UTC(2022, 7, 29), 1.0889],
      [Date.UTC(2022, 7, 28), 1.0919],
      [Date.UTC(2022, 7, 27), 1.1104],
      [Date.UTC(2022, 7, 26), 1.1159],
      [Date.UTC(2022, 7, 25), 1.1208],
      [Date.UTC(2022, 7, 24), 1.1198],
      [Date.UTC(2022, 7, 23), 1.1293],
      [Date.UTC(2022, 7, 22), 1.1290],
      [Date.UTC(2022, 7, 21), 1.1324],
      [Date.UTC(2022, 7, 20), 1.1260],
      [Date.UTC(2022, 7, 19), 1.1155],
      [Date.UTC(2022, 7, 18), 1.1144],
      [Date.UTC(2022, 7, 17), 1.1128],
      [Date.UTC(2022, 7, 16), 1.1107],
      [Date.UTC(2022, 7, 15), 1.1135],
      [Date.UTC(2022, 7, 14), 1.1029],
      [Date.UTC(2022, 7, 13), 1.1020],
      [Date.UTC(2022, 7, 12), 1.1013],
      [Date.UTC(2022, 7, 11), 1.1023],
      [Date.UTC(2022, 7, 10), 1.0934],
      [Date.UTC(2022, 7, 9), 1.0873,]
        ]) 
        var mapping = table.mapAs();
        mapping.addField('value', 1);

    const chart = anychart.stock()
    var series = chart.plot(0).line(mapping)

    chart.container('plot')
    chart.draw()

    //simplifies further use
    var chartFeatures = chart.plot(0)

    series
    .normal().fill("#50A18E", 0.3)
    .normal().stroke('#50A18E', 3)

    var yAxis = chartFeatures.yAxis();
    var xAxis = chartFeatures.xAxis();

    
    yAxis.labels().format('${%Value}');
    yAxis.orientation('right');

    chartFeatures.priceIndicator({
      'series': series, 
      value: 'last-visible', 
      stroke: {color:'#50A18E', thickness: 2, }, 
      label:{background:'#50A18E', fontColor: 'white'}
    });

    var lineMarker = chartFeatures.lineMarker(); //dynamic date line
    lineMarker
      .value(Date.UTC(2022, 8, 19))
      .axis(xAxis)
      .stroke({color:'#50A18E', thickness: 2, })


    var marker = chartFeatures.marker()
    marker
    .stroke({color: '#0E7465', opacity: '1'})
     
    var crosshair = chartFeatures.crosshair(); 
    crosshair
      .xStroke("#97cbbf", 1.5)
      .yStroke("#97cbbf", 1.5)
      .displayMode("float"); 
    
    chart.tooltip(false)
    chartFeatures.legend(false);
  
    var margin = chart.margin()
    margin.right(100)

}, []) 
 */
//-------------------NEW AREA-------------------------------------------
/* 
useEffect(() => {
    const table = anychart.data.table() 
    table.addData([
      [Date.UTC(2022, 8, 19), 1.0860],
      [Date.UTC(2022, 8, 18), 1.0832],
      [Date.UTC(2022, 8, 17), 1.078],
      [Date.UTC(2022, 8, 16), 1.0781],
      [Date.UTC(2022, 8, 15), 1.0936],
      [Date.UTC(2022, 8, 14), 1.0932],
      [Date.UTC(2022, 8, 13), 1.0860],
      [Date.UTC(2022, 8, 12), 1.0857],
      [Date.UTC(2022, 8, 11), 1.0877],
      [Date.UTC(2022, 8, 10), 1.0865],
      [Date.UTC(2022, 8, 9), 1.0917],
      [Date.UTC(2022, 8, 8), 1.0893],
      [Date.UTC(2022, 8, 7), 1.0909],
      [Date.UTC(2022, 8, 6), 1.0891],
      [Date.UTC(2022, 8, 5), 1.0874],
      [Date.UTC(2022, 8, 4), 1.0797],
      [Date.UTC(2022, 8, 3), 1.0849],
      [Date.UTC(2022, 8, 2), 1.0872],
      [Date.UTC(2022, 8, 1), 1.0893],
      [Date.UTC(2022, 7, 31), 1.0939],
      [Date.UTC(2022, 7, 30), 1.0837],
      [Date.UTC(2022, 7, 29), 1.0889],
      [Date.UTC(2022, 7, 28), 1.0919],
      [Date.UTC(2022, 7, 27), 1.1104],
      [Date.UTC(2022, 7, 26), 1.1159],
      [Date.UTC(2022, 7, 25), 1.1208],
      [Date.UTC(2022, 7, 24), 1.1198],
      [Date.UTC(2022, 7, 23), 1.1293],
      [Date.UTC(2022, 7, 22), 1.1290],
      [Date.UTC(2022, 7, 21), 1.1324],
      [Date.UTC(2022, 7, 20), 1.1260],
      [Date.UTC(2022, 7, 19), 1.1155],
      [Date.UTC(2022, 7, 18), 1.1144],
      [Date.UTC(2022, 7, 17), 1.1128],
      [Date.UTC(2022, 7, 16), 1.1107],
      [Date.UTC(2022, 7, 15), 1.1135],
      [Date.UTC(2022, 7, 14), 1.1029],
      [Date.UTC(2022, 7, 13), 1.1020],
      [Date.UTC(2022, 7, 12), 1.1013],
      [Date.UTC(2022, 7, 11), 1.1023],
      [Date.UTC(2022, 7, 10), 1.0934],
      [Date.UTC(2022, 7, 9), 1.0873,]
        ]) 
        var mapping = table.mapAs();
        mapping.addField('value', 1);

    const chart = anychart.stock()
    var series = chart.plot(0).area(mapping)

    chart.container('plot')
    chart.draw()

    //simplifies further use
    var chartFeatures = chart.plot(0)

    series
    .normal().fill("#50A18E", 0.3)
    .normal().stroke('#50A18E', 1)

    var yAxis = chartFeatures.yAxis();
    var xAxis = chartFeatures.xAxis();

    
    yAxis.labels().format('${%Value}');
    yAxis.orientation('right');

    chartFeatures.priceIndicator({
      'series': series, 
      value: 'last-visible', 
      stroke: {color:'#50A18E', thickness: 2, }, 
      label:{background:'#50A18E', fontColor: 'white'}
    });

    var lineMarker = chartFeatures.lineMarker(); //dynamic date line
    lineMarker
      .value(Date.UTC(2022, 8, 19))
      .axis(xAxis)
      .stroke({color:'#50A18E', thickness: 2, })


    var marker = chartFeatures.marker()
    marker
    .stroke({color: '#0E7465', opacity: '1'})
     
    var crosshair = chartFeatures.crosshair(); 
    crosshair
      .xStroke("#97cbbf", 1.5)
      .yStroke("#97cbbf", 1.5)
      .displayMode("float"); 
    
    chart.tooltip(false)
    chartFeatures.legend(false);
  
    var margin = chart.margin()
    margin.right(100)

}, []) 
 */