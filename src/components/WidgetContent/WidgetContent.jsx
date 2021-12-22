import React from 'react'
import { Dot, ToastContainer, WidgetLabels } from '../shared';
import { Widget } from '../'


const widgetData = [
  {
    number: "126",
    string: "Localizaciones",
    clase: 'icon1',

  },
  {
    number: "456",
    string: "Tags selectionadas",
    icon: <Dot style={{ backgroundColor: "red" }} />,
    clase: 'icon1',
    toast: true

  },
  {
    number: "16",
    clase: 'icon1',
    string: 'Stores en comunicación',
    icon: <Dot style={{ backgroundColor: "red" }} />
  },

  {
    number: "21",
    string: "Incidencias",
    clase: 'icon1',
    icon: <Dot style={{ backgroundColor: "red" }} />,
  },
  {
    string: "Stores con incidencias",
    number: "5%",
    clase: 'icon1'
  },
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
