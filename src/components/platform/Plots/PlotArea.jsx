import React from 'react'
import { useEffect } from "react"
import anychart from 'anychart'
import getData from './../../../getData';
import {getRandom} from "../../../helpers";
import { useToolType } from "../../../hooks/useToolType";

const PlotArea = () => {

  const drawTool = useToolType()

  const chart = anychart.stock()
  const table = anychart.data.table('date')
  table.addData(getData())
  let mapping = table.mapAs({date: 'date', value:'open'});
  let series = chart.plot(0).area(mapping)

  useEffect(() => {

    chart.container('plot')
    chart.draw()

    //simplifies further use
    let chartFeatures = chart.plot(0)

    series
    .normal().fill("#50A18E", 0.3)
    .normal().stroke('#50A18E', 1)

    let yAxis = chartFeatures.yAxis();
    let xAxis = chartFeatures.xAxis();
    
    yAxis.labels().format('${%Value}');
    yAxis.orientation('right');

    chartFeatures.priceIndicator({
      'series': series, 
      value: 'last-visible', 
      stroke: {color:'#50A18E', thickness: 2, }, 
      label:{background:'#50A18E', fontColor: 'white'}
    });

    let lineMarker = chartFeatures.lineMarker(); //dynamic date line
    lineMarker
      .axis(xAxis)
      .stroke({color:'#50A18E', thickness: 2, })

  /*let marker = chartFeatures.marker()
    marker
        .data('last-visible')
    .stroke({color: '#0E7465', opacity: '1'})*/ //try to add a dynamic point on newDate

    let crosshair = chartFeatures.crosshair();
    crosshair
      .xStroke("#97cbbf", 1.5)
      .yStroke("#97cbbf", 1.5)
      .displayMode("float");

    chartFeatures.annotations().enabled(true);

    chart.tooltip(false);
    chart.scroller(false);
    chartFeatures.legend(false);

    let margin = chart.margin()
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
        value: lastPoint.get('open') ,
      }])


    }, 1000)

    return () => clearInterval(interval)


}, [])

  React.useEffect(() => {
    chart.annotations().startDrawing(drawTool.toolType)
    console.log(drawTool.toolType)
    chart.listen("annotationDrawingFinish", function(){
      drawTool.toolType = "default";
    });
  }, [drawTool])

  return (
    <div id="plot" style={{height: '100%'}}>
    </div>
  )
}

export default PlotArea