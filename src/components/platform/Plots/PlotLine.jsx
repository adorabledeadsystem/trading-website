import React from 'react'
import { useEffect } from "react"
import anychart from 'anychart'
import { useState } from "react"
import getData from './../../../getData';

const PlotLine = () => {

  useEffect(() => {
    const table = anychart.data.table('date') 
    table.addData(getData()) 
    let mapping = table.mapAs({date: 'date', value:'open'});
    console.dir(mapping)

    const chart = anychart.stock()
    let series = chart.plot(0).line(mapping)

    chart.container('plot')
    chart.draw()
    chart.animation(true);
    //simplifies further use
    var chartFeatures = chart.plot(0)

    series
    .normal().fill("#50A18E", 0)
    .normal().stroke('#50A18E', 5)

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
    
    chart.tooltip(false);
    chart.scroller(false); 
    chartFeatures.legend(false);
  
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
        value: lastPoint.get('open') + 507 ,
      }])

    }, 1000)

}, []) 
  return (
    <div id="plot" style={{height:'100%'}}></div>
  )
}

export default PlotLine