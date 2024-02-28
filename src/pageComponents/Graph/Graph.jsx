import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const Graph = () => {
  const data = [
    {
      x: new Date("December 16, 1995 03:24:00"),
      y: [51.98, 56.29, 51.59, 53.85],
    },
    {
      x: new Date("December 17, 1995 03:24:00"),
      y: [53.66, 54.99, 51.35, 52.95],
    },
    {
      x: new Date("December 18, 1995 03:24:00"),
      y: [52.76, 57.35, 52.15, 57.03],
    },
    {
      x: new Date("December 17, 1995 03:24:00"),
      y: [53.66, 54.99, 51.35, 52.95],
    },
    {
      x: new Date("December 18, 1995 03:24:00"),
      y: [52.76, 57.35, 52.15, 57.03],
    },
    {
      x: new Date("December 17, 1995 03:24:00"),
      y: [53.66, 54.99, 51.35, 52.95],
    },
    {
      x: new Date("December 18, 1995 03:24:00"),
      y: [52.76, 57.35, 52.15, 57.03],
    },
    {
      x: new Date("December 17, 1995 03:24:00"),
      y: [53.66, 54.99, 51.35, 52.95],
    },
    {
      x: new Date("December 18, 1995 03:24:00"),
      y: [52.76, 57.35, 52.15, 57.03],
    },
    {
      x: new Date("December 17, 1995 03:24:00"),
      y: [53.66, 54.99, 51.35, 52.95],
    },
    {
      x: new Date("December 18, 1995 03:24:00"),
      y: [52.76, 57.35, 52.15, 57.03],
    },
    {
      x: new Date("December 17, 1995 03:24:00"),
      y: [53.66, 54.99, 51.35, 52.95],
    },
    {
      x: new Date("December 18, 1995 03:24:00"),
      y: [52.76, 57.35, 52.15, 57.03],
    },
    {
      x: new Date("December 17, 1995 03:24:00"),
      y: [53.66, 54.99, 51.35, 52.95],
    },
    {
      x: new Date("December 18, 1995 03:24:00"),
      y: [52.76, 57.35, 52.15, 57.03],
    },
    {
      x: new Date("December 17, 1995 03:24:00"),
      y: [53.66, 54.99, 51.35, 52.95],
    },
    {
      x: new Date("December 18, 1995 03:24:00"),
      y: [52.76, 57.35, 52.15, 57.03],
    },
    {
      x: new Date("December 17, 1995 03:24:00"),
      y: [53.66, 54.99, 51.35, 52.95],
    },
    {
      x: new Date("December 18, 1995 03:24:00"),
      y: [52.76, 57.35, 52.15, 57.03],
    },
    {
      x: new Date("December 17, 1995 03:24:00"),
      y: [53.66, 54.99, 51.35, 52.95],
    },
    {
      x: new Date("December 18, 1995 03:24:00"),
      y: [52.76, 57.35, 52.15, 57.03],
    },
    {
      x: new Date("December 17, 1995 03:24:00"),
      y: [53.66, 54.99, 51.35, 52.95],
    },
    {
      x: new Date("December 17, 1995 03:24:00"),
      y: [53.66, 54.99, 51.35, 52.95],
    },
    {
      x: new Date("December 17, 1995 03:24:00"),
      y: [53.66, 54.99, 51.35, 52.95],
    }
  ];
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        data: data.map((item) => ({
          x: item.x,
          y: item.y,
        })),
      },
    ],
    plotOptions: {
      candlestick: {
        wick: {
          useFillColor: false,
        },
      },
    },

  });

  return (
    <>
      <div>
        <ReactApexChart
          type="candlestick"
          options={state.options}
          series={state.series}
          // width={1550}
          // height={850}
        />
      </div>
      <div>
        <ReactApexChart
            type="zone"
            options={state.options}
            series={state.series}
            // width={1550}
            // height={850}
        />
      </div>
      <div>
        <ReactApexChart
            type="linear"
            options={state.options}
            series={state.series}
            // width={1550}
            // height={850}
        />
      </div>
    </>
  );
};

export default Graph;
