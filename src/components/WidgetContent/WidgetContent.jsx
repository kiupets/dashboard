import React from 'react'
import { Dot, ToastContainer, WidgetLabels } from '../shared';
import {Widget} from '../'


const widgetData = [
    {
      number: "126",
      string: "1dashboard",
      icon: <Dot style={{ backgroundColor: "red" }} />,
      clase: 'icon1',

    },
    {
      number: "456",
      string: "1dashboard",
      icon: <Dot style={{ backgroundColor: "red" }} />,
      clase: 'icon1',
      toast: true

    },
    { number: "125", clase: 'icon1', string: 'dashboard', icon: <Dot style={{ backgroundColor: "red" }} /> },
    { number: "16", string: "1dashboard", clase: 'icon1' },
    { number: "89%", clase: 'icon1' },
  ];

  const widgets = widgetData.map((w) => (
    <Widget key={w.number} >
      {w.toast ? <ToastContainer label='prueba' /> : <WidgetLabels {...w} />}
    </Widget>

  ));
export const WidgetContent = () => {
    return (
        <>
            {widgets}
        </>
    )
}
