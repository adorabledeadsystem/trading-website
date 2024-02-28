import React from 'react'
import { useEffect } from "react"
import anychart from 'anychart'
import getData from './../../../getData';
import { getRandom } from 'helpers';

const PlotCandles = () => {
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
    yAxis.labels().format('${%Value}');

    chart.interactivity().zoomOnMouseWheel(true); //zoom = true
    chartFeatures.priceIndicator({ //dynamic price line
    'series': series, 
    value: 'last-visible', 
    stroke: {color:'#50A18E', thickness: 2, }, 
    label:{background:'#50A18E', fontColor: 'white'}
    });
    var lineMarker = chartFeatures.lineMarker(); //dynamic date line
    lineMarker
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


  

    const interval = setInterval(() => {

      const selectable = mapping.createSelectable()
      const range = chart.getSelectedRange()
      const lastPoint = selectable.search(range.lastSelected, 'nearest')
      const lastDate = new Date(lastPoint.get('date'))
      const newDate = new Date(lastDate.setDate(lastDate.getDate() + 1))
      lineMarker
          .value(newDate)

      table.addData([{
        date: newDate.toLocaleDateString('fr-CA'),
        open: lastPoint.get('close'),
        high: lastPoint.get('high') * (1 + getRandom(-0.15, 0.15)),
        low: lastPoint.get('low') * (1 + getRandom(-0.15, 0.15)),
        close: lastPoint.get('close') * (1 + getRandom(-0.15, 0.15))
      }])

    }, 600)
    
    return () => clearInterval(interval)

    }, [])
  return (
    <div id="plot" style={{height:'100%'}}></div>
  )
}

export default PlotCandles

