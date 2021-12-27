import React, { useState, useEffect } from 'react'
import { Dot, ToastContainer, WidgetLabels } from '../shared';
import { Widget } from '../'
import axios from 'axios'
import { widgetData } from './WidgetData';





export const WidgetContent = () => {
  const [loc, setLoc] = useState(126)
  const [storeCom, setStoreCom] = useState(43)
  const [storeInci, setStoreInci] = useState(32)
  const [incidencias, setIncidencias] = useState(0)


  // useEffect(() => {
  //   const getLocalizaciones = async () => {
  //     const response = await axios.get('http://localhost:3001/api/v1/localizaciones')
  //     setLocalizaciones(response.data.length)
  //   }
  //   getLocalizaciones()
  // }, [])

  const widgets = widgetData.map((w) => (
    <Widget key={w.number} >
      {w.toast
        ? <ToastContainer label='prueba' />
        : <WidgetLabels
          totalLoc={w.string === 'Localizaciones' ? loc
            : w.string === 'Stores en comunicación' ? storeCom
              : w.string === 'Stores con incidencias' ? storeInci
                : incidencias} {...w} />}
    </Widget>
  ));

  return (
    <>
      {widgets}
    </>
  )
}
