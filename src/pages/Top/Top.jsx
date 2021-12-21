import React from 'react'
import { Dot } from '../../components/shared';
import { Widget } from '../../components/';
import { WidgetContent } from '../../components/Widget-Content/WidgetContent';
import { ToastContainer } from '../../components/shared/ToastContainer/ToastContainer';
import './top.css'
const Top = () => {

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
      {w.toast ? <ToastContainer label='prueba' /> : <WidgetContent {...w} />}
    </Widget>

  ));
  return (
    <div className='top'>
      {widgets}
    </div>
  )
}

export default Top
